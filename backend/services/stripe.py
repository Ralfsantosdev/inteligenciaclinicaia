import stripe
import os
from fastapi import HTTPException

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

def criar_sessao_checkout(email):
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price': 'preco_id_do_stripe',
            'quantity': 1,
        }],
        mode='subscription',
        success_url='https://seu-front.vercel.app/dashboard',
        cancel_url='https://seu-front.vercel.app',
        customer_email=email,
    )
    return session

def processar_webhook(payload, sig_header):
    webhook_secret = os.getenv("STRIPE_WEBHOOK_SECRET")
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, webhook_secret
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        print("Pagamento confirmado para", session['customer_email'])
    return {"status": "success"}

