import {Module} from '../core/module'
import {tasks} from '../utils'
export class ClicksModule extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(textContent) {
        if (textContent === tasks[0]){
            console.log(tasks[0]);
        }
      }
}