import React from 'react'


function ModalA() {


    return (

    <div className='w-[60vw] h-[50vh] bg-gradient-radial from-lime-400 to-lime-300 rounded-lg shadow-lg p-10'>
        <h1 className='text-center text-2xl font-semibold'> Modal A</h1>
        <p className="w-full text-center mt-10"> Hello! I am a modal! I can also take 
        in params just like a screen and you can pass in any component here as long as you have defined it in the Component Map! </p>
            
    </div>
 )}


export default ModalA