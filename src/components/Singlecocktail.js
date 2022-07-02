import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

export default function Singlecocktail() {
  const {id}=useParams();
  
const [cocktail, setcocktail] = useState(null)
 const [loading, setloading] = useState(false)

useEffect(() => {
  setloading(true);
   async function fetchdrink() {
    try {
      const response=await fetch(`${url}${id}`)
      const data=await response.json();
       if(data.drinks){
         const{strDrink:name,strDrinkThumb:image,strAlcoholic:alchol, strInstructions:instructions, strCategory:category,strGlass:glass,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}=data.drinks[0]
         const indegredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
         const newcocktail={
 name,image,alchol,category,glass,indegredients,instructions


         }
         setcocktail(newcocktail);
       } 

       else{
setcocktail([]);
       }

       setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  } 

 fetchdrink()

}, [id])

if(loading)
{
  return <Loading/>
}
if(!cocktail){

  return(
    <>
    <h2>No info to display </h2>
    </>
  )
}
  return (
    <>
        
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={cocktail.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-6xl font-bold title-font text-gray-800 tracking-widest mb-6">{cocktail.name}</h2>
              
              <h2 className="text-2xl font-semibold m-2   text-green-600" >Indegredients:</h2>
              <ul className="list-none">
                  
                  {
                    cocktail.indegredients.map((item)=>{
                               
                               return(
                                 < >
                                 <li>{item}</li>
                                 
 
                                 </>
 
                               )
 
                     })
                  }
                 </ul>
                 <br />
                 <h2 className="text-2xl font-semibold m-2 text-green-600" >Instructions:</h2>

              <p className="leading-relaxed">{cocktail.instructions}</p>
              <span className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></span>
              <div className="flex">
                <span className="title-font font-medium text-xl  px-4 py-2 bg-green-500 rounded-md shadow-lg text-white mx-2">{cocktail.alchol}</span>
                <span className="title-font font-medium text-xl px-4 py-2 bg-red-500  rounded-md shadow-lg text-white mx-2">{cocktail.glass}</span>
                <span className="title-font font-medium text-xl px-4  py-2 bg-blue-500  rounded-md shadow-lg text-white mx-2">{cocktail.category}</span>
              
              </div>
            </div>
          </div>
      </section>

    </>
  )
}
