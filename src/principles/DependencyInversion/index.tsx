import React from 'react'
import Good from './Good';
import Bad from './Bad';

const isGoodApproach = false;

const DIP = () => {
  return (
    <div>
        <h1>Dependency Inversion Principle Example</h1>
      {isGoodApproach ? <Good /> : <Bad />}
    </div>
  )
}

export default DIP