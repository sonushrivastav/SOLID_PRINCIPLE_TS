import React, { useState } from 'react'
import SearchInput from './SearchInput';

const Bad = () => {
    const [value,setValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };
  return (
    <div>
        <SearchInput value={value} onChange={handleChange} isLarge/>
    </div>
  )
}

export default Bad