import {Module} from '../core/module'
import {tasks} from '../utils'
export class BackgroundModule extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(textContent) {
        if (textContent === tasks[4]){
            console.log(tasks[4]);
        }
      }
}