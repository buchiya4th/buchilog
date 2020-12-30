interface Breakpoints {
  phone: number
  phoneLarge: number
  tablet: number
  laptop: number
  desktop: number
  [key: string]: number
}

const breakpoints = {
  phone: 375,
  phoneLarge: 667,
  tablet: 768,
  laptop: 1024,
  desktop: 1281,
} as Breakpoints

export default breakpoints
