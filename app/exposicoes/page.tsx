import { ArrowUpRight } from 'lucide-react'

import { PageFrame } from '@/components/site-chrome'

const items = [
  ['2019', 'UNTITLED 02', 'Galeria Banco Económico', 'Luanda, Angola'],
  ['2020/2021', 'FELIZ NATAL', 'Espaço ELA', 'Luanda, Angola'],
  ['2021', 'ARTISTICAMENTE ART', 'Fundação Arte e Cultura', 'Luanda, Angola'],
  ['2023', 'INSTINTO DE SOBREVIVÊNCIA', 'Shopping Avenida do Morro Bento', 'Luanda, Angola'],
  ['2024', 'MUDANÇA DE PARADIGMA: UMA VISÃO RENASCENTISTA', 'Faculdade de Artes', 'Luanda, Angola'],
]

export default function Exposicoes() {
  return (
    <PageFrame>
      <section className="inner-hero">
        <h1>Exposições</h1>
        <p>Projetos e colaborações que ganham forma em diferentes contextos.</p>
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
            <h3>RETALHOS E MEMÓRIAS</h3>
            <p>82 Parris, EUA · 7 a 28 de agosto</p>

            <p className="mt-4">Desenhos:</p>
            <ul className="mt-2 space-y-1">
              <li>“A profundidade de um simples toque”</li>
              <li>“Pare com isto”</li>
              <li>“Estou pronto”</li>
              <li>“Ainda não é o fim para ti, mulher”</li>
              <li>“Protege a Mãe África”</li>
            </ul>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}