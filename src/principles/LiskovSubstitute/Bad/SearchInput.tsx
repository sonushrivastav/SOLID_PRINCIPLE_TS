import React from 'react';

interface ISearchInputProps
extends React.InputHTMLAttributes<HTMLInputElement>{
    isLarge?:boolean
}

const SearchInput = (props:ISearchInputProps)=> {
    const {value,onChange,isLarge, ...restProps} = props

    return(
        <div className="flex w-10/12">
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className={isLarge ? "block p-4 pl-10 w-full text-3xl" : "block p-4 pl-10 w-full"}
          placeholder="Search for the right one..."
          required
          value={value}
          onChange={onChange}
          {...restProps}
        />
      </div>
    </div>
    )
}

export default SearchInput