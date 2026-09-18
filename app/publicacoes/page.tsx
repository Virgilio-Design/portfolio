import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-chrome'
const items = [['2026','Entrevista','O processo criativo por trás da obra','Revista Umbra'],['2025','Catálogo','O Peso da Luz','Edição Casa das Artes'],['2024','Ensaio','A matéria como lugar de memória','Caderno de Arte Contemporânea']]
export default function Publicacoes() { return <PageFrame><section className="inner-hero" ><h1>Publicações</h1><p>Textos, catálogos e entrevistas sobre o trabalho do Stúdio Virgílio Design.</p></section><section className="section page-list">{items.map(([year,type,title,pub]) => <a className="publication-row" href="#" key={title}><strong>{year}</strong><span>{type}</span><h3>{title}</h3><p>{pub}</p><ArrowUpRight size={17}/></a>)}</section></PageFrame> }
