export function useExternalLinks() {
  function open(url: string) {
    if (!url || url === '#') return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return { open }
}
