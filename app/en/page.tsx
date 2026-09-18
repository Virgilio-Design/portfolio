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
        title: 'Unstable Matter',
        place: 'Galeria Mó',
        city: 'Lisbon, Portugal',
        date: '12.09 — 30.11.2026',
        status: 'Upcoming',
    },
    {
        year: '2026',
        title: 'Intimate Cartographies',
        place: 'National Museum of Art',
        city: 'Luanda, Angola',
        date: '18.03 — 27.06.2026',
        status: 'Current',
    },
    {
        year: '2025',
        title: 'The Weight of Light',
        place: 'Casa das Artes',
        city: 'Porto, Portugal',
        date: '05.10 — 21.12.2025',
        status: 'Past',
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

                {/* Category preview */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
                    <div className="translate-y-3 rounded-full bg-white/95 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-neutral-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View {category}
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

            <section id="home" className="hero-section">
                <div className="hero-image">
                    <img
                        src="/152384.jpg.jpeg"
                        alt="Abstract artwork in black, white and gold tones"
                    />

                    <div className="hero-caption">
                        <h1>
                            Virgílio
                            <br />
                            Design
                        </h1>
                    </div>
                </div>

                <a href="#works" className="scroll-cue">
                    <ArrowDown size={15} />
                    <span>Explore</span>
                </a>
            </section>

            <section
                id="works"
                className="section gallery-section"
            >
                <div className="section-top">
                    <SectionHeading title="Gallery" />

                    <a
                        className="text-link"
                        href="/en/galeria"
                    >
                        View all <ArrowUpRight size={15} />
                    </a>
                </div>

                <div className="featured-grid">
                    <ArtworkCard
                        artwork={artworks[0]}
                        category="Works"
                        onOpen={() =>
                            router.push('/en/galeria?tipo=Obras')
                        }
                        className="feature-large"
                    />

                    <ArtworkCard
                        artwork={artworks[1]}
                        category="Personal"
                        onOpen={() =>
                            router.push('/en/galeria?tipo=Pessoal')
                        }
                        className="feature-small"
                    />

                    <ArtworkCard
                        artwork={artworks[2]}
                        category="Portraits"
                        onOpen={() =>
                            router.push('/en/galeria?tipo=Retratos')
                        }
                        className="feature-tall"
                    />
                </div>
            </section>

            <section
                id="artist"
                className="section grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24"
            >
                <div className="w-full">
                    <img
                        src="703261.jpg.jpeg"
                        alt="Detail of an artistic installation in the studio"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="flex flex-col">
                    <SectionHeading title="Biography" />

                    <p className="text-sm text-neutral-600 mt-5">
                        Virgílio dos Santos Culivela is an Angolan
                        visual artist specialized in realistic and
                        hyper-realistic pencil drawings. Since childhood,
                        drawing has been a refuge and a tool for personal
                        growth, helping him face social and emotional
                        challenges.

                        <br />
                        <br />

                        He holds a degree in Visual Arts and had the
                        privilege of learning from masters such as
                        Charles Laveso, who guided him in shading
                        techniques and in the refinement of light and
                        shadow.

                        <br />
                        <br />

                        Inspired by artists such as Arinze Stanley,
                        Virgílio developed his own style, combining
                        technical precision with a deep visual poetry.
                        His works explore human emotion, introspection
                        and personal narratives, creating genuine
                        connections with the viewer.
                    </p>

                    <a
                        className="text-link mt-8 w-fit"
                        href="/en/biografia"
                    >
                        More details <ArrowUpRight size={15} />
                    </a>
                </div>
            </section>

            <section
                id="trajectory"
                className="section timeline-section"
            >
                <SectionHeading title="Exhibitions" />

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
                            'MERRY CHRISTMAS',
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
                            'SURVIVAL INSTINCT',
                            'Shopping Avenida do Morro Bento',
                            'Luanda, Angola',
                        ],
                        [
                            '2024',
                            'PARADIGM SHIFT: A RENAISSANCE VISION',
                            'Faculdade de Artes',
                            'Luanda, Angola',
                        ],
                        [
                            '2026',
                            'SCRAPS AND MEMORIES',
                            '82 Parris',
                            'USA · August 7th to 28th',
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
                id="contact"
                className="contact-section"
            >
                <div>
                    <h2>
                        Let's
                        <br />
                        <em>talk.</em>
                    </h2>
                </div>

                <div className="contact-copy">
                    <p>
                        For exhibitions, collaborations, commissions or
                        other inquiries, get in touch.
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
                            target="_blank"
                            rel="noreferrer"
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
                        href="#home"
                        className="brand"
                    >
                        Virgílio Design
                    </a>

                    <p>
                        Design · Identity
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
                        aria-label="Close artwork details"
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
                            Artwork{' '}
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
                                Previous artwork
                            </button>

                            <button
                                onClick={() =>
                                    moveArtwork(1)
                                }
                            >
                                Next artwork
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}