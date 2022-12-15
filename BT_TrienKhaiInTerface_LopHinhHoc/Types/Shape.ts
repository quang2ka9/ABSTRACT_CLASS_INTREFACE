import {Resizeable} from "./Resizeable";

export class Shape implements Resizeable{
    resize(percent: number) {
    }
    name:string;
    constructor(name:string) {
        this.name=name;
    }
    show():string{
        return `I am a shape.My name is${this.name}`;
    }
}
