import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EMAIL = 'eneida@veriselezione.com'

function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|eneida@veriselezione\.com)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**')) return <strong key={i} className="text-on-surface">{part.slice(2, -2)}</strong>
    if (part === EMAIL) {
      return (
        <a key={i} href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-2 hover:opacity-70">
          {part}
        </a>
      )
    }
    return part
  })
}

function Block({ block }) {
  const body = 'font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base'

  switch (block.type) {
    case 'p':
      return <p className={body}><Inline text={block.text} /></p>
    case 'ul':
      return (
        <ul className={`${body} list-disc pl-6 space-y-2`}>
          {block.items.map((item, i) => <li key={i}><Inline text={item} /></li>)}
        </ul>
      )
    case 'ol':
      return (
        <ol className={`${body} list-decimal pl-6 space-y-2`}>
          {block.items.map((item, i) => <li key={i}><Inline text={item} /></li>)}
        </ol>
      )
    case 'defs':
      return (
        <dl className="space-y-5">
          {block.items.map(([term, desc]) => (
            <div key={term} className="border-l border-secondary pl-5">
              <dt className="font-label-caps text-primary text-[11px] tracking-[0.15em] mb-1">{term.toUpperCase()}</dt>
              <dd className={body}>{desc}</dd>
            </div>
          ))}
        </dl>
      )
    case 'contact':
      return (
        <div className="bg-surface-container rounded-lg p-6 space-y-2">
          {block.lines.map(([label, value]) => (
            <p key={label} className={body}>
              <strong className="text-on-surface">{label}:</strong> <Inline text={value} />
            </p>
          ))}
        </div>
      )
    default:
      return null
  }
}

export default function LegalPage({ doc }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [doc.slug])

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20">
        <header className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-10">
          <p className="font-label-caps text-secondary text-[10px] tracking-[0.35em] mb-6">{doc.label}</p>
          <h1
            className="font-display-script text-primary leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          >
            {doc.title}
          </h1>
          <div className="w-10 h-px bg-secondary mb-6" />
          <p className="font-label-caps text-on-surface-variant text-[11px] tracking-[0.15em]">
            ÚLTIMA ACTUALIZACIÓN: {doc.updated.toUpperCase()}
          </p>
        </header>

        <article className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          {doc.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-label-caps font-bold text-primary uppercase tracking-[0.1em] text-sm md:text-base">
                {section.heading}
              </h2>
              {section.blocks.map((block, i) => <Block key={i} block={block} />)}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </>
  )
}
