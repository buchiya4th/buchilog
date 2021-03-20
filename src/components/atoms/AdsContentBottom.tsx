import React from 'react'

const AdsContentBottom: React.FC = () => {
  return (
    <>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7461708163833457"
        data-ad-slot="8843948483"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              (adsbygoogle = window.adsbygoogle || []).push({})
            }, 5000)
          `
        }}
      />
    </>
  )
}

export default AdsContentBottom