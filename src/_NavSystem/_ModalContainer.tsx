import React from 'react'
import _Navigator from './_Navigator'
import { GrFormClose } from "react-icons/gr";
import Spacer from '../tailwind_components/Spacer';
import { MdOutlineClose } from 'react-icons/md';

interface Props {
    currentModal: React.ReactNode
}

function ModalContainer({ currentModal }: Props) {



    return (

        <div className='shadow-lg flex rounded-xl w-min h-min absolute z-10  left-0 right-0 sm:top-20 top-8 bottom-0  mx-auto mt-20 sm: mt-30 bg-slate-800'>

            <div className='w-[100%] h-[100%] justify-center relative'>
                {currentModal}
                <div className='mr-0 cursor-pointer absolute right-0 top-0' onClick={() => _Navigator.hideModal()}>
                    <MdOutlineClose size={25} color='#7a7a96' />
                </div>
            </div>







        </div>)

}


export default ModalContainer