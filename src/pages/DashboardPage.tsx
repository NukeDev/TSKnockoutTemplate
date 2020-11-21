import * as ko from "knockout";
import * as React from "../utils/JSXUtils";
export class Dashboard{
    
  
}

ko.components.register("dashboard", {
    viewModel:{
        createViewModel: (params : any, componentInfo: ko.components.ComponentInfo) => {
            let vm = new Dashboard();
            
            ko.virtualElements.setDomNodeChildren(componentInfo.element, [
                <>
                    
                </>
            ]);
            
            return vm;
        }
    },
    template: []
})