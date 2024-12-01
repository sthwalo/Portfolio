interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Documentation {
  title: string;
  link: string;
  description?: string;
}

export interface Project {
  technologies(technologies: any): unknown;
  id: number;
  title: string;
  description: string;
  shortDescription?: string;
  detailedDescription?: string[];
  skills: string[];
  skillDetails?: string[];
  tools?: string[];
  toolDetails?: string[];
  process?: ProcessStep[];
  outcomes?: string[];
  challenges?: Challenge[];
  documentation?: Documentation[];
  resources?: Documentation[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Professional Statement",
    description: "A comprehensive professional statement highlighting my cybersecurity expertise, ethical principles, and career goals.",
    shortDescription: "Crafting a compelling narrative of my cybersecurity professional journey.",
    detailedDescription: [
      "Developed a compelling professional statement that effectively communicates my passion for cybersecurity and commitment to protecting organizations from cyber threats.",
      "Articulated my unique value proposition, combining technical expertise with strong analytical and problem-solving skills.",
      "Emphasized my dedication to ethical practices and continuous learning in the rapidly evolving field of cybersecurity."
    ],
    skills: ["Professional Writing", "Career Development", "Personal Branding"],
    skillDetails: [
      "Clear and concise communication of technical concepts",
      "Strategic personal brand development",
      "Professional value proposition articulation"
    ],
    process: [
      {
        title: "Self-Assessment",
        description: "Conducted a thorough analysis of my skills, experiences, and career aspirations"
      },
      {
        title: "Market Research",
        description: "Researched industry trends and in-demand cybersecurity skills"
      },
      {
        title: "Statement Development",
        description: "Crafted a compelling narrative that highlights my unique value proposition"
      },
      {
        title: "Refinement",
        description: "Iteratively improved the statement based on feedback and industry best practices"
      }
    ],
    outcomes: [
      "Clearly articulated cybersecurity mission and values",
      "Defined professional strengths and interests",
      "Established clear career objectives",
      "Created a memorable personal brand in cybersecurity"
    ],
    documentation: [
      {
        title: "Professional Statement Document",
        link: "/documents/professional-statement.pdf",
        description: "Full professional statement with career objectives"
      }
    ],
    technologies: function (technologies: any): unknown {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: 2,
    title: "Security Audit",
    description: "Conducted a detailed security audit for a fictional company, identifying vulnerabilities and providing remediation recommendations.",
    detailedDescription: [
      "Performed a comprehensive security audit following industry-standard frameworks and methodologies.",
      "Identified critical vulnerabilities and security gaps in the organization's infrastructure and processes.",
      "Developed detailed remediation plans with prioritized recommendations and implementation timelines."
    ],
    skills: ["Security Assessment", "Risk Analysis", "Compliance", "Documentation"],
    skillDetails: [
      "Security controls evaluation",
      "Risk assessment methodologies",
      "Compliance framework implementation",
      "Technical documentation"
    ],
    tools: ["NIST Framework", "Risk Assessment Tools", "Security Assessment Software"],
    toolDetails: [
      "NIST Cybersecurity Framework implementation",
      "Risk assessment matrix development",
      "Vulnerability scanning and analysis"
    ],
    process: [
      {
        title: "Planning",
        description: "Defined audit scope, objectives, and methodology"
      },
      {
        title: "Assessment",
        description: "Conducted thorough security controls evaluation"
      },
      {
        title: "Analysis",
        description: "Analyzed findings and identified security gaps"
      },
      {
        title: "Reporting",
        description: "Developed comprehensive audit report with recommendations"
      }
    ],
    outcomes: [
      "Comprehensive security controls assessment",
      "Detailed findings report with risk ratings",
      "Prioritized remediation recommendations",
      "Implementation roadmap with timelines"
    ],
    challenges: [
      {
        title: "Complex Infrastructure",
        description: "Dealing with diverse systems and technologies",
        solution: "Developed a systematic approach to evaluate each component while maintaining a holistic view"
      },
      {
        title: "Risk Prioritization",
        description: "Determining the most critical vulnerabilities",
        solution: "Implemented a risk-based scoring system considering impact and likelihood"
      }
    ],
    documentation: [
      {
        title: "Security Audit Report",
        link: "/documents/security-audit.pdf",
        description: "Complete audit findings and recommendations"
      },
      {
        title: "Security Controls Matrix",
        link: "/documents/controls-matrix.xlsx",
        description: "Detailed assessment of security controls"
      }
    ],
    technologies: function (technologies: any): unknown {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: 3,
    title: "Network Security Analysis",
    description: "Analysis of network structure and security implementations, including threat assessment and security recommendations.",
    detailedDescription: [
      "Conducted a thorough analysis of network architecture and security controls.",
      "Performed network traffic analysis to identify potential security threats and anomalies.",
      "Developed comprehensive security recommendations based on best practices and industry standards."
    ],
    skills: ["Network Security", "Threat Analysis", "Security Architecture"],
    skillDetails: [
      "Network topology analysis",
      "Traffic monitoring and analysis",
      "Security control assessment",
      "Threat modeling"
    ],
    tools: ["Wireshark", "Nmap", "Network Diagrams", "Packet Analyzers"],
    toolDetails: [
      "Wireshark for deep packet inspection",
      "Nmap for network mapping and security auditing",
      "Network diagram creation and analysis"
    ],
    process: [
      {
        title: "Network Mapping",
        description: "Created detailed network topology diagrams"
      },
      {
        title: "Traffic Analysis",
        description: "Monitored and analyzed network traffic patterns"
      },
      {
        title: "Vulnerability Assessment",
        description: "Identified potential security weaknesses"
      },
      {
        title: "Recommendations",
        description: "Developed security improvement strategies"
      }
    ],
    outcomes: [
      "Detailed network security assessment",
      "Traffic analysis findings",
      "Security control recommendations",
      "Implementation guidelines"
    ],
    challenges: [
      {
        title: "Complex Traffic Patterns",
        description: "Analyzing large volumes of network traffic",
        solution: "Implemented automated analysis tools and filtering techniques"
      }
    ],
    documentation: [
      {
        title: "Network Analysis Report",
        link: "/documents/network-analysis.pdf",
        description: "Complete network security assessment"
      }
    ],
    technologies: function (technologies: any): unknown {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: 4,
    title: "Linux File Permissions Management",
    description: "Demonstrated expertise in Linux file system security through practical permission management scenarios.",
    detailedDescription: [
      "Implemented secure file permissions using Linux command-line tools.",
      "Created and managed user groups for effective access control.",
      "Developed documentation for file permission best practices."
    ],
    skills: ["Linux Administration", "File System Security", "Command Line"],
    tools: ["Linux CLI", "chmod", "chown", "ACL"],
    process: [
      {
        title: "Permission Analysis",
        description: "Assessed current file permissions and access controls"
      },
      {
        title: "Implementation",
        description: "Applied appropriate permissions using Linux commands"
      },
      {
        title: "Documentation",
        description: "Created guides for permission management"
      }
    ],
    documentation: [
      {
        title: "Permission Management Guide",
        link: "/documents/linux-permissions.pdf",
        description: "Comprehensive guide to Linux file permissions"
      }
    ],
    technologies: function (technologies: any): unknown {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: 5,
    title: "SQL Security Analysis",
    description: "Applied SQL filters and queries to analyze security logs and identify potential security incidents.",
    detailedDescription: [
      "Developed SQL queries for security log analysis.",
      "Created filters to identify suspicious patterns.",
      "Implemented automated reporting for security incidents."
    ],
    skills: ["SQL", "Data Analysis", "Security Monitoring"],
    tools: ["MySQL", "Security Log Analysis Tools"],
    documentation: [
      {
        title: "SQL Analysis Scripts",
        link: "/documents/sql-analysis.sql",
        description: "Collection of SQL queries for security analysis"
      }
    ],
    technologies: function (technologies: any): unknown {
      throw new Error("Function not implemented.");
    }
  }
];
