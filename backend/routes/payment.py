from fastapi import APIRouter, Request
from services.stripe import criar_sessao_checkout, processar_webhook

router = APIRouter()

@router.post("/checkout")
def checkout(request: Request):
    data = request.json()
    email = data.get("email")
    session = criar_sessao_checkout(email)
    return {"checkout_url": session.url}

@router.post("/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    return processar_webhook(payload, sig_header)

