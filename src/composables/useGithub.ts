import { ref, onMounted } from 'vue'
import { githubService } from '@/services/github.service'
import type { GithubStats } from '@/types'

export function useGithub() {
  const stats = ref<GithubStats | null>(null)
  const loading = ref(true)
  const error = ref(false)

  onMounted(async () => {
    try {
      stats.value = await githubService.getStats()
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  })

  return { stats, loading, error }
}
