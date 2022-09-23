import {
    SearchBox,
    Input
}from './style'
import { React, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BiSearchAlt2 } from "react-icons/bi";

function Search() {
  const [search , setSearch] = useState('')
  const nameInputRef = useRef()


  useEffect(()=>{
    nameInputRef.current.focus();
  },[])

  function onChange(e){
    setSearch(e.target.value)
  }

  
  return (
    <SearchBox >
        <Input  type="text" onChange={onChange} ref={nameInputRef} />
        <Link href={`${search?"/result/" + search: "/"}`}>
        <BiSearchAlt2 />

        </Link>
        
    </SearchBox>
  )
}

export default Search