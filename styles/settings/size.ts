import breakpoints from '@/styles/vars/breakpoints'

const BASE_NUMBER = 8

// Convert px to vw
function getVw(size: number) {
  const rate = 100 / breakpoints.phone
  return rate * size
}

// 基準の数からの倍数の算出
export default function size(multiplier: number, getUnit?: string): string {
  const unit = getUnit ? getUnit : 'px'
  const calcNum = BASE_NUMBER * multiplier;
  return unit === 'vw'
    ? getVw(calcNum) + unit
    : calcNum + unit
}
