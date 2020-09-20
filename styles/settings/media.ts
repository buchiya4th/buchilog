import breakpoints from '@/styles/vars/breakpoints'

function mediaSize(media: string, target: string | number) {
  if (typeof target === 'number') {
    return `${target}px`
  } else {
    switch (media) {
      case 'min':
        return `${breakpoints[target] + 1}px`
        break
      case 'max':
        return `${breakpoints[target]}px`
        break
    }
  }
}

// min - width
export function up(target: string | number): string {
  const value = mediaSize("min", target)
  return `@media (min-width: ${value})`
}

// max - width
export function less(target: string | number): string {
  const value = mediaSize("max", target)
  return `@media (max-width: ${value})`
}

// min-width and max-width
export function range(min: string | number, max: string | number): string {
  const minValue = mediaSize("min", min)
  const maxValue = mediaSize("max", max)
  return `@media (min-width: ${minValue}) and (max-width: ${maxValue})`
}
