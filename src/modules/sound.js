import {Module} from '../core/module'
import {tasks} from '../utils'
export class Sound extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(textContent) {
        if (textContent === tasks[3]){
            console.log(tasks[3]);
        }
      }
}