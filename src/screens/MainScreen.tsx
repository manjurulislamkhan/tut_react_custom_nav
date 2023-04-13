import React, { useState } from 'react'
import _Navigator from '../_NavSystem/_Navigator'


function MainScreen() {

    const [message, setMessage] = useState('');


    function onClickScreenA() {
        _Navigator.navigate("ScreenA")
    }

    function onClickScreenWithParams() {
        _Navigator.navigate("ScreenWithParams", message)
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.currentTarget.value)
    }



    return (

        <div className='m-0 w-full h-screen  bg-gradient-radial from-orange-600 to-orange-400 pl-40'>

            <h1 className="text-left w-full mt-20 text-3xl font-bold"> Main Screen</h1>

            <form onSubmit={onClickScreenWithParams} className="mt-10 space-y-4 w-96">
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                <input type="text" id="title" value={message} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Type.." required />
              </div>
             
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>

           
        </div>
    )
}


export default MainScreen