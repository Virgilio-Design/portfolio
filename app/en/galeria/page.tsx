'use client'

import { PageFrame } from '@/components/site-chrome'
import { ArrowDown, ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

const artworks = [
  {
    id: 1,
    title: 'Protect Mother Africa',
    year: '2020',
    type: 'Works',
    material: 'Graphite and charcoal on cardboard',
    dimensions: '27.5 x 19.6 inches (70 x 50 cm)',
    image: '/27089.jpg.jpeg',
    description:
      'This artwork, created with graphite and charcoal on cardboard, reflects on the fragility and resilience of Africa during the COVID-19 pandemic. The central concept of the piece lies in the symbolism of protection, vulnerability and resistance.',
  },
  {
    id: 2,
    title: 'THE LEGEND - KOBE BRYANT',
    year: '',
    type: 'Works',
    material: 'Graphite and colored pencils on paper',
    dimensions: '29.7 x 42 cm',
    image: '/27109.jpg.jpeg',
    description: '',
  },
  {
    id: 3,
    title: 'LOOK CLOSELY AT ME',
    year: '',
    type: 'Works',
    material: 'Graphite pencil on paper',
    dimensions: '59.4 x 42 cm',
    image: '/27137.jpg.jpeg',
    description: '',
  },
  {
    id: 4,
    title:
      'Portrait of former Kassav band member, Jacob Desvarieux, A4 size.',
    year: '2024',
    type: 'Portraits',
    material: 'Colored pencils',
    dimensions: '160 × 120 cm',
    image: '/27137412.jpg.jpeg',
    description:
      'Layers of color and shadow revealing time as matter.',
  },
  {
    id: 7,
    title:
      'Meeting and presentation of a portrait to the First Lady of the Republic, Ana Dias Lourenço, at the Presidential Palace.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/152381.jpg.jpeg',
    description: '',
    relatedImages: ['/152384.jpg.jpeg', '152388.jpg.jpeg'],
  },
  {
    id: 10,
    title: 'STOP THIS',
    year: '',
    type: 'Works',
    material: 'Graphite on cardboard',
    dimensions: '32.28 x 23.54 inches (82 x 59.8 cm)',
    image: '/27313.jpg.jpeg',
    description:
      'Expressing the pain caused by unfair judgments and criticism, this artwork uses extreme realism to capture expressions that expose hypocrisy and society’s lack of empathy.',
  },
  {
    id: 11,
    title: 'I AM READY',
    year: '2022',
    type: 'Works',
    material: 'Graphite on cardboard',
    description:
      'A symbol of acceptance and readiness for new challenges, this piece portrays a confident model representing the overcoming of adversity.',
    image: '/27316.jpg.jpeg',
    dimensions: '23.62 x 31.50 inches (60 x 80 cm)',
  },
  {
    id: 12,
    title: 'THE DEPTH OF A SIMPLE TOUCH',
    year: '2022',
    type: 'Works',
    material: 'Graphite on cardboard',
    dimensions: '33 x 23.5 inches (84 x 59.8 cm)',
    image: '/27317.jpg.jpeg',
    description:
      'This artwork explores the acceptance of differences and the recognition of human uniqueness.',
  },
  {
    id: 13,
    title: "IT'S NOT THE END FOR YOU YET, WOMAN.",
    year: '2023',
    type: 'Works',
    material: 'Graphite on cardboard',
    dimensions: '27.5 x 19.6 inches (70 x 50 cm)',
    description:
      '“It’s Not the End for You Yet, Woman” is a tribute to the strength and resilience of women facing breast cancer.',
    image: '/27318.jpg.jpeg',
  },
  {
    id: 14,
    title:
      'Portrait of singer and producer Coreon Dú, A4 size.',
    year: '',
    type: 'Portraits',
    material: 'Colored pencils',
    dimensions: '',
    image: '/27374.jpg.jpeg',
    description: '',
  },
  {
    id: 15,
    title:
      'Portrait of American actress Taraji P. Henson, A4 size.',
    year: '',
    type: 'Portraits',
    material: 'Colored pencils',
    dimensions: '',
    image: '/27380.jpg.jpeg',
    description: '',
  },
  {
    id: 16,
    title:
      'Portrait of First Lady of the Republic, Ana Dias Lourenço, A2 size.',
    year: '',
    type: 'Portraits',
    material: 'Graphite pencil',
    dimensions: '',
    image: '/27386.jpg.jpeg',
    description: '',
  },
  {
    id: 17,
    title:
      'Portrait of Angola’s Minister of State for Economic and Financial Coordination, José de Lima Massano, A2 size.',
    year: '',
    type: 'Portraits',
    material: 'Graphite pencil',
    dimensions: '',
    image: '/27392.jpg.jpeg',
    description: '',
  },
  {
    id: 18,
    title:
      'Portrait of American rapper Kanye West, A4 size.',
    year: '',
    type: 'Portraits',
    material: 'Colored pencils',
    dimensions: '',
    image: '/27401.jpg.jpeg',
    description: '',
  },
  {
    id: 19,
    title:
      'Portrait of TV presenter Zuleica Wilson, created with blue ballpoint pen, A4 size.',
    year: '',
    type: 'Portraits',
    material: '',
    dimensions: '',
    image: '/27408.jpg.jpeg',
    description: '',
  },
  {
    id: 20,
    title:
      'Portrait of actor Kevin Hart, created with colored pencils, A4 size.',
    year: '',
    type: 'Portraits',
    material: '',
    dimensions: '',
    image: '/27429.jpg.jpeg',
    description: '',
  },
  {
    id: 21,
    title:
      'Presentation of a portrait to international model Maria Borges, created with colored pencils, A4 size, at Espaço Aplausos in Cidade do Sequele.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/27557.jpg.jpeg',
    description: '',
  },
  {
    id: 22,
    title:
      'Presentation of a portrait to singer Yola Semedo, created with colored pencils, A4 size, during her musical show at Espaço Aplausos in Cidade do Sequele.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/27647.jpg.jpeg',
    description: '',
  },
  {
    id: 23,
    title:
      'Meeting with journalist and Technical Director of TPA (Angola Public Television), Cabingano Manuel, at Espaço Aplausos in Sequele.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/27648.jpg.jpeg',
    description: '',
  },
  {
    id: 24,
    title:
      'Presentation of a portrait to singer Edmázia, created on a dress, during her musical show at Espaço Aplausos in Cidade do Sequele.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/27653.jpg.jpeg',
    description: '',
  },
  {
    id: 25,
    title:
      'Artistic Conversation at Banco Económico Auditorium, bringing together the new and older generations of Angolan visual artists, in 2019.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/27655.jpg.jpeg',
    description: '',
  },
  {
    id: 28,
    title:
      'Presentation of a portrait to singer Heavy C, created with graphite pencil, A4 size, during his musical show at Espaço Aplausos in Cidade do Sequele.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/27669.jpg.jpeg',
    description: '',
  },
  {
    id: 29,
    title:
      'Presentation of a portrait to international footballer Bastos Quissanga, created with colored pencils, A3 size, in Kilamba.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/27681.jpg.jpeg',
    description: '',
  },
  {
    id: 31,
    title:
      'Presentation of a painting to the current CEO of Pumangol, Ivanilson Machado.',
    year: '',
    type: 'Personal',
    material: '',
    dimensions: '',
    image: '/647886.jpg.jpeg',
    description: '',
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

function GalleryContent() {
  const [selected, setSelected] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const tipo = searchParams.get('tipo')
  const [filter, setFilter] = useState(tipo || 'Works')

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

  // Close with ESC
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

  // Prevent page scrolling while modal is open
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
      <section id="home" className="hero-section galeria">
        <div className="hero-image">
          <img
            src="/cover Site gallery.jpg.jpeg"
            alt=""
          />

          <div className="hero-caption">
            <h1>Gallery</h1>
          </div>
        </div>

        <a href="#works" className="scroll-cue">
          <ArrowDown size={15} />
          <span>Explore</span>
        </a>
      </section>

      <section id="gallery">
        <div className="filter-row">
          {['Works', 'Portraits', 'Personal'].map((item) => (
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
          {/* Close */}
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Left navigation */}
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(event) => {
              event.stopPropagation()
              moveArtwork(-1)
            }}
            aria-label="Previous artwork"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`lightbox-images ${
                selectedArtwork.relatedImages?.length
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
                <div
                  className="lightbox-image"
                  key={image}
                >
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
                    <span>Year</span>
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
                    <span>Dimensions</span>
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

          {/* Right navigation */}
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              moveArtwork(1)
            }}
            aria-label="Next artwork"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </PageFrame>
  )
}

export default function Gallery() {
  return (
    <Suspense fallback={null}>
      <GalleryContent />
    </Suspense>
  )
}