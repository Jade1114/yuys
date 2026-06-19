import { Link, createFileRoute } from '@tanstack/react-router'
import { MarkdownContent } from '../lib/markdown'
import { getNote, getReadingMinutes } from '../lib/notes'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/notes/$slug')({
  component: NotePage,
})

function NotePage() {
  const { slug } = Route.useParams()
  const note = getNote(slug)
  const { t } = useI18n()

  if (!note) {
    return (
      <div className="min-h-[calc(100vh-9rem)] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Link to="/notes" className="btn btn-ghost mb-8">{t.common.backToNotes}</Link>
          <div className="card border border-base-300 bg-base-200">
            <div className="card-body">
              <h1 className="card-title text-3xl">{t.common.noteNotFound}</h1>
              <p className="text-base-content/60">{t.common.noteNotFoundDescription}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-9rem)] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link to="/notes" className="btn btn-ghost mb-8">{t.common.backToNotes}</Link>

        <header className="mb-10 border-b border-base-300 pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-base-content/45">
            {note.date && <span>{note.date}</span>}
            <span>{t.common.minRead(getReadingMinutes(note.readingTime))}</span>
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">{note.title}</h1>
          <p className="text-lg leading-8 text-base-content/65">{note.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <span key={tag} className="badge badge-outline badge-primary">{tag}</span>
            ))}
          </div>
        </header>

        <MarkdownContent content={note.content} />
      </div>
    </div>
  )
}
