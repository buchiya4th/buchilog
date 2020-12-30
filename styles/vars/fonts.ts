import { css } from '@emotion/core'

const font = {
  basic: '"Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", sansServiceUIFrameContext',
  sansSerif: 'sansServiceUIFrameContext',
  serif: 'ServiceUIFrameContext',
  yugo: '"游ゴシック体", "YuGothic", "游ゴシック Medium", "Yu Gothic Medium", ServiceUIFrameContext',
  yumin: '"游明朝体", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", "Noto Serif SC"',
}

export const fontFamily = {
  base: `${font.yugo}, ${font.sansSerif}`,
  heading: `${font.yumin}, ${font.sansSerif}`,
  yumin: `${font.yumin}, ${font.serif}`,
}

export const fontBaseNormal = css({
  fontFamily: fontFamily.base,
  fontWeight: 'normal',
  fontStyle: 'normal',
})

export const fontBaseBold = css({
  fontFamily: fontFamily.base,
  fontWeight: 700,
  fontStyle: 'normal',
})

export const fontBaseNormalItalic = css({
  fontFamily: fontFamily.base,
  fontWeight: 'normal',
  fontStyle: 'italic',
})

export const fontBaseBoldItalic = css({
  fontFamily: fontFamily.base,
  fontWeight: 600,
  fontStyle: 'italic',
})

export const fontHeadingNormal = css({
  fontFamily: fontFamily.heading,
  fontWeight: 'normal',
  fontStyle: 'normal',
})

export const fontHeading = css({
  fontFamily: fontFamily.heading,
  fontWeight: 700,
  fontStyle: 'normal',
})
