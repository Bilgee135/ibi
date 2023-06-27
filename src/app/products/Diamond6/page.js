'use client'

import React from 'react'
import Layout from '../layouts/layout'
import Text from './text'

import unfilteredDetails from '../main.json'

export default function Page() {
  //SQL Query: details = SELECT * FROM (table_name) WHERE ID=0;
  let id = 0
  let details
  unfilteredDetails.map(function (curlylist) {
    if (curlylist["id"] === id) {
      details = curlylist
    }
  })
  return (
    <div><Layout data={ details } Text={ Text } /></div>
  )
}
