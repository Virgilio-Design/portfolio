import { PageFrame } from '@/components/site-chrome'

const items = [
  {
    year: '2019',
    title: 'UNTITLED 02',
    place: 'Banco Económico Gallery',
    city: 'Luanda, Angola',
    dates: 'June 25 to August 30',
    drawings: [
      'Looking to Tomorrow',
      'The Best Phase',
      'Focus',
      'True Smiles',
      'Firmness',
    ],
  },
  {
    year: '2020/2021',
    title: 'MERRY CHRISTMAS',
    place: 'ELA Space',
    city: 'Luanda, Angola',
    dates: 'December 2 to January 25',
    drawings: [
      'Protect Mother Africa',
      'The Legend — Kobe Bryant',
    ],
  },
  {
    year: '2021',
    title: 'ARTISTICALLY ART',
    place: 'Art and Culture Foundation',
    city: 'Luanda, Angola',
    dates: 'July 31 to August 15',
    drawings: [
      'Super Clean',
    ],
  },
  {
    year: '2023',
    title: 'SURVIVAL INSTINCT',
    place: 'Avenida do Morro Bento Shopping',
    city: 'Luanda, Angola',
    dates: 'October 4 to 28',
    drawings: [
      'Survival Instinct',
    ],
  },
  {
    year: '2024',
    title: 'PARADIGM SHIFT: A RENAISSANCE VIEW',
    place: 'Faculty of Arts',
    city: 'Luanda, Angola',
    dates: 'July 5',
    drawings: [
      'The Depth of a Simple Look',
      'Stop This',
      'I Am Ready',
    ],
  },
  {
    year: '2026',
    title: 'SCRAPS AND MEMORIES',
    place: '82 Parris',
    city: 'USA',
    dates: 'August 7 to 28',
    drawings: [
      'The Depth of a Simple Look',
      'Stop This',
      'I Am Ready',
      'It Is Not the End for You, Woman',
      'Protect Mother Africa',
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
            <h1>Exhibitions</h1>
          </div>
        </div>
      </section>

      <section className="section page-list">
        {items.map((item) => (
          <div
            className="exhibition-row"
            key={`${item.year}-${item.title}`}
          >
            <strong>{item.year}</strong>

            <div>
              <h3>{item.title}</h3>

              <p>
                {item.place} · {item.city}
              </p>

              <p>{item.dates}</p>

              <div className="mt-4">
                <p>Drawings:</p>

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
