export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// IDが取得できない場合を想定する
export const existsGaId = GA_TRACKING_ID !== ''

interface Window {
  gtag: any
}
declare const window: Window

// PVを測定する
export const pageview = (url: URL): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: string
}

// GAイベントを発火させる
export const event = ({action, category, label, value}: GTagEvent): void => {
  if (!existsGaId) return

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value
  })
}
