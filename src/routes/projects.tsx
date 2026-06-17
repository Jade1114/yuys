import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const projects = [
  {
    title: 'Edu-Flow-AI',
    icon: '🎯',
    subtitle: 'AI-Powered Course Scheduling',
    description: 'An end-to-end course scheduling system for universities — from historical schedule import and model training to solution generation and export. Trained a LightGBM model on 12,426 historical course records covering 842 courses and 734 teachers, using targeted recommendations to drastically reduce the scheduling search space.',
    highlights: [
      'Full data pipeline: schedule import → analysis → LightGBM training → solution generation → export',
      'Single-model prediction: directly predicts TopK (room, day, period) resource combinations with teacher profiling',
      'Continuous optimization loop: admin adjustments and conflict resolutions auto-feed back as training samples',
      'Spring Boot + MyBatis for backend modules, React + TypeScript for frontend, Docker Compose for orchestration',
    ],
    tags: ['Spring Boot', 'MyBatis', 'MySQL', 'React', 'TypeScript', 'LightGBM', 'Docker'],
    color: 'primary',
    stats: '12,426 samples · 47.78% slot_hit@5 · 842 courses',
    github: 'https://github.com/Jade1114/edu-flow-ai',
  },
  {
    title: 'Chat Room',
    icon: '💬',
    subtitle: 'Real-time Messaging Platform',
    description: 'A real-time chat application focused on WebSocket connection management, controlled concurrency, and distributed state synchronization. Evolved from a global broadcast model to a clean room-isolated architecture.',
    highlights: [
      'Architecture evolution: global broadcast → bottleneck identification → per-room serial, cross-room parallel concurrency model',
      'Message ordering: RabbitMQ bucket queue — balancing single-queue serial bottleneck against per-room queue resource explosion',
      'Distributed state: Redis-powered user online status and room mapping for horizontally scalable consistency',
      'Spring Boot + WebSocket for real-time messaging, Vue 3 for the frontend',
    ],
    tags: ['Spring Boot', 'WebSocket', 'Redis', 'RabbitMQ', 'Vue 3'],
    color: 'secondary',
    stats: 'Controlled concurrency · Bucket queue · Distributed state',
    github: 'https://github.com/Jade1114/chat-room',
  },
  {
    title: 'Apothecary-DB',
    icon: '📚',
    subtitle: 'Personal Knowledge Infrastructure',
    description: 'An AI-era personal knowledge base — the core thesis: in a world where code is increasingly automated, real value is knowing what deserves to be built. Used AI-assisted development to rapidly explore architecture, validate the tech stack, and prove feasibility end to end.',
    highlights: [
      'Next.js + React + TypeScript + PostgreSQL + Qdrant for vector search',
      'BS architecture with Electron shell for desktop',
      'AI coding practice: tiered collaboration system with scenario-based strategies and cross-model experience (Claude Code, Codex, GPT)',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Qdrant'],
    color: 'accent',
    stats: 'Vector search · Full-text · BS + Desktop',
    github: 'https://github.com/Jade1114/apothecary-db',
  },
]

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Projects</h1>
        <p className="text-base-content/60 text-lg">
          Things I've built — independent work, end to end.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`card bg-base-200 border border-base-300 hover:border-base-content/20 transition-all duration-300 ${
              i === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="card-body">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h2 className="card-title text-xl">
                      {project.title}
                      {i === 0 && (
                        <div className="badge badge-primary badge-sm">featured</div>
                      )}
                    </h2>
                    <p className="text-sm text-base-content/50">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              <p className="text-base-content/70 leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-base-content/60">
                    <span className={`text-${project.color} mt-1 shrink-0`}>•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge badge-soft badge-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-xs gap-1"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source
                </a>
              </div>

              <p className="text-xs text-base-content/30 font-mono mt-2">{project.stats}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
