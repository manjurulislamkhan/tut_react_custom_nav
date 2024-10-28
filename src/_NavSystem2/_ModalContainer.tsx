import React, { useEffect } from 'react'
import _Navigator from './_Navigator'
import { GrFormClose } from "react-icons/gr";
import { MdOutlineClose } from 'react-icons/md';

interface Props {
    currentModal: React.ReactNode
}

function ModalContainer({ currentModal }: Props) {


   


    return (


        <div className='w-[90vw] sm:w-2/3 sm:h-2/3 shadow-lg flex rounded-xl absolute z-10  left-0 right-0 sm:top-20 top-0 mx-auto mt-14 sm:mt-24 bg-white p-4'>


            <div className='left-0 top-0 w-full h-full'>
                { currentModal }
            </div>

            <div className='cursor-pointer absolute right-2 top-2' onClick={ () => _Navigator.hideModal() }>
                <MdOutlineClose size={ 16 } color='#7a7a96' opacity={ 0.5 } />
            </div>


        </div>



    )

}


export default ModalContainer



{/* <div className='w-[100%] h-[100%] justify-center relative'>
<div className="flex justify-center items-center w-full h-full">
    { currentModal }
</div>
<div className='mr-0 cursor-pointer absolute right-0 top-0' onClick={ () => _Navigator.hideModal() }>
    <MdOutlineClose size={ 16 } color='#7a7a96' opacity={ 0.5 } />
</div>
</div> */}