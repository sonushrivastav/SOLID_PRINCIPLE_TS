import React from 'react'
import Bad from "./Bad"
import Good from './Good'

const isGoodapproach = false
const OCP = () => {
  return (
    <div className="text-center">
    <h1>Open/Closed Principle Example</h1>
    {isGoodapproach ? <Good /> : <Bad />}
    </div>

  )
}

export default OCP