import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  const gerarAnuncio = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://backend-clinica.onrender.com/anuncio", { texto: input });
      setResultado(response.data.resultado);
    } catch (error) {
      setResultado("Erro ao gerar anúncio.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎯 Gerador de Anúncios para Clínicas</h1>
      <textarea
        rows="4"
        cols="60"
        placeholder="Descreva a clínica, serviço ou público-alvo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
      />
      <br />
      <button onClick={gerarAnuncio} disabled={loading} style={{ padding: "0.5rem 1rem" }}>
        {loading ? "Gerando..." : "Gerar Anúncio"}
      </button>
      <hr style={{ margin: "2rem 0" }} />
      <h2>🧠 Resultado:</h2>
      <p>{resultado}</p>
    </div>
  );
}

