import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection() {
  const activeSection = ref('')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = document.querySelectorAll('section[id]')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )
    sections.forEach((section) => observer?.observe(section))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection }
}
