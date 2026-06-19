import type { ReactNode } from 'react'

function inlineMarkdown(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return (
        <a key={index} href={linkMatch[2]} target={linkMatch[2].startsWith('http') ? '_blank' : undefined} rel="noreferrer">
          {linkMatch[1]}
        </a>
      )
    }

    return part
  })
}

function flushParagraph(lines: string[], nodes: ReactNode[]) {
  if (!lines.length) return
  nodes.push(<p key={nodes.length}>{inlineMarkdown(lines.join(' '))}</p>)
  lines.length = 0
}

export function MarkdownContent({ content }: { content: string }) {
  const nodes: ReactNode[] = []
  const paragraph: string[] = []
  const lines = content.split('\n')
  let index = 0

  while (index < lines.length) {
    const line = lines[index]

    if (!line.trim()) {
      flushParagraph(paragraph, nodes)
      index += 1
      continue
    }

    if (line.startsWith('```')) {
      flushParagraph(paragraph, nodes)
      const language = line.slice(3).trim()
      const codeLines: string[] = []
      index += 1
      while (index < lines.length && !lines[index].startsWith('```')) {
        codeLines.push(lines[index])
        index += 1
      }
      nodes.push(
        <pre key={nodes.length} data-language={language || undefined}>
          <code>{codeLines.join('\n')}</code>
        </pre>,
      )
      index += 1
      continue
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      flushParagraph(paragraph, nodes)
      const level = heading[1].length
      const children = inlineMarkdown(heading[2])
      if (level === 1) nodes.push(<h1 key={nodes.length}>{children}</h1>)
      if (level === 2) nodes.push(<h2 key={nodes.length}>{children}</h2>)
      if (level === 3) nodes.push(<h3 key={nodes.length}>{children}</h3>)
      index += 1
      continue
    }

    if (line.startsWith('> ')) {
      flushParagraph(paragraph, nodes)
      const quoteLines: string[] = []
      while (index < lines.length && lines[index].startsWith('> ')) {
        quoteLines.push(lines[index].slice(2))
        index += 1
      }
      nodes.push(<blockquote key={nodes.length}>{inlineMarkdown(quoteLines.join(' '))}</blockquote>)
      continue
    }

    if (/^-\s+/.test(line)) {
      flushParagraph(paragraph, nodes)
      const items: string[] = []
      while (index < lines.length && /^-\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^-\s+/, ''))
        index += 1
      }
      nodes.push(
        <ul key={nodes.length}>
          {items.map((item, itemIndex) => <li key={itemIndex}>{inlineMarkdown(item)}</li>)}
        </ul>,
      )
      continue
    }

    paragraph.push(line.trim())
    index += 1
  }

  flushParagraph(paragraph, nodes)

  return <article className="note-markdown">{nodes}</article>
}
