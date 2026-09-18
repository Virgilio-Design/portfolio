'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-chrome'

const artworks = [
  {
    id: 4,
    dimensions: '160 × 120 cm',
    image: '/27089.jpg.jpeg',
  },
  {
    id: 6,
    dimensions: '55 × 30 × 25 cm',
    image: '/152384.jpg.jpeg',
  },
  {
    id: 7,
    dimensions: '60 × 80 cm',
    image: '/27137412.jpg.jpeg',
  },
]

const exhibitions = [
  {
    year: '2026',
    title: 'Matéria Instável',
    place: 'Galeria Mó',
    city: 'Lisboa, Portugal',
    date: '12.09 — 30.11.2026',
    status: 'Próxima',
  },
  {
    year: '2026',
    title: 'Cartografias Íntimas',
    place: 'Museu Nacional de Arte',
    city: 'Luanda, Angola',
    date: '18.03 — 27.06.2026',
    status: 'Atual',
  },
  {
    year: '2025',
    title: 'O Peso da Luz',
    place: 'Casa das Artes',
    city: 'Porto, Portugal',
    date: '05.10 — 21.12.2025',
    status: 'Anterior',
  },
]


export function ArtworkCard({
  artwork,
  onOpen,
  category,
  className = '',
}: {
  artwork: (typeof artworks)[number]
  onOpen: () => void
  category: string
  className?: string
}) {
  return (
    <button
      className={`artwork-card group ${className}`}
      onClick={onOpen}
    >
      <div className="artwork-image-wrap relative overflow-hidden">
        <img
          src={artwork.image}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Preview da categoria */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
          <div className="translate-y-3 rounded-full bg-white/95 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-neutral-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Ver {category}
            <ArrowUpRight
              size={14}
              className="ml-2 inline-block"
            />
          </div>
        </div>
      </div>

      <div className="artwork-meta"></div>
    </button>
  )
}

export function SectionHeading({
  title,
}: {
  title: string
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
    </div>
  )
}

