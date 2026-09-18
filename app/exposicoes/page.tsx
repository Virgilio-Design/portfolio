import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-chrome'
const items = [
  ['2019', 'UNTITLED 02', 'Galeria Banco Económico', 'Luanda, Angola'],
  ['2020/2021', 'FELIZ NATAL', 'Espaço ELA', 'Luanda, Angola'],
  ['2021', 'ARTISTICAMENTE ART', 'Fundação Arte e Cultura', 'Luanda, Angola'],
  ['2023', 'INSTINTO DE SOBREVIVÊNCIA', 'Shopping Avenida do Morro Bento', 'Luanda, Angola'],
  ['2024', 'MUDANÇA DE PARADIGMA: UMA VISÃO RENASCENTISTA', 'Faculdade de Artes', 'Luanda, Angola'],
];
export default function Exposicoes() { return <PageFrame><section className="inner-hero"><h1>Exposições</h1><p>Projetos e colaborações que ganham forma em diferentes contextos.</p></section><section className="section page-list">{items.map(([year,title,place,city]) => <div className="exhibition-row" key={title}><strong>{year}</strong><div><h3>{title}</h3><p>{place} · {city}</p></div></div>)}</section></PageFrame> }
