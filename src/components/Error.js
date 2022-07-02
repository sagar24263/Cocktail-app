import React from 'react'
import {Link } from 'react-router-dom'

export default function Error() {
  return (

    <div>
      <p className="flex justify-center items-center font-bold text-3xl mt-16"> 404 page not exists </p>
          <br />
          <Link className=" focus:outline-none p-2 bg-green-800 text-white rounded-md m-4 " to="/" >back to Home</Link>

    </div>
  )
}

