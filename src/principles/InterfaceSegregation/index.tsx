import React from 'react'
import Good from './Good';
import Bad from './Bad';

const isGoodApproach = true; 
const ISP = () => {
  return (
    <div>
        <h1>Interface Segregation Principle Example</h1>
      {isGoodApproach ? <Good /> : <Bad />}
    </div>
  )
}

export default ISP