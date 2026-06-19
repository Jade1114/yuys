import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Locale = 'en' | 'zh'

type Translation = typeof translations.en

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Translation
}

const STORAGE_KEY = 'yuy-site-locale'

const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      notes: 'Notes',
      skills: 'Skills',
      about: 'About',
      language: '中文',
      menu: 'Menu',
    },
    common: {
      featured: 'featured',
      source: 'Source',
      resume: 'Resume',
      downloadResume: 'Download Resume',
      backToNotes: '← Back to notes',
      readNote: 'Read note →',
      noteNotFound: 'Note not found',
      noteNotFoundDescription: 'This Markdown file may have been renamed or removed.',
      builtWith: 'Built with React + daisyUI.',
      minRead: (minutes: string) => `${minutes} min read`,
    },
    home: {
      tagline: 'Backend-first · Full-stack capable · Always learning',
      intro: 'Backend-first developer building practical systems with Java, TypeScript, and AI. Currently deepening backend fundamentals while exploring AI engineering and agent runtimes.',
      projectsCta: 'Projects',
      aboutCta: 'About',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Three projects that show my backend, real-time systems, and AI application experience.',
      items: [
        {
          title: 'Edu-Flow-AI',
          icon: '🎯',
          subtitle: 'AI-Assisted Course Scheduling Platform',
          description: 'A university scheduling system that combines business workflows with ML-assisted resource recommendation. It covers schedule import, data validation, model training, solution generation, manual adjustment, and export.',
          highlights: [
            'Built the scheduling flow around real university constraints instead of a toy optimization demo',
            'Trained a LightGBM model on 12,426 historical records to recommend TopK room/day/period combinations',
            'Designed a feedback loop where admin adjustments and conflict resolutions become future training samples',
            'Implemented backend modules with Spring Boot + MyBatis and a React + TypeScript frontend',
          ],
          tags: ['Spring Boot', 'MyBatis', 'MySQL', 'React', 'TypeScript', 'LightGBM', 'Docker'],
          color: 'primary',
          stats: '12,426 samples · 47.78% slot_hit@5 · 842 courses',
          github: 'https://github.com/Jade1114/edu-flow-ai',
        },
        {
          title: 'Chat Room',
          icon: '💬',
          subtitle: 'Campus Real-time Collaboration Platform',
          description: 'A WebSocket-based chat system evolving toward a Discord-like campus collaboration tool, focused on channels, permissions, connection lifecycle, message ordering, and distributed online state.',
          highlights: [
            'Refactored from global broadcast toward room/channel isolation for clearer concurrency boundaries',
            'Explored RabbitMQ bucket queues to balance message ordering and queue resource cost',
            'Used Redis to model online status and room/channel mappings for horizontal scalability',
            'Built the frontend with React + TypeScript and modeled campus roles, channels, and access rules',
          ],
          tags: ['Spring Boot', 'WebSocket', 'Redis', 'RabbitMQ', 'React', 'TypeScript'],
          color: 'secondary',
          stats: 'Controlled concurrency · Bucket queue · Distributed state',
          github: 'https://github.com/Jade1114/chat-room',
        },
        {
          title: 'Apothecary-DB',
          icon: '📚',
          subtitle: 'AI-Era Personal Knowledge Infrastructure',
          description: 'A personal knowledge base prototype for organizing notes, project context, and AI-assisted retrieval. The focus is not just storing documents, but turning scattered learning material into usable working memory.',
          highlights: [
            'Designed around the idea that AI coding still needs strong problem selection and context management',
            'Explored full-text search, vector retrieval, and structured project knowledge organization',
            'Practiced AI-assisted architecture validation across Claude Code, Codex, and GPT workflows',
          ],
          tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Qdrant'],
          color: 'accent',
          stats: 'Vector search · Full-text · BS + Desktop',
          github: 'https://github.com/Jade1114/apothecary-db',
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: "What I work with — and what I'm digging into next.",
      currentlyDeepening: 'Currently Deepening',
      learningSubtitle: 'Preparing for mid-August job applications — P0 priority items',
      levels: ['Learning', 'Beginner', 'Competent', 'Proficient', 'Expert'],
      learning: [
        'Java collections deep dive (HashMap / ConcurrentHashMap / ThreadPool)',
        'Spring IOC / AOP / Bean lifecycle',
        'MySQL B+Tree / transaction isolation / MVCC',
        'Redis data structures and caching strategies',
        'WebSocket connection management and distributed state synchronization',
        'AI Agent Runtime (Tool Calling / Loop / Memory / Trace)',
      ],
    },
    about: {
      title: 'About',
      subtitle: "Who I am, what I'm building, and where I'm headed.",
      hey: '👋 Hey there',
      bio1: 'I\'m Yuy, a backend-first developer focused on Java, Spring Boot, and data-driven systems. I enjoy building practical products end to end — from backend architecture and database design to frontend delivery and AI/ML-powered features.',
      bio2: 'Currently, I\'m deepening my backend fundamentals while exploring AI engineering and agent systems. I keep a steady practice loop across DSA, Java interview fundamentals, and project-based learning.',
      philosophyTitle: '💭 Build Philosophy',
      philosophy: [
        ['MVP first, iterate fast', "Don't over-design. Get something working, then make it right."],
        ['Understand before optimizing', 'A faster wrong answer is still wrong. Know the problem deeply first.'],
        ['Architecture is about trade-offs', 'Every design decision is a bet. Make it explicit, revisit it often.'],
        ['Build what matters', 'Not every problem needs a solution. Focus on the ones that do.'],
      ],
      workTitle: '🔧 How I Work',
      contactTitle: '📬 Get in Touch',
      contactText: "I'm actively looking for backend / full-stack internship opportunities. If you have an opening or just want to chat — feel free to reach out.",
    },
    notes: {
      label: 'Blog / Notes',
      title: 'Learning notes, project logs, and messy thoughts.',
      subtitle: 'A lightweight Markdown-powered notebook for technical notes, learning reviews, and blog-style writeups.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      projects: '项目',
      notes: '笔记',
      skills: '技能',
      about: '关于',
      language: 'EN',
      menu: '菜单',
    },
    common: {
      featured: '重点',
      source: '源码',
      resume: '简历',
      downloadResume: '下载简历',
      backToNotes: '← 返回笔记',
      readNote: '阅读全文 →',
      noteNotFound: '没找到这篇笔记',
      noteNotFoundDescription: '这个 Markdown 文件可能被重命名或删除了。',
      builtWith: '使用 React + daisyUI 构建。',
      minRead: (minutes: string) => `${minutes} 分钟阅读`,
    },
    home: {
      tagline: '后端优先 · 可全栈落地 · 持续学习中',
      intro: '以后端为主线，用 Java、TypeScript 和 AI 构建实用系统。目前正在继续夯实后端基础，同时探索 AI Engineering 和 Agent Runtime。',
      projectsCta: '项目',
      aboutCta: '关于我',
    },
    projects: {
      title: '项目',
      subtitle: '三个项目，分别展示后端业务、实时系统和 AI 应用能力。',
      items: [
        {
          title: 'Edu-Flow-AI',
          icon: '🎯',
          subtitle: 'AI 辅助高校排课平台',
          description: '一个把业务流程和机器学习资源推荐结合起来的高校排课系统，覆盖课表导入、数据校验、模型训练、方案生成、人工调整与导出。',
          highlights: [
            '围绕真实高校排课约束设计流程，而不是停留在玩具级优化 demo',
            '基于 12,426 条历史记录训练 LightGBM，推荐 TopK 教室/星期/节次组合',
            '设计反馈闭环：管理员调整和冲突处理结果可沉淀为后续训练样本',
            '后端使用 Spring Boot + MyBatis，前端使用 React + TypeScript',
          ],
          tags: ['Spring Boot', 'MyBatis', 'MySQL', 'React', 'TypeScript', 'LightGBM', 'Docker'],
          color: 'primary',
          stats: '12,426 样本 · 47.78% slot_hit@5 · 842 门课程',
          github: 'https://github.com/Jade1114/edu-flow-ai',
        },
        {
          title: 'Chat Room',
          icon: '💬',
          subtitle: '高校实时协作平台',
          description: '一个基于 WebSocket 的实时聊天系统，正在向类 Discord 的高校协作平台演进，重点关注频道、权限、连接生命周期、消息顺序和分布式在线状态。',
          highlights: [
            '从全局广播重构到房间/频道隔离，让并发边界更清晰',
            '探索 RabbitMQ bucket queue，在消息顺序和队列资源成本之间做权衡',
            '使用 Redis 建模在线状态和房间/频道映射，支持横向扩展',
            '前端使用 React + TypeScript，并建模高校角色、频道和访问规则',
          ],
          tags: ['Spring Boot', 'WebSocket', 'Redis', 'RabbitMQ', 'React', 'TypeScript'],
          color: 'secondary',
          stats: '可控并发 · Bucket Queue · 分布式状态',
          github: 'https://github.com/Jade1114/chat-room',
        },
        {
          title: 'Apothecary-DB',
          icon: '📚',
          subtitle: 'AI 时代的个人知识基础设施',
          description: '一个用于整理笔记、项目上下文和 AI 辅助检索的个人知识库原型。重点不只是存文档，而是把零散学习材料变成可复用的工作记忆。',
          highlights: [
            '围绕“AI Coding 仍然需要问题选择和上下文管理”这个判断设计',
            '探索全文搜索、向量检索和结构化项目知识组织',
            '实践 Claude Code、Codex、GPT 等工具下的 AI 辅助架构验证流程',
          ],
          tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Qdrant'],
          color: 'accent',
          stats: '向量检索 · 全文搜索 · BS + Desktop',
          github: 'https://github.com/Jade1114/apothecary-db',
        },
      ],
    },
    skills: {
      title: '技能',
      subtitle: '我正在使用的技术，以及下一阶段继续深挖的方向。',
      currentlyDeepening: '当前深挖',
      learningSubtitle: '为八月中旬投递做准备，P0 优先级内容',
      levels: ['学习中', '入门', '能用', '熟练', '深入'],
      learning: [
        'Java 集合框架深度（HashMap / ConcurrentHashMap / ThreadPool）',
        'Spring IOC / AOP / Bean 生命周期',
        'MySQL B+Tree / 事务隔离 / MVCC',
        'Redis 数据结构与缓存策略',
        'WebSocket 连接管理与分布式状态同步',
        'AI Agent Runtime（Tool Calling / Loop / Memory / Trace）',
      ],
    },
    about: {
      title: '关于',
      subtitle: '我是谁、在做什么，以及接下来往哪里走。',
      hey: '👋 嗨，我是 Yuy',
      bio1: '我是 Yuy，一个以后端为主线的开发者，主要关注 Java、Spring Boot 和数据驱动系统。我喜欢把想法真正做成能跑的产品，从后端架构、数据库设计，到前端交互和 AI/ML 能力接入都会参与。',
      bio2: '目前正在继续夯实后端基础，同时探索 AI Engineering 和 Agent 系统。我会保持 DSA、Java 面试基础和项目实战的稳定练习节奏。',
      philosophyTitle: '💭 构建理念',
      philosophy: [
        ['MVP 优先，快速迭代', '别一开始就过度设计。先让东西跑起来，再慢慢做对。'],
        ['先理解，再优化', '更快的错误答案还是错误答案，先把问题看明白。'],
        ['架构就是权衡', '每个设计决策都是一次下注，要说清楚，也要愿意回头修正。'],
        ['做真正重要的事', '不是每个问题都需要解法，把精力放在值得做的事情上。'],
      ],
      workTitle: '🔧 我的工作方式',
      contactTitle: '📬 联系我',
      contactText: '我正在寻找后端 / 全栈实习机会。如果有合适岗位，或者只是想聊聊，欢迎联系。',
    },
    notes: {
      label: '博客 / 笔记',
      title: '学习笔记、项目记录，还有一点乱七八糟的想法。',
      subtitle: '一个轻量的 Markdown 笔记页，用来展示技术笔记、复盘和博客式记录。',
    },
  },
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const storedLocale = window.localStorage.getItem(STORAGE_KEY)
  if (storedLocale === 'en' || storedLocale === 'zh') return storedLocale
  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
  }

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    toggleLocale: () => setLocale(locale === 'en' ? 'zh' : 'en'),
    t: translations[locale],
  }), [locale])

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
