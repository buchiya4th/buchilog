import React from 'react'
import NotFoundPage from '@/app/_components/templates/NotFoundPage'

export default function NotFound(): JSX.Element {
  console.error('404 not found')

  return (
    <NotFoundPage />
  )
}
