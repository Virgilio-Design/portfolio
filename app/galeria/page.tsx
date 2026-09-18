'use client'

import { PageFrame } from '@/components/site-chrome'
import { ArrowDown, ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const artworks = [
  {
    id: 1,
    title: 'Proteja a Mãe África',
    year: '2020',
    type: 'Obras',
    material: 'Grafite sobre papelão',
    dimensions: '27.5 x 19.6 inches (70 x 50 cm)',
    image: '/27089.jpg.jpeg',
    description: 'Esta obra, criada com grafite e carvão sobre papelão, reflete sobre a fragilidade e a resiliência da África durante a pandemia de COVID-19. O conceito central da peça reside no simbolismo de proteção, vulnerabilidade e resistência. '
  },
  {
    id: 2,
    title: 'A LENDA - KOBY BRIANT',
    year: '',
    type: 'Obras',
    material: 'Lápis de grafite e de cor sobre papel',
    dimensions: '29,7 x 42 cm',
    image: '/27109.jpg.jpeg',
    description: ''
  },
  {
    id: 3,
    title: 'OLHE BEM PARA MIM',
    year: '',
    type: 'Obras',
    material: 'Lápis de grafite sobre papel',
    dimensions: ' 59,4 x 42 cm',
    image: '/27137.jpg.jpeg',
    description: ''
  },
  {
    id: 4,
    title: 'Retrato do ex membro do grupo musical, Os Kassav,  Jacob Desvarieux, tamanho A4.',
    year: '2024',
    type: 'Retratos',
    material: 'Lápis de cor',
    dimensions: '160 × 120 cm',
    image: '/27137412.jpg.jpeg',
    description: 'Camadas de cor e sombra que revelam o tempo como matéria.'
  },
  {
    id: 7,
    title: 'Encontro e entrega de Retrato a Primeira Dama da República, Ana Dias Lourenço, no Palácio Presidencial.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/152381.jpg.jpeg',
    description: '',
    relatedImages: ['/152384.jpg.jpeg'],
  },
  {
    id: 10,
    title: 'Pare com isso',
    year: '',
    type: 'Obras',
    material: 'Grafite sobre papelão',
    dimensions: '32.28 x 23.54 inches (82x59.8 cm) ',
    image: '/27313.jpg.jpeg',
    description: 'Expressando a dor causada por julgamentos e críticas injustos, esta obra utiliza o realismo extremo para capturar expressões que denunciam a hipocrisia e a falta de empatia da sociedade.'
  },
  {
    id: 11,
    title: 'Estou pronto',
    year: '2022',
    type: 'Obras',
    material: 'Grafite sobre papelão',
    description: 'Símbolo de aceitação e de preparação para novos desafios, esta peça retrata uma modelo confiante, representando a superação de adversidades.',
    image: '/27316.jpg.jpeg',
    dimensions: '23.62 x 31.50 inches (60x80 cm) '
  },
  {
    id: 12,
    title: 'A profundidade de um toque simples',
    year: '2022',
    type: 'Obras',
    material: 'Grafite sobre papelão',
    dimensions: '33 x 23.5 inches (84x59.8 cm) ',
    image: '/27317.jpg.jpeg',
    description: 'Esta obra de arte aborda a aceitação das diferenças e o reconhecimento da singularidade humana.'
  },
  {
    id: 13,
     title: 'Ainda não é o fim para você, mulher.',
    year: '2023',
    type: 'Obras',
    material: 'Grafite sobre papelão',
    dimensions: '27.5 x 19.6 inches (70 x 50 cm) ',
    description: '"It’s Not the End for You Yet, Woman" é uma homenagem à força e à resiliência das mulheres que enfrentam o câncer de mama.',
    image: '/27318.jpg.jpeg',
  },
  {
    id: 14,
    title: 'Retrato do cantor e produtor, Coreon Dú, feito no tamanho A4.',
    year: '',
    type: 'Retratos',
    material: 'Lápis de cor',
    dimensions: '',
    image: '/27374.jpg.jpeg',
    description: ''
  },
  {
    id: 15,
    title: 'Retrato da Atriz Norte-americana,  Taraj P Henson, feito no tamanho A4',
    year: '',
    type: 'Retratos',
    material: 'Lápis de cor',
    dimensions: '',
    image: '/27380.jpg.jpeg',
    description: ''
  },
  {
    id: 16,
    title: 'Retrato da Primeira Dama da República,  Ana Dias Lourenço, tamanho A2.',
    year: '',
    type: 'Retratos',
    material: 'Lápis de Grafite',
    dimensions: '',
    image: '/27386.jpg.jpeg',
    description: ''
  },
  {
    id: 17,
    title: 'Retrato do Ministro de Estado para Coordenação Financeira de Angola,  José de Lima Massano, tamanho A2',
    year: '',
    type: 'Retratos',
    material: 'Lápis de Grafite',
    dimensions: '',
    image: '/27392.jpg.jpeg',
    description: ''
  },
  {
    id: 18,
    title: 'Retrato do cantor Norte Americano, Kenye West, tamanho A4',
    year: '',
    type: 'Retratos',
    material: 'Lápis de cor',
    dimensions: '',
    image: '/27401.jpg.jpeg',
    description: ''
  },
  {
    id: 19,
    title: 'Retrato da Apresentadora de Tv, Zuleica Wilson, feito com esferográfica azul, tamanho A4',
    year: '',
    type: 'Retratos',
    material: '',
    dimensions: '',
    image: '/27408.jpg.jpeg',
    description: ''
  },
  {
    id: 20,
    title: 'Retrato do Ator Kelvin Hart, feito com lápis de cor no tamanho A4',
    year: '',
    type: 'Retratos',
    material: '',
    dimensions: '',
    image: '/27429.jpg.jpeg',
    description: ''
  },
  {
    id: 21,
    title: 'Entrega do retrato da Modelo Internacional, Maria Borges, feito com lápis de cor no tamanho A4, Espaço Aplausos da Cidade do Sequele.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/27557.jpg.jpeg',
    description: ''
  },
  {
    id: 22,
    title: 'Entrega do retrato a Cantora, Yola Semedo, feito com lápis de cor no tamanho A4, no seu Show Musical no Espaço Aplausos da Cidade do Sequele.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/27647.jpg.jpeg',
    description: ''
  },
  {
    id: 23,
    title: 'Encontro com o Jornalista e Director Técnico da TPA (Televisão Pública de Angola), Cabingano Manuel, no Espaço Aplausos do Sequele.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/27648.jpg.jpeg',
    description: ''
  },
  {
    id: 24,
    title: 'Entrega do retrato a Cantora Edmázia, feito em um vestido, no seu Show Musical no Espaço Aplausos da Cidade do Sequele.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/27653.jpg.jpeg',
    description: ''
  },
  {
    id: 25,
    title: 'Conversa Artística no Auditório do Banco Económico, entre Nova e Velha Geração de Artistas Plásticos Angola, em 2019.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/27655.jpg.jpeg',
    description: ''
  },
  {
    id: 28,
    title: 'Entrega do retrato ao Cantor Heavy C, feito com lápis de grafite no tamanho A4, no seu Show Musical no Espaço Aplausos da Cidade do Sequele.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/27669.jpg.jpeg',
    description: ''
  },
  {
    id: 29,
    title: 'Entrega do retrato ao Jogador Internacional, Bastos Quissanga, feito com lápis de cor no tamanho A3, na Cidade do Kilamba.',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/27681.jpg.jpeg',
    description: ''
  },
  {
    id: 31,
    title: 'Entrega de quadro ao atual PCE da Pumangol, Ivanilson Machado',
    year: '',
    type: 'Pessoal',
    material: '',
    dimensions: '',
    image: '/647886.jpg.jpeg',
    description: ''
  },
]

function ArtworkCard({
  artwork,
  onOpen,
  className = '',
}: {
  artwork: (typeof artworks)[number]
  onOpen: () => void
  className?: string
}) {
  return (
    <button
      className={`artwork-card ${className}`}
      onClick={onOpen}
      type="button"
    >
      <div className="artwork-image-wrap">
        <img src={artwork.image} alt={artwork.title} />
        <span className="artwork-plus">+</span>
      </div>

      <div className="artwork-meta">
        <span>{artwork.title}</span>
        <span>{artwork.year}</span>
        <small className="text-muted">{artwork.material}</small>
      </div>
    </button>
  )
}

export default function Galeria() {
  const [selected, setSelected] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const tipo = searchParams.get('tipo')
  const [filter, setFilter] = useState(tipo || 'Obras')


  const filtered =
    filter === ''
      ? artworks
      : artworks.filter(
        (artwork) =>
          artwork.type.toLowerCase() === filter.toLowerCase()
      )

  const selectedIndex = selected
    ? artworks.findIndex((artwork) => artwork.id === selected)
    : -1

  const selectedArtwork =
    selectedIndex >= 0 ? artworks[selectedIndex] : null

  const moveArtwork = (direction: number) => {
    if (selectedIndex === -1) return

    const next =
      (selectedIndex + direction + artworks.length) %
      artworks.length

    setSelected(artworks[next].id)
  }

  // Fecha com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedArtwork) return

      if (event.key === 'Escape') {
        setSelected(null)
      }

      if (event.key === 'ArrowLeft') {
        moveArtwork(-1)
      }

      if (event.key === 'ArrowRight') {
        moveArtwork(1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedArtwork, selectedIndex])

  // Impede o scroll da página enquanto o modal está aberto
  useEffect(() => {
    if (selectedArtwork) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedArtwork])

  return (
    <PageFrame>
      <section id="inicio" className="hero-section galeria">
        <div className="hero-image">
          <img
            src="/cover Site gallery.jpg.jpeg"
            alt=""
          />

          <div className="hero-caption">
            <h1>Galeria</h1>
          </div>
        </div>

        <a href="#obras" className="scroll-cue">
          <ArrowDown size={15} />
          <span>Explorar</span>
        </a>
      </section>

      <section id="galeria">
        <div className="filter-row">
          {['Obras', 'Retratos', 'Pessoal'].map((item) => (
            <button
              key={item}
              className={filter === item ? 'active' : ''}
              onClick={() => setFilter(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((artwork, index) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onOpen={() => setSelected(artwork.id)}
              className={
                index % 3 === 1
                  ? 'gallery-offset'
                  : ''
              }
            />
          ))}
        </div>
      </section>

      {/* LIGHTBOX / MODAL */}
      {selectedArtwork && (
        <div
          className="artwork-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedArtwork.title}
          onClick={() => setSelected(null)}
        >
          {/* Fechar */}
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>

          {/* Navegação esquerda */}
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(event) => {
              event.stopPropagation()
              moveArtwork(-1)
            }}
            aria-label="Obra anterior"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`lightbox-images ${selectedArtwork.relatedImages?.length
                  ? 'has-related'
                  : ''
                }`}
            >
              <div className="lightbox-image">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                />
              </div>

              {selectedArtwork.relatedImages?.map((image) => (
                <div className="lightbox-image" key={image}>
                  <img src={image} alt="" />
                </div>
              ))}
            </div>

            <div className="lightbox-info">
              <div className="lightbox-heading">
                <p className="eyebrow">
                  {selectedArtwork.type}
                </p>

                <h2>{selectedArtwork.title}</h2>
              </div>

              <div className="lightbox-details">
                {selectedArtwork.year && (
                  <div>
                    <span>Ano</span>
                    <strong>{selectedArtwork.year}</strong>
                  </div>
                )}

                {selectedArtwork.material && (
                  <div>
                    <span>Material</span>
                    <strong>{selectedArtwork.material}</strong>
                  </div>
                )}

                {selectedArtwork.dimensions && (
                  <div>
                    <span>Dimensões</span>
                    <strong>
                      {selectedArtwork.dimensions}
                    </strong>
                  </div>
                )}
              </div>

              {selectedArtwork.description && (
                <p className="lightbox-description">
                  {selectedArtwork.description}
                </p>
              )}

              <span className="lightbox-counter">
                {selectedIndex + 1} / {artworks.length}
              </span>
            </div>
          </div>

          {/* Navegação direita */}
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              moveArtwork(1)
            }}
            aria-label="Próxima obra"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </PageFrame>
  )
}