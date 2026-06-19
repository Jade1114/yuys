import { Link, createFileRoute } from '@tanstack/react-router'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { t } = useI18n()

  return (
    <div className="hero min-h-[calc(100vh-8rem)]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <div className="avatar mb-8">
            <div className="w-32 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <div className="avatar-placeholder bg-neutral text-neutral-content flex items-center justify-center text-4xl font-bold h-full w-full rounded-full">
                Y
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-primary">Yuy</span>
          </h1>

          <p className="text-xl text-base-content/70 mb-6">
            {t.home.tagline}
          </p>
          <p className="text-base-content/60 mb-8 max-w-lg mx-auto">
            {t.home.intro}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/projects" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              {t.home.projectsCta}
            </Link>
            <Link to="/about" className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              {t.home.aboutCta}
            </Link>
            <a href="/resume.pdf" className="btn btn-soft btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 5a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L8 10.586V7z" clipRule="evenodd" />
              </svg>
              {t.common.resume}
            </a>
          </div>
          <div className="mt-12 flex gap-6 justify-center text-base-content/40 flex-wrap">
            <span className="flex items-center gap-1">
              <span className="badge badge-soft badge-primary badge-xs"></span>
              Java / Spring Boot
            </span>
            <span className="flex items-center gap-1">
              <span className="badge badge-soft badge-secondary badge-xs"></span>
              TypeScript / React & Vue
            </span>
            <span className="flex items-center gap-1">
              <span className="badge badge-soft badge-accent badge-xs"></span>
              Python / AI & ML
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
