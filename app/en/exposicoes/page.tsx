import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-chrome'

const items = [
  ['2019', 'UNTITLED 02', 'Galeria Banco Económico', 'Luanda, Angola'],
  ['2020/2021', 'MERRY CHRISTMAS', 'Espaço ELA', 'Luanda, Angola'],
  ['2021', 'ARTISTICAMENTE ART', 'Fundação Arte e Cultura', 'Luanda, Angola'],
  ['2023', 'SURVIVAL INSTINCT', 'Shopping Avenida do Morro Bento', 'Luanda, Angola'],
  ['2024', 'PARADIGM SHIFT: A RENAISSANCE VISION', 'Faculdade de Artes', 'Luanda, Angola'],
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
        {items.map(([year, title, place, city]) => (
          <div className="exhibition-row" key={title}>
            <strong>{year}</strong>
            <div>
              <h3>{title}</h3>
              <p>{place} · {city}</p>
            </div>
          </div>
        ))}

        <div className="exhibition-row" key="SCRAPS AND MEMORIES">
          <strong>2026</strong>
          <div>
            <h3>SCRAPS AND MEMORIES</h3>
            <p>82 Parris, USA · August 7th to 28th</p>
            <p className="mt-4">Drawings:</p>
            <ul className="mt-2 space-y-1">
              <li>“The Depth of a Simple Touch”</li>
              <li>“Stop This”</li>
              <li>“I Am Ready”</li>
              <li>“It's Not the End for You Yet, Woman”</li>
              <li>“Protect Mother Africa”</li>
            </ul>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}