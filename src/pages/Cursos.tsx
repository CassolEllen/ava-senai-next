import { useNavigate } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";

const cursos = [
  {
    id: "ads",
    titulo: "Análise e Desenvolvimento de Sistemas",
    descricao:
      "Curso focado em desenvolvimento de software, banco de dados, sistemas web e qualidade.",
    progresso: 72,
    semestres: 5,
  },
];

export default function Cursos() {
  return (
    <div className="max-w-[1000px] mx-auto space-y-6">
      <header className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
          <BookOpen size={22} />
        </div>

        <div>
          <h1 className="text-2xl font-bold">Cursos</h1>
          <p className="text-sm text-slate-500">
            Acompanhe seus cursos, matérias e aulas por semestre
          </p>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-5">
        {cursos.map((curso) => (
          <CursoCard key={curso.id} {...curso} />
        ))}
      </section>
    </div>
  );
}

function CursoCard({
  id,
  titulo,
  descricao,
  progresso,
  semestres,
}: {
  id: string;
  titulo: string;
  descricao: string;
  progresso: number;
  semestres: number;
}) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/cursos/${id}`)}
      className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:scale-[1.01] transition space-y-4"
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="font-bold text-lg">{titulo}</h2>
          <p className="text-sm text-slate-500 mt-1">{descricao}</p>
        </div>

        <ChevronRight className="text-slate-400 shrink-0" size={22} />
      </div>

      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{semestres} semestres</span>
        <span>{progresso}% concluído</span>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-2">
        <div
          className="bg-blue-700 h-2 rounded-full"
          style={{ width: `${progresso}%` }}
        />
      </div>
    </article>
  );
}