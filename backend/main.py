from fastapi import FastAPI
from routes import auth, ads, payment
from fastapi.middleware.cors import CORSMiddleware
from routes import stripe_webhooks

app = FastAPI(title="SaaS Gerador de Anúncios")

origins = [
    "https://github.com/Ralfsantosdev/ads_para_clinica",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth")
app.include_router(ads.router, prefix="/ads")
app.include_router(payment.router, prefix="/payment")
app.include_router(stripe_webhooks.router)

@app.get("/")
def read_root():
    return {"status": "API Online"}

