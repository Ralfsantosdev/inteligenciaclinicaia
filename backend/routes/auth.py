from fastapi import APIRouter, HTTPException, Request
from services.supabase import supabase, create_jwt
from routes import auth, ads, payment
router = APIRouter()

@router.post("/login")
def login(request: Request):
    data = request.json()
    email = data.get("email")
    password = data.get("password")
    user = supabase.auth.sign_in_with_password({"email": email, "password": password})
    if not user:
        raise HTTPException(status_code=401, detail="Login inválido")
    token = create_jwt(user.user.id)
    return {"access_token": token}

