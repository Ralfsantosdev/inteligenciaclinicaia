from fastapi import APIRouter, HTTPException, Request
from services.openai import gerar_anuncio

router = APIRouter()

@router.post("/gerar")
def gerar(request: Request):
    data = request.json()
    nicho = data.get("nicho")
    objetivo = data.get("objetivo")
    resultado = gerar_anuncio(nicho, objetivo)
    if not resultado:
        raise HTTPException(status_code=500, detail="Erro ao gerar anúncio")
    return {"anuncio": resultado}

