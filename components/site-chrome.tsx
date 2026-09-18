'use client'

import Link from 'next/link'
import { ArrowUpRight, Camera, Mail, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
    ['Início', '/'],
    ['Biografia', '/biografia'],
    ['Galeria', '/galeria'],
    ['Exposições', '/exposicoes'],
    ['Contactos', '/contactos'],
] as const

const englishLinks = [
    ['Home', '/en'],
    ['Biography', '/en/biografia'],
    ['Gallery', '/en/galeria'],
    ['Exhibitions', '/en/exposicoes'],
    ['Contact', '/en/contactos'],
] as const

export function SiteHeader() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

    const currentLinks = isEnglish ? englishLinks : links

    const getLanguagePath = (language: 'pt' | 'en') => {
        const path = pathname || '/'

        if (language === 'en') {
            if (path === '/') return '/en'
            return `/en${path}`
        }

        if (path === '/en') return '/'
        if (path.startsWith('/en/')) {
            return path.replace('/en', '') || '/'
        }

        return path
    }

    return (
        <>
            <header className="site-header">
                <Link
                    href={isEnglish ? '/en' : '/'}
                    className="brand"
                >
                    Virgílio Design
                </Link>

                <nav className="desktop-nav">
                    {currentLinks.map(([label, href]) => (
                        <Link key={href} href={href}>
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-5">
                    <div className="hidden items-center gap-2 text-xs tracking-widest sm:flex">
                        <Link
                            href={getLanguagePath('pt')}
                            className={
                                !isEnglish
                                    ? 'font-medium text-neutral-900'
                                    : 'text-neutral-400 transition-colors hover:text-neutral-900'
                            }
                        >
                            PT
                        </Link>

                        <span className="text-neutral-300">/</span>

                        <Link
                            href={getLanguagePath('en')}
                            className={
                                isEnglish
                                    ? 'font-medium text-neutral-900'
                                    : 'text-neutral-400 transition-colors hover:text-neutral-900'
                            }
                        >
                            EN
                        </Link>
                    </div>

                    <Link
                        className="header-contact"
                        href={isEnglish ? '/en/contactos' : '/contactos'}
                    >
                        {isEnglish ? 'Contact' : 'Contactar'}
                        <ArrowUpRight size={14} />
                    </Link>
                </div>

                <button
                    className="menu-trigger"
                    onClick={() => setOpen(true)}
                    aria-label={isEnglish ? 'Open menu' : 'Abrir menu'}
                >
                    <Menu size={22} strokeWidth={1.25} />
                </button>
            </header>

            {open && (
                <div className="mobile-menu">
                    <button
                        className="menu-close"
                        onClick={() => setOpen(false)}
                        aria-label={isEnglish ? 'Close menu' : 'Fechar menu'}
                    >
                        <X size={24} strokeWidth={1.2} />
                    </button>

                    <div className="mobile-links">
                        {currentLinks.map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 border-t border-neutral-200 pt-6 text-xs tracking-widest">
                        <Link
                            href={getLanguagePath('pt')}
                            className={
                                !isEnglish
                                    ? 'font-medium text-neutral-900'
                                    : 'text-neutral-400'
                            }
                            onClick={() => setOpen(false)}
                        >
                            PT
                        </Link>

                        <span className="text-neutral-300">/</span>

                        <Link
                            href={getLanguagePath('en')}
                            className={
                                isEnglish
                                    ? 'font-medium text-neutral-900'
                                    : 'text-neutral-400'
                            }
                            onClick={() => setOpen(false)}
                        >
                            EN
                        </Link>
                    </div>

                    <p className="mobile-note">
                        {isEnglish
                            ? 'Virgílio Design Studio'
                            : 'Estúdio Virgílio Design'}
                    </p>
                </div>
            )}
        </>
    )
}

export function SiteFooter() {
    const pathname = usePathname()
    const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

    return (
        <footer className="site-footer">
            <div>
                <Link
                    href={isEnglish ? '/en' : '/'}
                    className="brand"
                >
                    Virgílio Design
                </Link>

                <p>
                    {isEnglish
                        ? 'Design · Identity'
                        : 'Design · Identidade'}
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
    )
}

export function PageFrame({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SiteHeader />

            <main className="inner-page">
                {children}
            </main>

            <SiteFooter />
        </>
    )
}