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
      { text: '总览', link: '/' },
      { text: '周计划', link: '/weeks/week-01' },
      { text: '日计划', link: '/days/' },
      { text: 'LeetCode计划', link: '/leetcode/' },
      { text: '技术学习计划', link: '/technical/' },
      { text: 'GitHub', link: 'https://github.com/ZhengtongDu/The-Agent-Odyssey' }
    ],
    sidebar: [
      {
        text: '总览',
        items: [
          { text: '总览', link: '/' },
          { text: '六周路线图', link: '/roadmap' }
        ]
      },
      {
        text: '周计划',
        items: [
          { text: 'Week 1 任务总览', link: '/weeks/week-01' }
        ]
      },
      {
        text: '日计划',
        items: [
          { text: '日计划索引', link: '/days/' },
          { text: 'Day 1 任务包', link: '/days/day-01' }
        ]
      },
      {
        text: 'LeetCode计划',
        items: [
          { text: 'LeetCode 合集', link: '/leetcode/' },
          { text: 'Top 100 Liked 题单', link: '/leetcode/top-100-liked' },
          { text: 'Day 1 数组哈希专项', link: '/leetcode/day-01-arrays-hash' }
        ]
      },
      {
        text: '技术学习计划',
        items: [
          { text: '技术学习索引', link: '/technical/' },
          { text: 'Day 1 最小二乘与梯度下降', link: '/notes/week-01/day-01-least-squares-gradient-descent' },
          { text: '第一性原理模板', link: '/notes/first-principles' }
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
