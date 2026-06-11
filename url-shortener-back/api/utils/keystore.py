import json
import logging

from jwcrypto import jwk, jwe

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class InMemoryKeyStore:
    def __init__(self):
        self.public_ec_jwk = ""
        self.private_ec_jwk = ""
        self.generate_new_key()

    def generate_new_key(self):
        """Generates a new RSA keypair and stores it in memory."""
        ec_key = jwk.JWK.generate(kty='RSA', size=2048)
        self.public_ec_jwk = ec_key.export_public()
        self.private_ec_jwk = ec_key.export_private()

    def get_jwks(self) -> dict:
        return json.loads(self.public_ec_jwk)

    def decrypt_value(self, encrypted_str: str) -> str:
        key = jwk.JWK.from_json(self.private_ec_jwk)
        jwe_token = jwe.JWE()
        jwe_token.deserialize(encrypted_str)
        jwe_token.decrypt(key)

        decrypted_password = jwe_token.payload
        
        return decrypted_password.decode('utf-8')
    
    def encrypt_value(self, payload: str) -> str:
        jwe_token = jwe.JWE(
            payload,
            recipient=jwk.JWK.from_json(self.public_ec_jwk),
            protected={
                "alg": "RSA-OAEP-256",
                "enc": "A256CBC-HS512",
                "typ": "JWE"
            }
        )
        return jwe_token.serialize()

central_key_store = InMemoryKeyStore()