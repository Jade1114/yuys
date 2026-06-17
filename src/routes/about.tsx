import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">About</h1>
        <p className="text-base-content/60 text-lg">
          Who I am, what I'm building, and where I'm headed.
        </p>
      </div>

      <div className="space-y-8">
        {/* Bio & Education */}
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body">
            <h2 className="card-title text-xl mb-3">👋 Hey there</h2>
            <div className="space-y-4 text-base-content/70 leading-relaxed">
              <p>
                I'm <strong>Yuy</strong> — a developer who leans{' '}
                <strong>backend-first</strong> (Java · Spring Boot · MySQL) but
                goes full-stack when the situation calls for it. My projects span from
                ML-powered scheduling engines to real-time messaging systems — I care
                about what gets built as much as how it's built.
              </p>
              <p>
                Currently preparing for <strong>mid-August job applications</strong>,
                depth-first on Java collections, Spring internals, and MySQL indexing &
                transactions. I also maintain a daily DSA practice and Java interview
                oral training habit.
              </p>
            </div>
          </div>
        </div>

        {/* Build Philosophy */}
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body">
            <h2 className="card-title text-xl mb-3">💭 Build Philosophy</h2>
            <ul className="space-y-3 text-base-content/70">
              <li className="flex gap-3">
                <span className="text-primary font-bold">01</span>
                <span><strong>MVP first, iterate fast</strong> — Don't over-design. Get something working, then make it right.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">02</span>
                <span><strong>Understand before optimizing</strong> — A faster wrong answer is still wrong. Know the problem deeply first.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">03</span>
                <span><strong>Architecture is about trade-offs</strong> — Every design decision is a bet. Make it explicit, revisit it often.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">04</span>
                <span><strong>Build what matters</strong> — Not every problem needs a solution. Focus on the ones that do.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Work Style */}
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body">
            <h2 className="card-title text-xl mb-3">🔧 How I Work</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">⌨️</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Editor</h3>
                  <p className="text-xs text-base-content/50">VS Code + Kitty</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">💻</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">OS</h3>
                  <p className="text-xs text-base-content/50">macOS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">🐚</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Shell</h3>
                  <p className="text-xs text-base-content/50">zsh, minimalist setup</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">🌐</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Stack</h3>
                  <p className="text-xs text-base-content/50">Java / React / Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Resume */}
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body text-center">
            <h2 className="card-title text-xl mb-2 justify-center">📬 Get in Touch</h2>
            <p className="text-base-content/50 mb-6">
              I'm actively looking for backend / full-stack internship opportunities.
              If you have an opening or just want to chat — feel free to reach out.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:Zhi_Yuzzz@outlook.com"
                className="btn btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Zhi_Yuzzz@outlook.com
              </a>
              <a
                href="mailto:c4llm3Jade@gmail.com"
                className="btn btn-outline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                c4llm3Jade@gmail.com
              </a>
              <a
                href="https://github.com/Jade1114"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-soft btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 5a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L8 10.586V7z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
