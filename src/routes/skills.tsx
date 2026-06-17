import { createFileRoute } from '@tanstack/react-router'

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
      { name: 'Python', level: 3 },
      { name: 'Redis', level: 3 },
      { name: 'RabbitMQ', level: 3 },
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
      { name: 'TailwindCSS', level: 2 },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: '☁️',
    color: 'accent',
    skills: [
      { name: 'Docker', level: 3 },
      { name: 'Git', level: 4 },
      { name: 'Linux / macOS', level: 4 },
    ],
  },
  {
    name: 'AI Coding',
    icon: '🤖',
    color: 'info',
    skills: [
      { name: 'Claude Code / Codex', level: 4 },
    ],
  },
]

const learning = [
  'Java 集合框架深度（HashMap / ConcurrentHashMap / ThreadPool）',
  'Spring IOC / AOP / Bean 生命周期',
  'MySQL B+Tree / 事务隔离 / MVCC',
  'Redis 数据结构与缓存策略',
  'WebSocket 连接管理与分布式状态同步',
  'AI Agent Runtime（Tool Calling / Loop / Memory / Trace）',
]

const levelLabel = (level: number) => {
  switch (level) {
    case 1: return 'Beginner'
    case 2: return 'Competent'
    case 3: return 'Proficient'
    case 4: return 'Expert'
    default: return 'Learning'
  }
}

function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Skills</h1>
        <p className="text-base-content/60 text-lg">
          What I work with — and what I'm digging into next.
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
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className={`text-xs badge badge-${category.color} badge-soft badge-sm`}>
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

      {/* Currently Learning */}
      <div className="card bg-base-200 border border-base-300 mt-8">
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-2xl mr-2">📚</span>
            Currently Deepening
          </h2>
          <p className="text-sm text-base-content/50 mb-4">
            Preparing for mid-August job applications — P0 priority items
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {learning.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5 text-xs shrink-0">▶</span>
                <span className="text-sm text-base-content/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
