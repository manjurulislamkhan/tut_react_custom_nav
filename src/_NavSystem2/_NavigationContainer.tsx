import { useEffect, useState } from 'react';

import MyNavigator from './_Navigator';
import { ComponentMap } from './_ComponentMap';
import ModalContainer from './_ModalContainer';
import MainScreen from '../screens/MainScreen';
import TopNav from '../components/TopNav';





export default function _NavigationContainer() {


    const [currentScreen, setCurrentScreen] = useState<React.ReactNode>();
    const [currentModal, setCurrentModal] = useState<React.ReactNode>();


    useEffect(() => {


        const subsScreen = subscribeForScreen()
        const subsModal = subscribeForModal()


        return () => {

            subsScreen.unsubscribe()
            subsModal.unsubscribe();
        };
    }, []);


    function subscribeForScreen() {



        return MyNavigator.currentScreen$.subscribe(screen => {

            let newScreen = ComponentMap[screen]({...MyNavigator.currentParams})
            setCurrentScreen(newScreen);

        });
    }

    function subscribeForModal() {
        return MyNavigator.currentModal$.subscribe(modal => {
            const newModal = ComponentMap[modal]({...MyNavigator.currentParams})
            setCurrentModal(newModal)
        })
    }




    return (
        <>
            {currentModal ? <ModalContainer currentModal={currentModal} /> : null}

            <div className='flex flex-col'>
                <TopNav />
                {currentScreen}
            </div>





        </>
    );
}


