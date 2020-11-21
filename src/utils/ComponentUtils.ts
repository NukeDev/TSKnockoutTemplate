import * as ko from "knockout";

export type Param<T> = T | ko.Observable<T> | ko.Computed<T> | (() => T) | undefined;
export type ParamArray<T> = T[] | ko.ObservableArray<T> | ko.Computed<T[]> | (() => T[]) | undefined;

export type ComponentParam<T> = ko.Observable<T> | ko.Computed<T> | ko.PureComputed<T>;
export type ComponentParamArray<T> = ko.ObservableArray<T> | ko.Computed<T[]> | ko.PureComputed<T[]>;

export class ComponentUtils{
    static parseParameter<T>(value: Param<T>, defaultValue: T) : ComponentParam<T> {
        if(value == null || value == undefined)
            return ko.observable(defaultValue);        
        if(ko.isComputed(value))
            return value;
        if(ko.isObservable(value))
            return value;
        if(typeof value === "function")
            return ko.pureComputed(value as (() => T));
        return ko.observable(value);
    }   

    static parseParameterArray<T>(value: ParamArray<T>, defaultValue: T[]) : ComponentParamArray<T> {
        if(value == null || value == undefined)
            return ko.observableArray(defaultValue);        
        if(ko.isComputed(value))
            return value;
        if(ko.isObservable(value))
            return value;
        if(typeof value === "function")
            return ko.pureComputed(value as (() => T[]));
        return ko.observableArray(value);
    }

    static uniqueIdGenerator() : string {
        return "_" + Math.random().toString(36).substr(2, 9);
    }
}