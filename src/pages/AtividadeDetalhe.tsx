import { ArrowLeft, Upload } from "lucide-react";

export default function AtividadeDetalhe() {
  return (
    <div className="max-w-[900px] mx-auto space-y-6">

      {/* VOLTAR */}
      <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600">
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
            Arraste seu arquivo ou clique para selecionar
          </p>

          <input type="file" className="hidden" />

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            Selecionar arquivo
          </button>

        </div>

        {/* BOTÃO ENVIAR */}
        <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
          Enviar atividade
        </button>

      </div>
    </div>
  );
}