import { createRequire } from 'node:module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const mathjax3 = require('markdown-it-mathjax3')

export default defineConfig({
  lang: 'zh-CN',
  title: 'The Agent Odyssey',
  description: 'Six weeks from first-principles ML to LLM agent systems.',
  base: '/The-Agent-Odyssey/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(mathjax3)
    }
  },
  themeConfig: {
    nav: [
      { text: '路线图', link: '/roadmap' },
      { text: 'LeetCode', link: '/leetcode/' },
      { text: '笔记模板', link: '/notes/first-principles' },
      { text: 'GitHub', link: 'https://github.com/ZhengtongDu/The-Agent-Odyssey' }
    ],
    sidebar: [
      {
        text: 'Start',
        items: [
          { text: '总览', link: '/' },
          { text: '六周路线图', link: '/roadmap' }
        ]
      },
      {
        text: 'Practice',
        items: [
          { text: 'LeetCode SOP', link: '/leetcode/' },
          { text: 'First Principles Note', link: '/notes/first-principles' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhengtongDu/The-Agent-Odyssey' }
    ],
    footer: {
      message: 'Built with VitePress for a 6-week LLM and Agent learning journey.',
      copyright: 'Copyright © 2026 Zhengtong Du'
    },
    search: {
      provider: 'local'
    }
  }
})
