from pydantic import BaseModel

class SubscribeRequest(BaseModel):
    subscription_id: int
    limit: int
    price: int

class SubscriptionResponse(BaseModel):
    subscription_id: int
    name: str
    description: str
    limit: int
    price: int
    subscribed: bool