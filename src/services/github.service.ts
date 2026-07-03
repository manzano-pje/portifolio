import { githubConfig } from '@/constants/github'
import type { GithubStats } from '@/types'

let cache: GithubStats | null = null

async function fetchGithubUser() {
  const response = await fetch(`${githubConfig.apiUrl}/users/${githubConfig.username}`)
  if (!response.ok) throw new Error('GitHub API unavailable')
  return response.json()
}

async function fetchGithubEvents() {
  const response = await fetch(`${githubConfig.apiUrl}/users/${githubConfig.username}/events/public`)
  if (!response.ok) throw new Error('GitHub events unavailable')
  return response.json()
}

function calculateRank(contributionDays: number): string {
  if (contributionDays >= 300) return 'A+'
  if (contributionDays >= 150) return 'A'
  if (contributionDays >= 50) return 'B'
  return 'C'
}

function calculateCurrentStreak(events: Array<Record<string, unknown>>): number {
  const today = new Date()
  let streak = 0
  for (let i = 0; i < 365; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]
    const hasContribution = events.some((event) => {
      const createdAt = event.created_at as string
      return createdAt && createdAt.startsWith(dateStr)
    })
    if (hasContribution) {
      streak++
    } else if (i > 0) {
      break
    }
  }
  return streak
}

function buildContributionGraph(): string {
  return `https://github.com/${githubConfig.username}.png`
}

export const githubService = {
  async getStats(): Promise<GithubStats> {
    if (cache) return cache

    try {
      const [user, events] = await Promise.all([fetchGithubUser(), fetchGithubEvents()])
      const streak = calculateCurrentStreak(events)
      const contributionDays = user.public_repos ? Math.min(user.public_repos * 30, 365) : 0

      const stats: GithubStats = {
        rank: calculateRank(contributionDays),
        currentStreak: streak,
        contributionGraph: buildContributionGraph(),
      }

      cache = stats
      return stats
    } catch {
      const fallback: GithubStats = {
        rank: 'B',
        currentStreak: 0,
        contributionGraph: buildContributionGraph(),
      }
      cache = fallback
      return fallback
    }
  },

  getContributionGraphUrl(): string {
    return buildContributionGraph()
  },

  getProfileUrl(): string {
    return `https://github.com/${githubConfig.username}`
  },

  clearCache() {
    cache = null
  },
}
