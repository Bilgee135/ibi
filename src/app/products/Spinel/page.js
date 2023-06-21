'use client'

import React from 'react'
import Layout from '../layouts/layout'
import details from './bureldeh'
import Text from './text'

export default function Page() {
  return (
    <div><Layout data={ details } Text={ Text } /></div>
  )
}
