import React from 'react'
import NotFount from '@/app/_components/templates/NotFount'

export default function NotFound(): JSX.Element {
  console.error('404 not found')

  return (
    <NotFount />
  )
}
