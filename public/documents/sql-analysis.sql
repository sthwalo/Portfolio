-- SQL Security Analysis Queries

-- 1. Failed Login Attempts Analysis
SELECT 
    username,
    COUNT(*) as failed_attempts,
    MIN(attempt_time) as first_attempt,
    MAX(attempt_time) as last_attempt
FROM login_attempts
WHERE success = false
GROUP BY username
HAVING COUNT(*) > 5
ORDER BY failed_attempts DESC;

-- 2. Suspicious Activity Detection
SELECT 
    user_id,
    action_type,
    COUNT(*) as action_count,
    MIN(action_time) as first_action,
    MAX(action_time) as last_action
FROM user_actions
WHERE action_time >= NOW() - INTERVAL '1 hour'
GROUP BY user_id, action_type
HAVING COUNT(*) > 100;

-- 3. Privilege Escalation Detection
SELECT 
    ua.user_id,
    u.username,
    ua.action_type,
    ua.action_time,
    ua.previous_role,
    ua.new_role
FROM user_actions ua
JOIN users u ON ua.user_id = u.id
WHERE ua.action_type = 'role_change'
AND ua.action_time >= NOW() - INTERVAL '24 hours';

-- 4. Data Exfiltration Detection
SELECT 
    user_id,
    query_type,
    COUNT(*) as query_count,
    SUM(rows_affected) as total_rows,
    MIN(query_time) as first_query,
    MAX(query_time) as last_query
FROM query_logs
WHERE query_type = 'SELECT'
AND rows_affected > 1000
GROUP BY user_id, query_type
HAVING COUNT(*) > 10;

-- 5. Access Pattern Analysis
WITH user_access_patterns AS (
    SELECT 
        user_id,
        DATE_TRUNC('hour', access_time) as access_hour,
        COUNT(*) as access_count
    FROM access_logs
    GROUP BY user_id, DATE_TRUNC('hour', access_time)
)
SELECT 
    user_id,
    access_hour,
    access_count,
    AVG(access_count) OVER (
        PARTITION BY user_id 
        ORDER BY access_hour 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as moving_average
FROM user_access_patterns
WHERE access_count > 2 * (
    SELECT AVG(access_count)
    FROM user_access_patterns uap2
    WHERE uap2.user_id = user_access_patterns.user_id
);

-- 6. Sensitive Data Access Monitoring
SELECT 
    u.username,
    t.table_name,
    COUNT(*) as access_count
FROM access_logs al
JOIN users u ON al.user_id = u.id
JOIN tables t ON al.table_id = t.id
WHERE t.sensitivity_level = 'HIGH'
AND al.access_time >= NOW() - INTERVAL '7 days'
GROUP BY u.username, t.table_name
ORDER BY access_count DESC;

-- 7. After-Hours Access Detection
SELECT 
    u.username,
    al.access_time,
    al.action_type,
    al.ip_address
FROM access_logs al
JOIN users u ON al.user_id = u.id
WHERE EXTRACT(HOUR FROM al.access_time) NOT BETWEEN 9 AND 17
AND al.access_time >= NOW() - INTERVAL '24 hours'
ORDER BY al.access_time DESC;
