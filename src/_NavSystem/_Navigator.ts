import { BehaviorSubject} from 'rxjs';

//This is a singleton accessible by any screen
class _Navigator {


    static currentScreen$ = new BehaviorSubject("MainScreen");
    static currentParams: any;
    static currentModal$ = new BehaviorSubject("") 

    // for going back functionality 
    static screensHistory = ["MainScreen"];
    static paramsHistory = [null];


    static navigate(screen: string, params?: any,) {

        // important
        this.currentParams = params;
        this.currentScreen$.next(screen);

        // for back press
        this.screensHistory.unshift(screen); // not necessary unless you implement back press
        this.paramsHistory.unshift(params)
       
    }

    

    static goBack() {
        this.screensHistory.shift();
        this.paramsHistory.shift();

        const newScreen = this.screensHistory[0];
        const params = this.paramsHistory[0];
        
        if (params) {
            this.currentParams = params;    
           }
  
        if (!this.screensHistory.includes(newScreen)) {
            this.paramsHistory = []
            this.screensHistory = ["Home"]
            this.currentScreen$.next("Home");
            return;
        }

        this.currentScreen$.next(newScreen);
    }

    static showModal(modal:string, params?: any) {
        this.currentParams = params
        this.currentModal$.next(modal)

        console.log("show modal..")


    }

    static hideModal() {
        this.currentModal$.next("") 

    }
   



}


export default _Navigator