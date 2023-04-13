import React from 'react'
import _Navigator from '../_NavSystem/_Navigator';


interface Props {
    message: string
}

function ScreenWithParams({message}: Props) {


    function onClick() {
        _Navigator.goBack();
    }

    return (

        <div className='w-full h-screen  bg-gradient-radial from-rose-600 to-rose-400 pl-40'>
            <h1 className="text-left w-full mt-20 text-3xl font-bold"> Screen B With Params</h1>

            <p className="mt-10"> Message from main screen is <strong> {message}</strong>  </p>

            <button className="mt-20 border-2 border-slate-700 rounded-lg px-4 py-2"  onClick={() => onClick()}> Go Back </button>

        </div>
    )


}


export default ScreenWithParams