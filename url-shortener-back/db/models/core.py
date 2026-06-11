from typing import List, Optional

from sqlalchemy import Enum, ForeignKey, Boolean, Integer, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

from db.models.enum.subscription import SubscriptionEnum
from db.models.mixin.timestamp import TimestampMixin

from utils.password import hash_password, verify_password

class ShortenerBase(DeclarativeBase):
    pass

#######################
# Base subscription
#######################

class Subscription(ShortenerBase, TimestampMixin):
    __tablename__ = "subscription"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[SubscriptionEnum] = mapped_column(Enum(SubscriptionEnum))
    description: Mapped[str] = mapped_column(String)
    limit: Mapped[int] = mapped_column(Integer)
    price: Mapped[int] = mapped_column(Integer)

    profile_subscription_list: Mapped[List["ProfileSubscription"]] = relationship(back_populates="subscription")
    
    soft_deleted: Mapped[bool] = mapped_column(Boolean, default=False)

#######################
# User
#######################

class User(ShortenerBase, TimestampMixin):
    __tablename__ = "user"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    username: Mapped[str] = mapped_column(String, unique=True)
    # Password stored as a hashed string (e.g., 60 chars for bcrypt, 255 for safety)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)

    # uselist=False turns this from a one-to-many into a one-to-one
    profile = relationship("Profile", back_populates="user", cascade="all, delete-orphan", uselist=False)
    refresh_token_list: Mapped[List["UserAuth"]] = relationship(back_populates="user", cascade="all, delete-orphan")

    soft_deleted: Mapped[bool] = mapped_column(Boolean, default=False)

    @property
    def password(self):
        raise AttributeError('Password is not a readable attribute.')

    @password.setter
    def password(self, plaintext_password):
        # Automatically hashes the password when you set it
        self.password_hash = hash_password(plaintext_password)

    def verify_password(self, plaintext_password):
        # Checks the plain text against the stored hash
        return verify_password(self.password_hash, plaintext_password)
    
class Profile(ShortenerBase, TimestampMixin):
    __tablename__ = "profile"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    name: Mapped[str] = mapped_column(String)
    profile_img: Mapped[str] = mapped_column(String, default="")
    
    soft_deleted: Mapped[bool] = mapped_column(Boolean, default=False)

    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    user: Mapped["User"] = relationship(back_populates="profile")

    subscription: Mapped[Optional["ProfileSubscription"]] = relationship(back_populates="profile", cascade="all, delete-orphan")
    url_list: Mapped[List["Url"]] = relationship(back_populates="profile", cascade="all, delete-orphan")
    
class UserAuth(ShortenerBase, TimestampMixin):
    __tablename__ = "user_auth"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    token: Mapped[str] = mapped_column(String, unique=True)
    refresh_token: Mapped[str] = mapped_column(String, unique=True)
    revoked: Mapped[bool] = mapped_column(Boolean, default=False)
    
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))

    user: Mapped["User"] = relationship(back_populates="refresh_token_list")

class ProfileSubscription(ShortenerBase, TimestampMixin):
    __tablename__ = "user_subscription"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    profile_id: Mapped[int] = mapped_column(ForeignKey("profile.id"), unique=True)
    subscription_id: Mapped[int] = mapped_column(ForeignKey("subscription.id"))

    # saved limit at the time of subscription
    limit: Mapped[int] = mapped_column(Integer)
    price: Mapped[int] = mapped_column(Integer)

    profile: Mapped["Profile"] = relationship(back_populates="subscription", uselist=False)
    subscription: Mapped["Subscription"] = relationship(back_populates="profile_subscription_list", uselist=False)

#######################
# Url
#######################

class Analytics(ShortenerBase, TimestampMixin):

    __tablename__ = "analytics"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    query_ip: Mapped[str] = mapped_column(String(128), nullable=False)
    user_agent: Mapped[str] = mapped_column(String(1024), nullable=False)

    url_id: Mapped[int] = mapped_column(ForeignKey("url.id"))
    url: Mapped["Url"] = relationship(back_populates="analytics_list")

class Url(ShortenerBase, TimestampMixin):

    __tablename__ = "url"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    creator_ip: Mapped[str] = mapped_column(String(128), nullable=False)

    mapped_url_id: Mapped[str] = mapped_column(String(128), nullable=False, index=True)
    original_url: Mapped[str] = mapped_column(String(2048), nullable=False)

    soft_deleted: Mapped[bool] = mapped_column(Boolean, default=False)

    profile_id: Mapped[Optional[int]] = mapped_column(ForeignKey("profile.id"), nullable=True)

    profile: Mapped["Profile"] = relationship(back_populates="url_list")
    analytics_list: Mapped[List[Analytics]] = relationship(back_populates="url", cascade="all, delete-orphan")
