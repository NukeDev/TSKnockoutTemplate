import * as ko from "knockout";
import * as React from "../utils/JSXUtils";


export interface IData{
    Title: string;
    Color: string;
    Value: number;
    HasProgress: boolean;
    Icon: string;
}

export class Dashboard{
    
    Exams: ko.ObservableArray<any> = ko.observableArray([
        {
            Title: "Sistemi Operativi",
            Date: "18/06/2020",
            Subscribed: true
        },
        {
            Title: "Ricerca Operativa",
            Date: "30/06/2020",
            Subscribed: false
        },
        {
            Title: "Basi di dati",
            Date: "31/06/2020",
            Subscribed: true
        }
    ])

    MyCards: IData[] = [
        {
            Title: "Links",
            Color: "primary",
            Value: 15,
            Icon: "fas fa-check",
            HasProgress: true
        },
        {
            Title: "Malicious Clicks",
            Color: "warning",
            Value: 55,
            Icon: "fas fa-check",
            HasProgress: false
        },
        {
            Title: "New Clicks",
            Color: "success",
            Value: 50,
            Icon: "fas fa-check",
            HasProgress: true
        }
    ]

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