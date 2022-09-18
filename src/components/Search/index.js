import {
    SearchBox,
    Input
}from './style'
import Image from 'next/image'
import { React, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BiSearchAlt2 } from "react-icons/bi";

function Search() {
  const [pokemon , setPokemon] = useState('')
  const nameInputRef = useRef()


  useEffect(()=>{
    nameInputRef.current.focus();
  },[])

  function onChange(e){
    setPokemon(e.target.value)
  }

  
  return (
    <SearchBox >
        <Input  type="text" onChange={onChange} ref={nameInputRef} />
        <Link href={`${pokemon?"/result/" + pokemon: "/"}`}>
        <BiSearchAlt2 />

        </Link>
        
    </SearchBox>
  )
}

export default Search