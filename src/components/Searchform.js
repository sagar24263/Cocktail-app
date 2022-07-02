import {React,useRef,useEffect} from 'react'
import {useGlobalContext} from '../Context'


export default function Searchform() {
    const { setSearchTerm} = useGlobalContext();

    const searchvalue=useRef('');      
const search=()=>{

  setSearchTerm(searchvalue.current.value);
}    
useEffect(()=>{

  searchvalue.current.focus();
},[])
  return (
    <div className="search my-4">


      <form action="" onSubmit={(e)=>{e.preventDefault()}}>

        <input type="text"  className=" px-8 py-4 border border-red my-4 shadow-md bg-gray-200 rounded-md focus:outline-none" ref={searchvalue} placeholder="Search for your cocktail " 
        onChange={search}
        />

      </form>
    </div>
  )
}


