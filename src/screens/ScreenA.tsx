import React, { ChangeEvent, useState } from 'react'
import _Navigator from '../_NavSystem/_Navigator'


function ScreenA() {




    function onClick() {
        _Navigator.goBack();
    }

    function onClickShowModal() {
        _Navigator.showModal("ModalA")
    }



    return (

        <div className='w-full h-screen  bg-gradient-radial from-purple-600 to-purple-400 pl-40'>
            <h1 className="text-left w-full mt-20 text-3xl font-bold"> Screen A</h1>

            <div className='flex gap-4 mt-10'>
                <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => onClick()}>Go back</button>

                <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => onClickShowModal()}>Show Modal</button>

            </div>

        </div>


    )
}


export default ScreenA