export default function Page() {
  const router = useRouter()

  const [selected, setSelected] = useState<number | null>(null)

  const selectedIndex = selected
    ? artworks.findIndex((artwork) => artwork.id === selected)
    : -1

  const selectedArtwork = selected
    ? artworks[selectedIndex]
    : null

  const moveArtwork = (direction: number) => {
    const next =
      (selectedIndex + direction + artworks.length) %
      artworks.length

    setSelected(artworks[next].id)
  }

  return (
    <main>
      <SiteHeader />

      <section id="inicio" className="hero-section">
        <div className="hero-image">
          <img
            src="/152384.jpg.jpeg"
            alt="Obra abstrata em tons de preto, branco e dourado"
          />

          <div className="hero-caption">
            <h1>
              Virgílio
              <br />
              Design
            </h1>
          </div>
        </div>

        <a href="#obras" className="scroll-cue">
          <ArrowDown size={15} />
          <span>Explorar</span>
        </a>
      </section>

      <section
        id="obras"
        className="section gallery-section"
      >
        <div className="section-top">
          <SectionHeading
            title="Galeria"
          />

          <a
            className="text-link"
            href="/galeria"
          >
            Ver tudo <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="featured-grid">
          <ArtworkCard
            artwork={artworks[0]}
            category="Obras"
            onOpen={() =>
              router.push('/galeria?tipo=Obras')
            }
            className="feature-large"
          />

          <ArtworkCard
            artwork={artworks[1]}
            category="Pessoal"
            onOpen={() =>
              router.push('/galeria?tipo=Pessoal')
            }
            className="feature-small"
          />

          <ArtworkCard
            artwork={artworks[2]}
            category="Retratos"
            onOpen={() =>
              router.push('/galeria?tipo=Retratos')
            }
            className="feature-tall"
          />
        </div>
      </section>

      <section
        id="artista"
        className="section grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24"
      >
        <div className="w-full">
          <img
            src="703261.jpg.jpeg"
            alt="Detalhe de instalação artística no estúdio"
            className="w-full h-auto object-cover"
          />

          <span className="mt-3 block text-xs text-neutral-500">
            Stúdio Virgílio Design, 2026
          </span>
        </div>

        <div className="flex flex-col">
          <SectionHeading title="Biografia" />

          <p className="text-sm text-neutral-600 mt-5">
            Virgílio dos Santos Culivela é um artista visual
            angolano especializado em desenhos realistas e
            hiper-realistas a lápis. Desde a infância, o
            desenho tem sido um refúgio e uma ferramenta de
            superação pessoal, ajudando-o a enfrentar
            desafios sociais e emocionais.

            <br />
            <br />

            É licenciado em Artes Visuais e teve o privilégio
            de aprender com mestres como Charles Laveso, que o
            orientou nas técnicas de sombreamento e no
            aperfeiçoamento da luz e da sombra.

            <br />
            <br />

            Inspirado por artistas como Arinze Stanley,
            Virgílio desenvolveu o seu próprio estilo, que
            combina precisão técnica com uma profunda poesia
            visual. As suas obras exploram a emoção humana, a
            introspecção e narrativas pessoais, criando
            conexões genuínas com o espectador.
          </p>

          <a
            className="text-link mt-8 w-fit"
            href="/biografia"
          >
            Mais detalhes <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <section
        id="trajetoria"
        className="section timeline-section"
      >
        <SectionHeading title="Exposições" />

        <div className="timeline">
          {[
            [
              '2019',
              'UNTITLED 02',
              'Galeria Banco Económico',
              'Luanda, Angola',
            ],
            [
              '2020/2021',
              'FELIZ NATAL',
              'Espaço ELA',
              'Luanda, Angola',
            ],
            [
              '2021',
              'ARTISTICAMENTE ART',
              'Fundação Arte e Cultura',
              'Luanda, Angola',
            ],
            [
              '2023',
              'INSTINTO DE SOBREVIVÊNCIA',
              'Shopping Avenida do Morro Bento',
              'Luanda, Angola',
            ],
            [
              '2024',
              'MUDANÇA DE PARADIGMA: UMA VISÃO RENASCENTISTA',
              'Faculdade de Artes',
              'Luanda, Angola',
            ],
          ].map(([year, title, place]) => (
            <div
              className="timeline-row"
              key={year}
            >
              <strong>{year}</strong>

              <div>
                <h3 className="text-sm leading-snug md:text-lg">
                  {title}
                </h3>
                <p>{place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="contact-section"
      >
        <div>
          <h2>
            Vamos
            <br />
            <em>conversar.</em>
          </h2>
        </div>

        <div className="contact-copy">
          <p>
            Para exposições, colaborações, encomendas ou
            outras questões, entre em contacto.
          </p>

          <a
            href="mailto:virgilio.culivela255@gmail.com"
            className="contact-email"
          >
            virgilio.culivela255@gmail.com
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-details">
            <span>Luanda</span>

            <a
              href="https://www.instagram.com/virgilio.design_?igsh=MTU1d3N6NXpzdWR1Zg=="
            >
              Instagram
            </a>

            <a href="tel:+244943824812">
              [+244] 943 824 812
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <a
            href="#inicio"
            className="brand"
          >
            Virgílio Design
          </a>

          <p>
            Design · Identidade
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://www.instagram.com/virgilio.design_?igsh=MTU1d3N6NXpzdWR1Zg=="
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={16} />
            Instagram
          </a>

          <a href="mailto:virgilio.culivela255@gmail.com">
            <Mail size={16} />
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Virgílio Design
        </p>
      </footer>

      {selectedArtwork && (
        <div
          className="artwork-modal"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="modal-close"
            onClick={() => setSelected(null)}
            aria-label="Fechar detalhe"
          >
            <X
              size={24}
              strokeWidth={1.2}
            />
          </button>

          <div className="modal-image">
            <img
              src={selectedArtwork.image}
            />
          </div>

          <div className="modal-info">
            <p className="eyebrow">
              Obra{' '}
              {String(selectedIndex + 1).padStart(
                2,
                '0'
              )}{' '}
              /{' '}
              {String(artworks.length).padStart(
                2,
                '0'
              )}
            </p>

            <div className="modal-nav">
              <button
                onClick={() =>
                  moveArtwork(-1)
                }
              >
                <ArrowLeft size={16} />
                Obra anterior
              </button>

              <button
                onClick={() =>
                  moveArtwork(1)
                }
              >
                Próxima obra
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}