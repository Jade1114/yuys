type NoteFrontmatter = {
  title?: string
  date?: string
  summary?: string
  tags?: string[] | string
}

export type Note = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  content: string
  readingTime: string
}

const noteModules = import.meta.glob('../content/notes/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)

  if (!match) {
    return { data: {} as NoteFrontmatter, content: markdown.trim() }
  }

  const data = match[1].split('\n').reduce<NoteFrontmatter>((frontmatter, line) => {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) return frontmatter

    const key = line.slice(0, separatorIndex).trim() as keyof NoteFrontmatter
    const rawValue = line.slice(separatorIndex + 1).trim()

    if (key === 'tags') {
      frontmatter.tags = rawValue
        .replace(/^\[/, '')
        .replace(/\]$/, '')
        .split(',')
        .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
    } else {
      frontmatter[key] = rawValue.replace(/^['"]|['"]$/g, '') as never
    }

    return frontmatter
  }, {})

  return { data, content: match[2].trim() }
}

function slugFromPath(path: string) {
  return path.split('/').pop()?.replace(/\.md$/, '') ?? path
}

function titleFromContent(content: string, fallback: string) {
  return content.match(/^#\s+(.+)$/m)?.[1] ?? fallback
}

function estimateReadingTime(content: string) {
  const words = content.replace(/[\u4e00-\u9fa5]/g, ' word ').trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.ceil(words / 220))} min read`
}

export const notes = Object.entries(noteModules)
  .map(([path, markdown]) => {
    const slug = slugFromPath(path)
    const { data, content } = parseFrontmatter(markdown)
    const tags = Array.isArray(data.tags) ? data.tags : []

    return {
      slug,
      title: data.title ?? titleFromContent(content, slug),
      date: data.date ?? '',
      summary: data.summary ?? content.replace(/[#>*_`-]/g, '').slice(0, 140),
      tags,
      content,
      readingTime: estimateReadingTime(content),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug)
}
