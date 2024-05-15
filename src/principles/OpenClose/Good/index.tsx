import React from 'react'
import Button from '../Button'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
  

const Good = () => {
  return (
    <div className="text-center">
      <h2>Good Approach</h2>
      <div className="flex mt-4 gap-3">
      <Button text="Back" icon={<HiOutlineArrowNarrowLeft />} />
      <Button text="Forward" icon={<HiOutlineArrowNarrowRight />} />
      </div>
    </div>
  )
}

export default Good