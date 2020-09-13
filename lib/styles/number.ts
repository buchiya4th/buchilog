import sizes from '@/const/styles/sizes'
import breakpoints from '@/const/styles/breakpoints'

// Convert px to vw
function getVw(size: number) {
  const rate = 100 / breakpoints.phone
  return rate * size
}

// 基準の数からの倍数の算出
export default function size(multiplier: number, unit: string): string {
  const calcNum = sizes.baseNumber * multiplier;
  return unit === 'vw'
    ? getVw(calcNum) + unit
    : calcNum + unit
}
