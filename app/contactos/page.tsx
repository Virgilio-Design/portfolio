import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-chrome'

const CONTACT = {
    email: 'virgilio.culivela255@gmail.com',

    phone: '+244 943 824 812',
    phoneHref: '+244943824812',

    instagram:
        'https://www.instagram.com/virgilio.design_?igsh=MTU1d3N6NXpzdWR1Zg==',

    tiktok:
        'https://www.tiktok.com/@virgilio_design?_r=1&_t=ZS-98nNZSusBYQ',

    youtube:
        'https://youtube.com/@virgilio_design?si=Wxoq-AR6v9NPzt-H',

    facebook:
        'https://www.facebook.com/profile.php?id=61588131693257',

    linkedin:
        'https://www.linkedin.com/in/virgílioculivela?utm_source=share_via&utm_content=profile&utm_medium=member_android',

    location: 'Luanda',
} as const


export default function Contactos() {
    return (
        <PageFrame>
            <section id="contacto" className="contact-section" aria-labelledby="contacto-titulo">
                <div>
                    <div className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full">
                        <img
                            src="/703261.jpg.jpeg"
                            alt="Retrato de Virgílio Culivela"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            width={384}
                            height={384}
                        />
                    </div>
                </div>

                <div className="contact-copy">
                    <h2 id="contacto-titulo">
                        Vamos
                        <br />
                        <em>conversar.</em>
                    </h2>

                    <p className="mt-5">
                        Para exposições, colaborações, encomendas ou outras questões, entre em
                        contacto.
                    </p>

                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="contact-email"
                    >
                        {CONTACT.email}
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                    
                    <div className="contact-details">
                        <span>{CONTACT.location}</span>

                        <a
                            href={CONTACT.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                        <a
                            href={CONTACT.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TikTok
                        </a>

                        <a
                            href={CONTACT.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube
                        </a>

                        <a
                            href={CONTACT.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>

                        <a
                            href={CONTACT.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a href={`tel:${CONTACT.phoneHref}`}>
                            {CONTACT.phone}
                        </a>
                    </div>
                </div>
            </section>
        </PageFrame>
    )
}