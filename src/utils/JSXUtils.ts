import { createElement as originalCreateElement } from "jsx-dom";

export function createElement(tag: any, attr: any, ...children: any[]){
    attr = attr || {};

    if(typeof tag === "string" && tag.indexOf("ko-") == 0){
        let binding = tag.substr("ko-".length);
        let fragment = document.createDocumentFragment();
        fragment.appendChild(document.createComment("ko " + binding + ": " + attr["data-bind"]));
        for(let child of children)
            fragment.appendChild(child);
        fragment.appendChild(document.createComment("/ko"));
        return fragment;
        
    }

    return originalCreateElement(tag, attr, children);
}

declare global{
    namespace JSX{
        interface IntrinsicElements{
           [tagName: string]: any;
        }
    }
}

export * from "jsx-dom";