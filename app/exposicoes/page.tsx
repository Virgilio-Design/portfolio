import { PageFrame } from '@/components/site-chrome'

const items = [
  {
    year: '2019',
    title: 'UNTITLED 02',
    place: 'Galeria Banco Económico',
    city: 'Luanda, Angola',
    dates: '25 de junho a 30 de agosto',
    drawings: [
      'Olhando para o Amanhã',
      'A Melhor Fase',
      'Foco',
      'Sorrisos Verdadeiros',
      'Firmeza',
    ],
  },
  {
    year: '2020/2021',
    title: 'FELIZ NATAL',
    place: 'Espaço ELA',
    city: 'Luanda, Angola',
    dates: '2 de dezembro a 25 de janeiro',
    drawings: [
      'Protege a Mãe África',
      'A Lenda — Kobe Bryant',
    ],
  },
  {
    year: '2021',
    title: 'ARTISTICAMENTE ART',
    place: 'Fundação Arte e Cultura',
    city: 'Luanda, Angola',
    dates: '31 de julho a 15 de agosto',
    drawings: [
      'Super Limpo',
    ],
  },
  {
    year: '2023',
    title: 'INSTINTO DE SOBREVIVÊNCIA',
    place: 'Shopping Avenida do Morro Bento',
    city: 'Luanda, Angola',
    dates: '4 a 28 de outubro',
    drawings: [
      'Instinto de Sobrevivência',
    ],
  },
  {
    year: '2024',
    title: 'MUDANÇA DE PARADIGMA: UMA VISÃO RENASCENTISTA',
    place: 'Faculdade de Artes',
    city: 'Luanda, Angola',
    dates: '5 de julho',
    drawings: [
      'A Profundidade de um Simples Olhar',
      'Pare com Isto',
      'Estou Pronto',
    ],
  },
  {
    year: '2026',
    title: 'RETALHOS E MEMÓRIAS',
    place: '82 Parris',
    city: 'EUA',
    dates: '7 a 28 de agosto',
    drawings: [
      'A Profundidade de um Simples Toque',
      'Pare com Isto',
      'Estou Pronto',
      'Ainda Não É o Fim para Ti, Mulher',
      'Protege a Mãe África',
    ],
  },
]

export default function Exposicoes() {
  return (
    <PageFrame>
      <section id="inicio" className="hero-section galeria">
        <div className="hero-image">
          <img
            src="/27604.jpg.jpeg"
            alt=""
          />

          <div className="hero-caption">
            <h1>Exposições</h1>
          </div>
        </div>
      </section>

      <section className="section page-list">
        {items.map((item) => (
          <div className="exhibition-row" key={`${item.year}-${item.title}`}>
            <strong>{item.year}</strong>

            <div>
              <h3>{item.title}</h3>

              <p>
                {item.place} · {item.city}
              </p>

              <p>{item.dates}</p>

              <div className="mt-4">
                <p>Desenhos:</p>

                <ul className="mt-2 space-y-1">
                  {item.drawings.map((drawing) => (
                    <li key={drawing}>“{drawing}”</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </PageFrame>
  )
}
