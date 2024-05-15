import React, { useState } from 'react'
import SearchInput from './SearchInput'
const Good = () => {
    const [value,setValue] = useState("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
  return (
    <SearchInput value={value} onChange={handleChange} isLarge />
  )
}

export default Good