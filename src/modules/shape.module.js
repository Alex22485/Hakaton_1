import {Module} from '../core/module'
import {tasks} from '../utils'
export class ShapeModule extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(textContent) {
        if (textContent === tasks[1]){
            console.log(tasks[1]);
        }
      }
}