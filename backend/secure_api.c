#include <stdio.h>
#include <openssl/aes.h>
#include <openssl/rand.h>
#include <openssl/evp.h>
#include <string.h>

#define KEY_SIZE 32
#define IV_SIZE 16

typedef struct {
    unsigned char key[KEY_SIZE];
    unsigned char iv[IV_SIZE];
} SecurityContext;

SecurityContext* initialize_security(void) {
    SecurityContext* ctx = malloc(sizeof(SecurityContext));
    if (!ctx) return NULL;

    if (RAND_bytes(ctx->key, KEY_SIZE) != 1 ||
        RAND_bytes(ctx->iv, IV_SIZE) != 1) {
        free(ctx);
        return NULL;
    }

    return ctx;
}

int encrypt_data(SecurityContext* ctx, const unsigned char* plaintext, 
                size_t plaintext_len, unsigned char* ciphertext) {
    EVP_CIPHER_CTX *cipher_ctx = EVP_CIPHER_CTX_new();
    int len, ciphertext_len;

    EVP_EncryptInit_ex(cipher_ctx, EVP_aes_256_gcm(), NULL, ctx->key, ctx->iv);
    EVP_EncryptUpdate(cipher_ctx, ciphertext, &len, plaintext, plaintext_len);
    ciphertext_len = len;
    EVP_EncryptFinal_ex(cipher_ctx, ciphertext + len, &len);
    ciphertext_len += len;

    EVP_CIPHER_CTX_free(cipher_ctx);
    return ciphertext_len;
} 