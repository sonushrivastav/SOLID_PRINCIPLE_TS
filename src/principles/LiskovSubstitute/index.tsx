import React from 'react'
import Good from './Good';
import Bad from './Bad';

const isGoodApproach = true;
const LSP = () => {
  return (
    <div>
      <h1>Liskov Substitution Principle Example</h1>
      {isGoodApproach ? <Good /> : <Bad />}
    </div>
  )
}

export default LSP