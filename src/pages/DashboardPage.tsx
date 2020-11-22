import * as ko from "knockout";
import * as React from "../utils/JSXUtils";
export class Dashboard{
    
    Name: ko.Observable<string> = ko.observable("");

}

ko.components.register("dashboard", {
    viewModel:{
        createViewModel: (params : any, componentInfo: ko.components.ComponentInfo) => {
            let vm = new Dashboard();
            
            ko.virtualElements.setDomNodeChildren(componentInfo.element, [
            
                <>
                <div class="container-fluid">
                    <div class="row mt-3">
                        <h3>My name is: </h3><h3 data-bind="text: Name"></h3>
                    </div>
                    <input type="text" class="form-control mt-3 mb-3" placeholder="Enter Name" data-bind="value: Name"></input>
                </div>
                
                </>
            
            ]);
            
            return vm;
        }
    },
    template: []
})