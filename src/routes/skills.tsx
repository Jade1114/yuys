import { createFileRoute } from '@tanstack/react-router'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/skills')({
  component: Skills,
})

const categories = [
  {
    name: 'Backend',
    icon: '⚙️',
    color: 'primary',
    skills: [
      { name: 'Java', level: 4 },
      { name: 'Spring Boot / MyBatis', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Redis', level: 3 },
      { name: 'RabbitMQ', level: 3 },
      { name: 'WebSocket', level: 3 },
    ],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'secondary',
    skills: [
      { name: 'React', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'Vue 3', level: 3 },
      { name: 'TailwindCSS / daisyUI', level: 3 },
    ],
  },
  {
    name: 'Product & Delivery',
    icon: '🧭',
    color: 'accent',
    skills: [
      { name: 'MVP scoping', level: 3 },
      { name: 'Acceptance criteria', level: 3 },
      { name: 'Manual validation', level: 3 },
      { name: 'Project retrospectives', level: 3 },
    ],
  },
  {
    name: 'AI Engineering',
    icon: '🤖',
    color: 'info',
    skills: [
      { name: 'Claude Code / Codex', level: 4 },
      { name: 'Agent Runtime', level: 3 },
      { name: 'Context engineering', level: 3 },
      { name: 'Tool calling', level: 2 },
    ],
  },
]

function Skills() {
  const { t } = useI18n()

  const levelLabel = (level: number) => t.skills.levels[level] ?? t.skills.levels[0]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">{t.skills.title}</h1>
        <p className="text-base-content/60 text-lg leading-relaxed">
          {t.skills.subtitle}
        </p>
      </div>

      <section className="mb-12">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Capability</p>
          <h2 className="text-3xl font-bold mb-3">{t.skills.capabilityTitle}</h2>
          <p className="text-base-content/60 leading-relaxed">
            {t.skills.capabilitySubtitle}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {t.skills.capabilityItems.map(([title, description], index) => (
            <div key={title} className="card bg-base-200 border border-base-300">
              <div className="card-body">
                <span className="text-primary font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="card-title text-lg">{title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Stack</p>
          <h2 className="text-3xl font-bold mb-3">{t.skills.stackTitle}</h2>
          <p className="text-base-content/60 leading-relaxed">
            {t.skills.stackSubtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.name} className="card bg-base-200 border border-base-300">
              <div className="card-body">
                <h2 className="card-title">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  {category.name}
                </h2>
                <div className="mt-4 space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1 gap-3">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={`text-xs badge badge-${category.color} badge-soft badge-sm shrink-0`}>
                          {levelLabel(skill.level)}
                        </span>
                      </div>
                      <progress
                        className={`progress w-full progress-${category.color}`}
                        value={skill.level}
                        max="4"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card bg-base-200 border border-base-300">
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-2xl mr-2">📚</span>
            {t.skills.currentlyDeepening}
          </h2>
          <p className="text-sm text-base-content/50 mb-4">
            {t.skills.learningSubtitle}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.skills.learning.map((item, i) => (
              <div key={i} className="flex items-start gap-2 rounded-box bg-base-100/60 border border-base-300 p-3">
                <span className="text-primary mt-0.5 text-xs shrink-0">▶</span>
                <span className="text-sm text-base-content/70 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
