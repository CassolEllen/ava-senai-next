import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Video, MapPin } from "lucide-react";

const cursos = [
  {
    id: "ads",
    titulo: "Análise e Desenvolvimento de Sistemas",
    semestres: [
      {
        numero: 1,
        materias: [
          {
            nome: "Lógica de Programação",
            professor: "Prof. Ana Lima",
            aulas: [
              { titulo: "Introdução à lógica", tipo: "Presencial", data: "Segunda · 08:00", local: "Sala F07" },
              { titulo: "Exercícios práticos", tipo: "Online", data: "Quarta · 19:00", meetUrl: "https://meet.google.com/abc-defg-hij" },
            ],
          },
          {
            nome: "Fundamentos de Tecnologia da Informação",
            professor: "Prof. Marcos Silva",
            aulas: [
              { titulo: "Conceitos de TI", tipo: "Presencial", data: "Terça · 08:00", local: "Sala F07" },
              { titulo: "Sistemas computacionais", tipo: "Online", data: "Quinta · 19:00", meetUrl: "https://meet.google.com/ti-fundamentos" },
            ],
          },
          {
            nome: "Matemática Aplicada",
            professor: "Prof. Fernanda Costa",
            aulas: [
              { titulo: "Funções e lógica matemática", tipo: "Presencial", data: "Quarta · 10:00", local: "Sala F07" },
              { titulo: "Exercícios orientados", tipo: "Online", data: "Sexta · 19:00", meetUrl: "https://meet.google.com/mat-aplicada" },
            ],
          },
          {
            nome: "Comunicação e Redação Técnica",
            professor: "Prof. Renata Alves",
            aulas: [
              { titulo: "Comunicação profissional", tipo: "Presencial", data: "Segunda · 10:00", local: "Sala F07" },
              { titulo: "Documentação técnica", tipo: "Online", data: "Quarta · 20:00", meetUrl: "https://meet.google.com/redacao-tecnica" },
            ],
          },
          {
            nome: "Algoritmos",
            professor: "Prof. Daniel Rocha",
            aulas: [
              { titulo: "Variáveis e estruturas condicionais", tipo: "Presencial", data: "Sexta · 08:00", local: "Laboratório 1" },
              { titulo: "Laços de repetição", tipo: "Online", data: "Sexta · 20:00", meetUrl: "https://meet.google.com/algoritmos" },
            ],
          },
        ],
      },
      {
        numero: 2,
        materias: [
          {
            nome: "Banco de Dados",
            professor: "Prof. Carlos Souza",
            aulas: [
              { titulo: "Modelagem de dados", tipo: "Presencial", data: "Terça · 10:00", local: "Sala F07" },
              { titulo: "SQL na prática", tipo: "Online", data: "Quinta · 19:00", meetUrl: "https://meet.google.com/sql-pratica" },
            ],
          },
          {
            nome: "Programação Orientada a Objetos",
            professor: "Prof. Juliana Martins",
            aulas: [
              { titulo: "Classes e objetos", tipo: "Presencial", data: "Segunda · 08:00", local: "Sala F07" },
              { titulo: "Herança e polimorfismo", tipo: "Online", data: "Quarta · 19:00", meetUrl: "https://meet.google.com/poo-aula" },
            ],
          },
          {
            nome: "Estrutura de Dados",
            professor: "Prof. Doglas André Finco",
            aulas: [
              { titulo: "Pilhas e filas", tipo: "Presencial", data: "Terça · 08:00", local: "Sala F07" },
              { titulo: "Listas encadeadas", tipo: "Online", data: "Quinta · 20:00", meetUrl: "https://meet.google.com/estrutura-dados" },
            ],
          },
          {
            nome: "Sistemas Operacionais",
            professor: "Prof. Ricardo Mendes",
            aulas: [
              { titulo: "Processos e memória", tipo: "Presencial", data: "Quarta · 08:00", local: "Sala F07" },
              { titulo: "Gerenciamento de arquivos", tipo: "Online", data: "Sexta · 19:00", meetUrl: "https://meet.google.com/sistemas-operacionais" },
            ],
          },
          {
            nome: "Inglês Técnico",
            professor: "Prof. Camila Torres",
            aulas: [
              { titulo: "Vocabulário técnico", tipo: "Presencial", data: "Sexta · 10:00", local: "Sala F07" },
              { titulo: "Leitura de documentação", tipo: "Online", data: "Terça · 19:00", meetUrl: "https://meet.google.com/ingles-tecnico" },
            ],
          },
        ],
      },
      {
        numero: 3,
        materias: [
          {
            nome: "Desenvolvimento Web",
            professor: "Prof. Matheus Pereira",
            aulas: [
              { titulo: "HTML, CSS e responsividade", tipo: "Presencial", data: "Segunda · 08:00", local: "Laboratório 1" },
              { titulo: "React na prática", tipo: "Online", data: "Quarta · 20:00", meetUrl: "https://meet.google.com/dev-web-react" },
            ],
          },
          {
            nome: "Engenharia de Software",
            professor: "Prof. Roberto Dias",
            aulas: [
              { titulo: "Requisitos de software", tipo: "Presencial", data: "Terça · 10:00", local: "Sala 206" },
              { titulo: "Modelagem e documentação", tipo: "Online", data: "Quinta · 19:00", meetUrl: "https://meet.google.com/eng-software" },
            ],
          },
          {
            nome: "Redes de Computadores",
            professor: "Prof. Fernanda Costa",
            aulas: [
              { titulo: "Protocolos de rede", tipo: "Presencial", data: "Quarta · 08:00", local: "Sala 302" },
              { titulo: "Configuração de redes", tipo: "Online", data: "Sexta · 20:00", meetUrl: "https://meet.google.com/redes-computadores" },
            ],
          },
          {
            nome: "Interface e Experiência do Usuário",
            professor: "Prof. Mariana Lopes",
            aulas: [
              { titulo: "Princípios de UX/UI", tipo: "Presencial", data: "Segunda · 10:00", local: "Sala 203" },
              { titulo: "Prototipação de interfaces", tipo: "Online", data: "Quarta · 19:00", meetUrl: "https://meet.google.com/ux-ui" },
            ],
          },
          {
            nome: "Qualidade de Software",
            professor: "Prof. Heitor Bilibio",
            aulas: [
              { titulo: "Testes funcionais", tipo: "Presencial", data: "Sexta · 08:00", local: "Laboratório 2" },
              { titulo: "Casos de teste", tipo: "Online", data: "Sexta · 19:00", meetUrl: "https://meet.google.com/qualidade-software" },
            ],
          },
        ],
      },
      {
        numero: 4,
        materias: [
          {
            nome: "Desenvolvimento Mobile",
            professor: "Prof. Bruno Almeida",
            aulas: [
              { titulo: "Introdução ao mobile", tipo: "Presencial", data: "Segunda · 08:00", local: "Laboratório 3" },
              { titulo: "Componentes mobile", tipo: "Online", data: "Quarta · 20:00", meetUrl: "https://meet.google.com/dev-mobile" },
            ],
          },
          {
            nome: "Implantação de Sistemas",
            professor: "Prof. Maximiano",
            aulas: [
              { titulo: "Ambientes de implantação", tipo: "Presencial", data: "Terça · 08:00", local: "Sala 301" },
              { titulo: "Falhas de implantação", tipo: "Online", data: "Quinta · 19:00", meetUrl: "https://meet.google.com/implantacao-sistemas" },
            ],
          },
          {
            nome: "Segurança da Informação",
            professor: "Prof. Rafael Nunes",
            aulas: [
              { titulo: "Princípios de segurança", tipo: "Presencial", data: "Quarta · 10:00", local: "Sala 205" },
              { titulo: "Boas práticas em sistemas", tipo: "Online", data: "Sexta · 20:00", meetUrl: "https://meet.google.com/seguranca-info" },
            ],
          },
          {
            nome: "APIs e Integrações",
            professor: "Prof. Daniel Berrido",
            aulas: [
              { titulo: "REST APIs", tipo: "Presencial", data: "Segunda · 10:00", local: "Laboratório 1" },
              { titulo: "Integração com backend", tipo: "Online", data: "Quarta · 19:00", meetUrl: "https://meet.google.com/apis-integracoes" },
            ],
          },
          {
            nome: "Gestão de Projetos",
            professor: "Prof. Paula Andrade",
            aulas: [
              { titulo: "Planejamento de projetos", tipo: "Presencial", data: "Sexta · 08:00", local: "Sala 102" },
              { titulo: "Métodos ágeis", tipo: "Online", data: "Sexta · 19:00", meetUrl: "https://meet.google.com/gestao-projetos" },
            ],
          },
        ],
      },
      {
        numero: 5,
        materias: [
          {
            nome: "Big Data, Analytics e Inteligência Artificial",
            professor: "Prof. Victor Cézar Bonatti Carvalho",
            aulas: [
              { titulo: "Conceitos de Big Data", tipo: "Presencial", data: "Segunda · 08:00", local: "Sala 304" },
              { titulo: "Aplicações de IA", tipo: "Online", data: "Quarta · 20:00", meetUrl: "https://meet.google.com/big-data-ia" },
            ],
          },
          {
            nome: "Arquitetura de Software",
            professor: "Prof. Laura Batista",
            aulas: [
              { titulo: "Padrões arquiteturais", tipo: "Presencial", data: "Terça · 10:00", local: "Sala 306" },
              { titulo: "Arquitetura em camadas", tipo: "Online", data: "Quinta · 19:00", meetUrl: "https://meet.google.com/arquitetura-software" },
            ],
          },
          {
            nome: "Projeto Integrador",
            professor: "Prof. Gustavo Lima",
            aulas: [
              { titulo: "Definição do escopo", tipo: "Presencial", data: "Quarta · 08:00", local: "Laboratório 2" },
              { titulo: "Apresentação parcial", tipo: "Online", data: "Sexta · 20:00", meetUrl: "https://meet.google.com/projeto-integrador" },
            ],
          },
          {
            nome: "Empreendedorismo e Inovação",
            professor: "Prof. Patrícia Gomes",
            aulas: [
              { titulo: "Modelos de negócio", tipo: "Presencial", data: "Segunda · 10:00", local: "Sala 201" },
              { titulo: "Pitch de produto", tipo: "Online", data: "Quarta · 19:00", meetUrl: "https://meet.google.com/empreendedorismo" },
            ],
          },
          {
            nome: "Tópicos Avançados em Desenvolvimento",
            professor: "Prof. André Moreira",
            aulas: [
              { titulo: "Boas práticas modernas", tipo: "Presencial", data: "Sexta · 08:00", local: "Laboratório 3" },
              { titulo: "Deploy e versionamento", tipo: "Online", data: "Sexta · 19:00", meetUrl: "https://meet.google.com/topicos-avancados" },
            ],
          },
        ],
      },
    ],
  },
];

