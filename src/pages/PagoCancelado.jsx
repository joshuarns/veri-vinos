import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

function PagoCancelado() {
  useSEO({ titulo: "Pago cancelado" });

  return (
    <div style={{ backgroundColor: "#f5f5f7", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: "48px 40px", maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>

        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 36 }}>
          ❌
        </div>

        <h1 style={{ fontFamily: "'Bai Jamjuree', sans-serif", fontSize: 26, fontWeight: 700, color: "#1d1d1f", marginBottom: 12 }}>
          Pago cancelado
        </h1>

        <p style={{ fontFamily: "Mulish, sans-serif", fontSize: 15, color: "#6e6e73", lineHeight: 1.7, marginBottom: 32 }}>
          No se realizó ningún cargo. Puedes intentarlo de nuevo o contactarnos si necesitas ayuda.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/checkout" style={{ background: "#1c2946", color: "#fff", padding: "13px 28px", borderRadius: 30, fontFamily: "'Bai Jamjuree', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Volver al checkout
          </Link>
          <a href="https://wa.link/6sp0dr" target="_blank" rel="noreferrer" style={{ background: "transparent", color: "#1c2946", border: "1.5px solid #1c2946", padding: "13px 28px", borderRadius: 30, fontFamily: "'Bai Jamjuree', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Contactar asesor
          </a>
        </div>

      </div>
    </div>
  );
}

export default PagoCancelado;
