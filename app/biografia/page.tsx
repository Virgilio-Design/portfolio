import { PageFrame } from '@/components/site-chrome'

export default function Biografia() {
    return (
        <PageFrame>
            <section className="hero-image" style={{ marginTop: '-5px' }}>
                <img src="/799742.jpg.jpeg" alt="Virgílio Design com a primeira dama, Ana Dias Lourenço" />
                <div className="bio-hero-overlay" />
                <div className="bio-hero-content">
                    <blockquote>
                        “Minha arte busca capturar a essência das emoções humanas, explorando os limites entre o real e o poético.”
                    </blockquote>
                    <p className="bio-hero-credit">— Virgílio Design</p>
                </div>
            </section>

            <section className="section bio-page">
                <div>
                    <img
                        src="703261.jpg.jpeg"
                        alt="Virgílio Design"
                        className="bio-portrait"
                    />
                </div>
                <div>
                    <h2>Biografia</h2>
                    <p>
                        Virgílio dos Santos Culivela é um artista visual angolano especializado em desenhos
                        realistas e hiper-realistas a lápis. Desde a infância, o desenho tem sido um refúgio e
                        uma ferramenta de superação pessoal, ajudando-o a enfrentar desafios sociais e
                        emocionais.
                        <br />
                        <br />
                        É licenciado em Artes Visuais e teve o privilégio de aprender com mestres como Charles
                        Laveso, que o orientou nas técnicas de sombreamento e no aperfeiçoamento da luz e da
                        sombra.
                        <br />
                        <br />
                        Inspirado por artistas como Arinze Stanley, Virgílio desenvolveu o seu próprio estilo,
                        que combina precisão técnica com uma profunda poesia visual. As suas obras exploram a
                        emoção humana, a introspecção e narrativas pessoais, criando conexões genuínas com o
                        espectador.
                    </p>
                </div>
                <div className="bio-education sm:mt-0 mt-10">
                    <div>
                        <h3 className="mb-8 text-2xl font-light tracking-wide text-neutral-900">
                            FORMAÇÃO {" "}
                            <span className="text-neutral-400">ARTÍSTICA</span>
                        </h3>

                        <div className="space-y-0">
                            <div className="flex items-start justify-between gap-8 border-b border-neutral-200 py-6">
                                <div>
                                    <h4 className="text-base font-medium text-neutral-900">
                                        Curso Virtual de Desenho Realista
                                    </h4>
                                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                        Com Charles Laveso
                                    </p>
                                </div>

                                <span className="shrink-0 text-sm font-medium tracking-widest text-[#B89B5E]">
                                    2016–2020
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-8 border-b border-neutral-200 py-6">
                                <div>
                                    <h4 className="text-base font-medium text-neutral-900">
                                        Curso de Desenho Realista a Cores
                                    </h4>
                                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                        Com Sheila Geovani
                                    </p>
                                </div>

                                <span className="shrink-0 text-sm font-medium tracking-widest text-[#B89B5E]">
                                    2020–2022
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-8 py-6">
                                <div>
                                    <h4 className="text-base font-medium text-neutral-900">
                                        Artes Visuais
                                    </h4>
                                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                        4.º ano, Faculdade de Artes (FAART), Angola
                                    </p>
                                </div>

                                <span className="shrink-0 text-sm font-medium tracking-widest text-[#B89B5E]">
                                    2021–2022
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section statement-section ">
                <div>
                    <h2>
                        Declaração
                        <br />
                        <em>artística</em>
                    </h2>
                </div>
                <div className="statement-copy">
                    <p>
                        Minha arte busca capturar a essência das emoções humanas, explorando os limites entre o real e o poético. O hiper-realismo, utilizando o lápis, é minha principal linguagem, pois me permite traduzir nuances de luz, sombra e textura com uma autenticidade única.
                        Cada obra de arte é uma narrativa visual que convida o espectador a refletir sobre suas próprias experiências, emoções e histórias. Acredito que a arte tem o poder de transformar, curar e inspirar, e é isso que busco alcançar a cada traço.
                    </p>
                </div>
            </section>
        </PageFrame>
    )
}
