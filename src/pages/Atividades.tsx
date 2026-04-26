import { useNavigate } from "react-router-dom";
import { ClipboardList, ChevronRight, Clock } from "lucide-react";

const atividades = [
  {
    id: "atividade-1",
    titulo: "Trabalho Prático de Listas Encadeadas",
    disciplina: "Estrutura de Dados",
    professor: "Prof. Doglas André Finco",
    prazo: "01/06/2024 23:59",
    status: "Pendente",
  },
  {
    id: "atividade-2",
    titulo: "Desafio 3 - Big Data, Analytics e Inteligência Artificial",
    disciplina: "Big Data, Analytics e Inteligência Artificial",
    professor: "Prof. Victor Cézar Bonatti Carvalho",
    prazo: "05/06/2024 23:59",
    status: "Enviado",
  },
  {
    id: "atividade-3",
    titulo: "Atividade Prática - Falhas de Implantação",
    disciplina: "Implantação de Sistemas",
    professor: "Prof. Maximiano",
    prazo: "20/03/2024",
    status: "Atrasado",
  },
];

export default function Atividades() {
  return (
    <div className="max-w-[900px] mx-auto space-y-6">
      <header className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
          <ClipboardList size={20} />
        </div>

        <div>
          <h1 className="text-2xl font-bold">Atividades</h1>
          <p className="text-sm text-gray-500">1 pendente</p>
        </div>
      </header>

      <div className="flex gap-3">
        <Filter active label="Todas (3)" />
        <Filter label="Pendente (1)" />
        <Filter label="Enviadas (1)" />
        <Filter label="Atrasadas (1)" />
      </div>

      <section className="grid grid-cols-2 gap-5">
        {atividades.map((atividade) => (
          <AtividadeCard key={atividade.titulo} {...atividade} />
        ))}
      </section>
    </div>
  );
}

function Filter({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
        active
          ? "bg-blue-700 text-white shadow-sm"
          : "bg-white text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

function AtividadeCard({
  id,
  titulo,
  disciplina,
  professor,
  prazo,
  status,
}: {
  id: string;
  titulo: string;
  disciplina: string;
  professor: string;
  prazo: string;
  status: string;
}) {
  const navigate = useNavigate();

  const statusStyle =
    status === "Enviado"
      ? "bg-green-100 text-green-700"
      : status === "Atrasado"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <article
      onClick={() => navigate(`/atividades/${id}`)}
      className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex justify-between gap-4 hover:scale-[1.01] transition cursor-pointer"
    >
      <div className="space-y-3">
        <span
          className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${statusStyle}`}
        >
          {status}
        </span>

        <div>
          <h2 className="font-bold text-lg">{titulo}</h2>
          <p className="text-sm text-slate-500">
            {disciplina} · {professor}
          </p>
        </div>

        <p className="text-sm text-slate-500 flex items-center gap-2">
          <Clock size={15} />
          Prazo: {prazo}
        </p>
      </div>

      <ChevronRight className="text-slate-400 shrink-0" size={22} />
    </article>
  );
}