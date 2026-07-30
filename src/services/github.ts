import type { GithubUserStats, GithubRepoStats } from '@/types'

const GITHUB_USERNAME = 'manzano-pje'
const API_BASE = 'https://api.github.com'

/**
 * Busca dados básicos do usuário no GitHub (API pública, sem autenticação)
 */
export async function fetchGithubUser(): Promise<GithubUserStats> {
  const res = await fetch(`${API_BASE}/users/${GITHUB_USERNAME}`, {
    headers: { Accept: 'application/vnd.github.v3+json' },
  })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  const data = await res.json()
  return {
    login: data.login,
    name: data.name ?? GITHUB_USERNAME,
    bio: data.bio ?? '',
    publicRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
    avatarUrl: data.avatar_url,
    profileUrl: data.html_url,
  }
}

/**
 * Busca repositórios públicos e calcula stars totais + linguagens principais
 */
export async function fetchGithubRepoStats(): Promise<GithubRepoStats> {
  const res = await fetch(
    `${API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    { headers: { Accept: 'application/vnd.github.v3+json' } },
  )
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  const repos = await res.json()

  const totalStars = repos.reduce(
    (sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count,
    0,
  )

  // Conta ocorrências de linguagens (excluindo nulas)
  const langCount: Record<string, number> = {}
  for (const repo of repos) {
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] ?? 0) + 1
    }
  }

  const total = Object.values(langCount).reduce((a, b) => a + b, 0)
  const topLanguages = Object.entries(langCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([language, count]) => ({
      language,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
    }))

  return { totalStars, topLanguages }
}

/** URL do gráfico de contribuições (embed seguro via serviço externo) */
export function getContributionChartUrl(): string {
  return `https://ghchart.rshah.org/22d3ee/${GITHUB_USERNAME}`
}
