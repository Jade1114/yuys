import { Link, Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import { useI18n } from '../lib/i18n'
import { notes, getReadingMinutes } from '../lib/notes'

export const Route = createFileRoute('/notes')({
  component: NotesPage,
})

function NotesPage() {
  const { t } = useI18n()
  const location = useLocation()

  if (location.pathname !== '/notes') {
    return <Outlet />
  }

  return (
    <div className="min-h-[calc(100vh-9rem)] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">{t.notes.label}</p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.notes.title}</h1>
          <p className="text-lg leading-8 text-base-content/65">
            {t.notes.subtitle}
          </p>
        </div>

        <div className="grid gap-5">
          {notes.map((note) => (
            <Link key={note.slug} to="/notes/$slug" params={{ slug: note.slug }} className="card border border-base-300 bg-base-200/50 transition hover:-translate-y-1 hover:border-primary/60 hover:bg-base-200">
              <div className="card-body gap-4">
                <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/45">
                  {note.date && <span>{note.date}</span>}
                  <span>{t.common.minRead(getReadingMinutes(note.readingTime))}</span>
                </div>
                <div>
                  <h2 className="card-title text-2xl">{note.title}</h2>
                  <p className="mt-3 leading-7 text-base-content/65">{note.summary}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span key={tag} className="badge badge-outline badge-primary">{tag}</span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-primary">{t.common.readNote}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
