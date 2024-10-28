import { BehaviorSubject} from 'rxjs';
import { ComponentKeys } from './_ComponentMap';

//This is a singleton accessible by any screen
class _Navigator {


    static currentScreen$ = new BehaviorSubject(ComponentKeys.MainScreen);
    static currentParams: any;
    static currentModal$ = new BehaviorSubject(ComponentKeys.None); 

    // for going back functionality 
    static screensHistory = [ComponentKeys.MainScreen];
    static paramsHistory = [null];


    static navigate(screen: ComponentKeys, params?: any,) {

        // important
        this.currentParams = params;
        this.currentScreen$.next(screen);

        // handle browser nav
        window.history.pushState(params ? params : null, "")

        // for back press
        this.screensHistory.unshift(screen); // not necessary unless you implement back press
        this.paramsHistory.unshift(params)
       
    }

    

    static goBack() {
        this.screensHistory.shift();
        this.paramsHistory.shift();

        // handle browser back button press event

        window.history.back()

        const newScreen = this.screensHistory[0];
        const params = this.paramsHistory[0];
        
        if (params) {
            this.currentParams = params;    
           }
  
        if (!this.screensHistory.includes(newScreen)) {
            this.paramsHistory = []
            this.screensHistory = [ComponentKeys.MainScreen]
            this.currentScreen$.next(ComponentKeys.MainScreen);
            return;
        }

        this.currentScreen$.next(newScreen);
    }

    static showModal(modal: ComponentKeys, params?: any) {
        this.currentParams = params
        this.currentModal$.next(modal)

        console.log("show modal..")


    }

    static hideModal() {
        this.currentModal$.next(ComponentKeys.None) 

    }
   



}


export default _Navigator