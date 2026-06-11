import bcrypt
import hashlib

def _pre_hash(password: str) -> bytes:
    """Bypasses bcrypt's 72-byte limit and returns bytes."""
    sha_string = hashlib.sha256(password.encode("utf-8")).hexdigest()
    return sha_string.encode("utf-8")

def hash_password(password: str) -> str:
    prepared = _pre_hash(password)
    # Generate a salt and hash the password
    salt = bcrypt.gensalt()
    hashed_bytes = bcrypt.hashpw(prepared, salt)
    # Convert bytes to string to store cleanly in your String(255) column
    return hashed_bytes.decode("utf-8")

def verify_password(password: str, hashed_password: str) -> bool:
    prepared = _pre_hash(password)
    # Compare the incoming plaintext against the stored hash string
    return bcrypt.checkpw(prepared, hashed_password.encode("utf-8"))