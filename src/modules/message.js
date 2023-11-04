import {Module} from '../core/module'
import {tasks} from '../utils'
export class Message extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(textContent) {
        if (textContent === tasks[5]){
            console.log(tasks[5]);
        }
      }
}