import MainScreen from "../screens/MainScreen"
import ModalA from "../screens/ModalA"
import ScreenA from "../screens/ScreenA"
import ScreenWithParams from "../screens/ScreenWithParams"






export const ComponentMap: any = {
  
    "": () => null,
    "MainScreen": () => <MainScreen />,
    "ScreenA": () => <ScreenA />,
    "ScreenWithParams": (message:string) => <ScreenWithParams message={message} />,
    "ModalA": () => <ModalA />
}

export default ComponentMap

