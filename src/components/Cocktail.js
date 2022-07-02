import React from 'react'
import {useGlobalContext} from '../Context'
import Loading from './Loading'
import Cocktails from'./Cocktails'

export default function Cocktail() {

   const{cocktails,loading}=useGlobalContext();
//console.log(cocktails);
    if(loading){
 return(
     <>
     <Loading/>
     </>
 )

    }
    if(cocktails.length<1){
       return(
     <h1 className=" text-2xl mt-16 items-center font-bold " >No items match your search </h1>
       )
    }
  return (

     <>
      <section className ="flex flex-wrap justify-canter items-center ">
      {
                cocktails.map((item)=>{

                  return <Cocktails key={item.id} {...item} />

                })

          }
           
      </section>

    
    </>

  )
}
