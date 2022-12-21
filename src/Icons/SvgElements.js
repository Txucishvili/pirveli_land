import React from 'react'
import { BirdBigger, BirdBottom, BirdPath, BirdTop } from './Birds'

export default function SvgElements() {
  return (
    <svg width={0} height={0}>
      <svg width={0} height={0}>
        <BirdPath />
      </svg>
      <svg visibility={'hidden'} width={0} height={0}>
        <BirdTop />
        <BirdBottom />
        <BirdBigger />
      </svg>
    </svg>
  )
}
