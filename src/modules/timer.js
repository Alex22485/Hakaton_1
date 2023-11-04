import {Module} from '../core/module'
import {tasks} from '../utils'
export class Timer extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(textContent) {
        if (textContent === tasks[2]){
            console.log(tasks[2]);
        }
      }
}