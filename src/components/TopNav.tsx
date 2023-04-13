import React from 'react'
import _Navigator from '../_NavSystem/_Navigator'


function TopNav() {


    function onClickScreenA() {
        _Navigator.navigate("ScreenA")
    }

    function onClickScreenB() {
        _Navigator.navigate("ScreenWithParams")
    }

    function onClickScreenMain() {
        _Navigator.navigate("MainScreen")
    }





    return (

        <div className='w-full h-20 bg-slate-50'>
            <div className='px-20 flex justify-between h-full'>
                <button className='text-sm font-medium text-slate-700' onClick={onClickScreenMain}> My Cool Logo</button>

                <div className='flex gap-4'>

                    <button className='text-xs text-slate-700' onClick={onClickScreenMain}> Main Screen</button>
                    <button className='text-xs text-slate-700' onClick={onClickScreenA}> Screen A</button>
                    <button className='text-xs text-slate-700' onClick={onClickScreenB}> Screen B</button>


                </div>
            </div>
        </div>
    )
}


export default TopNav