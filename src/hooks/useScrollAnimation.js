import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Only observe once if once option is true
            if (options.once !== false) {
              observer.unobserve(entry.target)
            }
          } else if (!options.once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [elementRef, isVisible]
}



