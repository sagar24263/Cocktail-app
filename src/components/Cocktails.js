import React from 'react'
import {Link} from 'react-router-dom'
export default function Cocktails(item) {
  return (
   <div >
   
   <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg">
        <img className="w-full" src={item.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
         
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.Alcholic}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.glass}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ item.category}</span>
          <Link to={`/cocktail/${item.id}`} className="inline-block bg-green-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Details</Link>

        </div>
      </div>
   </div>
  )
}
