import { useState } from "react";
import { supabase } from "../lib/supabase";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AtividadeDetalhe() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleUpload() {
    if (!file) {
      alert("Selecione um arquivo antes de enviar.");
      return;
    }

    setLoading(true);

    const fileName = `atividade-${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("submissions")
      .upload(fileName, file);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Erro ao enviar arquivo.");
    } else {
      alert("Arquivo enviado com sucesso! 🎉");
      setFile(null);
    }
  }

  return (
    <div className="max-w-[900px] mx-auto space-y-6">

      {/* VOLTAR */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600"
      >
        <ArrowLeft size={16} />
        Voltar
      </button>

      {/* CARD PRINCIPAL */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-4">

        <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">
          Pendente
        </span>

        <h1 className="text-2xl font-bold">
          Trabalho Prático – Listas Encadeadas
        </h1>

        <p className="text-slate-500 text-sm">
          Estrutura de Dados · Prof. Carlos Souza
        </p>

        <p className="text-sm text-slate-500">
          Prazo: 01/04/2024
        </p>

        <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600">
          Desenvolver uma implementação de listas encadeadas em Java,
          incluindo inserção, remoção e busca de elementos.
        </div>

        {/* UPLOAD */}
        <div className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3">

          <Upload size={28} className="text-slate-400" />

          <p className="text-sm text-slate-500">
            {file ? `Arquivo selecionado: ${file.name}` : "Selecione um arquivo"}
          </p>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="text-sm"
          />

        </div>

        {/* BOTÃO ENVIAR */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar atividade"}
        </button>

      </div>
    </div>
  );
}