export default function CursoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const curso = cursos.find((c) => c.id === id);

  if (!curso) {
    return <p>Curso não encontrado</p>;
  }

  return (
    <div className="max-w-[1000px] mx-auto space-y-6">
      {/* VOLTAR */}
      <button
        onClick={() => navigate("/cursos")}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600"
      >
        <ArrowLeft size={16} />
        Voltar para cursos
      </button>

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">{curso.titulo}</h1>
        <p className="text-sm text-slate-500">
          Semestres, matérias e aulas
        </p>
      </div>

      {/* SEMESTRES */}
      <div className="space-y-6">
        {curso.semestres.map((semestre) => (
          <div key={semestre.numero} className="space-y-4">
            <h2 className="text-lg font-bold">
              {semestre.numero}º Semestre
            </h2>

            <div className="space-y-4">
              {semestre.materias.map((materia, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-4"
                >
                  {/* MATÉRIA */}
                  <div>
                    <h3 className="font-bold">{materia.nome}</h3>
                    <p className="text-sm text-slate-500">
                      {materia.professor}
                    </p>
                  </div>

                  {/* AULAS */}
                  <div className="space-y-3">
                    {materia.aulas.map((aula, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center bg-slate-50 rounded-xl p-4"
                      >
                        <div>
                          <p className="font-semibold">{aula.titulo}</p>
                          <p className="text-xs text-slate-500">
                            {aula.data}
                          </p>
                        </div>

                        {aula.tipo === "Online" ? (
                          <a
                            href={aula.meetUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm font-semibold"
                          >
                            <Video size={16} />
                            Acessar Meet
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <MapPin size={16} />
                            {aula.local}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}