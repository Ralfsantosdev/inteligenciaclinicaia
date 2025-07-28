import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def gerar_anuncio(nicho, objetivo):
    prompt = f"Crie um anúncio persuasivo para uma clínica de {nicho}, com o objetivo de {objetivo}."
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=500
    )
    anuncio = response['choices'][0]['message']['content']
    return anuncio.strip()

