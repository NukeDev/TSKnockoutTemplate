import * as ko from "knockout";
import * as React from "../utils/JSXUtils";

export class HeaderMenu{

    SiteTitle: ko.Observable<string> = ko.observable("Test");

    
}


ko.components.register("header-menu", {
    viewModel: {
        createViewModel: (params : any, componentInfo : ko.components.ComponentInfo) => {
            let vm = new HeaderMenu();
            
            ko.virtualElements.setDomNodeChildren(componentInfo.element, [
                
                <div>
                <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
                <a class="navbar-brand" href="#" data-bind="text: SiteTitle"></a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
          
                <div class="navbar-collapse collapse" id="navbarsExample06" style="">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown06" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                      <div class="dropdown-menu" aria-labelledby="dropdown06">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                  
                </div>
              </nav>
              </div>
              
            ])

            return vm;
        }
    },
    template: []
});