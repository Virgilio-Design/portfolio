import { PageFrame } from '@/components/site-chrome'

export default function Biography() {
    return (
        <PageFrame>
            <section
                className="hero-image"
                style={{ marginTop: '-5px' }}
            >
                <img
                    src="/799742.jpg.jpeg"
                    alt="Virgílio Design with First Lady Ana Dias Lourenço"
                />

                <div className="bio-hero-overlay" />

                <div className="bio-hero-content">
                    <blockquote>
                        “My art seeks to capture the essence of human
                        emotions, exploring the boundaries between the
                        real and the poetic.”
                    </blockquote>

                    <p className="bio-hero-credit">
                        — Virgílio Design
                    </p>
                </div>
            </section>

            <section className="section bio-page">
                <div>
                    <img
                        src="/703261.jpg.jpeg"
                        alt="Virgílio Design"
                        className="bio-portrait"
                    />
                </div>

                <div>
                    <h2>Biography</h2>

                    <p>
                        Virgílio dos Santos Culivela is an Angolan visual
                        artist specialized in realistic and hyper-realistic
                        pencil drawings. Since childhood, drawing has been
                        a refuge and a tool for personal growth, helping
                        him face social and emotional challenges.

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
                </div>

                <div className="bio-education sm:mt-0 mt-10">
                    <div>
                        <h3 className="mb-8 text-2xl font-light tracking-wide text-neutral-900">
                            ARTISTIC{' '}
                            <span className="text-neutral-400">
                                EDUCATION
                            </span>
                        </h3>

                        <div className="space-y-0">
                            <div className="flex items-start justify-between gap-8 border-b border-neutral-200 py-6">
                                <div>
                                    <h4 className="text-base font-medium text-neutral-900">
                                        Virtual Realistic Drawing Course
                                    </h4>

                                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                        With Charles Laveso
                                    </p>
                                </div>

                                <span className="shrink-0 text-sm font-medium tracking-widest text-[#B89B5E]">
                                    2016–2020
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-8 border-b border-neutral-200 py-6">
                                <div>
                                    <h4 className="text-base font-medium text-neutral-900">
                                        Realistic Color Drawing Course
                                    </h4>

                                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                        With Sheila Geovani
                                    </p>
                                </div>

                                <span className="shrink-0 text-sm font-medium tracking-widest text-[#B89B5E]">
                                    2020–2022
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-8 py-6">
                                <div>
                                    <h4 className="text-base font-medium text-neutral-900">
                                        Visual Arts
                                    </h4>

                                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                        4th year, Faculty of Arts (FAART), Angola
                                    </p>
                                </div>

                                <span className="shrink-0 text-sm font-medium tracking-widest text-[#B89B5E]">
                                    2021–2022
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:mt-0 mt-10">
                    <h3 className="mb-8 text-2xl font-light tracking-wide text-neutral-900">
                        EXHIBITIONS{' '}
                        <span className="text-neutral-400">
                            & WORKS
                        </span>
                    </h3>

                    <div className="space-y-0">
                        <div className="flex items-start justify-between gap-8 border-b border-neutral-200 py-6">
                            <div>
                                <h4 className="text-base font-medium text-neutral-900">
                                    Scraps and Memories
                                </h4>

                                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                    82 Parris, USA · August 7–28, 2026
                                </p>

                                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                                    Drawings:
                                </p>

                                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-neutral-500">
                                    <li>
                                        “The Depth of a Simple Touch”
                                    </li>
                                    <li>
                                        “Stop This”
                                    </li>
                                    <li>
                                        “I Am Ready”
                                    </li>
                                    <li>
                                        “It’s Not the End for You Yet, Woman”
                                    </li>
                                    <li>
                                        “Protect Mother Africa”
                                    </li>
                                </ul>
                            </div>

                            <span className="shrink-0 text-sm font-medium tracking-widest text-[#B89B5E]">
                                2026
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section statement-section">
                <div>
                    <h2>
                        Artist
                        <br />
                        <em>statement</em>
                    </h2>
                </div>

                <div className="statement-copy">
                    <p>
                        My art seeks to capture the essence of human
                        emotions, exploring the boundaries between the
                        real and the poetic. Hyper-realism, using pencil,
                        is my primary language, allowing me to translate
                        nuances of light, shadow and texture with a
                        unique sense of authenticity.

                        Each artwork is a visual narrative that invites
                        the viewer to reflect on their own experiences,
                        emotions and stories. I believe that art has the
                        power to transform, heal and inspire, and that is
                        what I seek to achieve with every stroke.
                    </p>
                </div>
            </section>
        </PageFrame>
    )
}