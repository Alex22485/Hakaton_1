import {Module} from '../../core/module'
import {displayTimer, tasks} from '../../utils'
import {timer} from '../../utils';
import {timerToHTML} from './timer-display';
import './timer.css';
// import {createModalOverlayTimer} from './modal/modal';
// import './modal/modal.css';

export class Timer extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(textContent) {
        if (textContent === tasks[2]){
            console.log(tasks[2]);
            const enterTime = prompt(`Введите количество секунд от 5 до 30:`);

            if (enterTime >= 5 && enterTime <= 30) {

                document.body.append(timerToHTML(timer(15)))

            } else {

                alert('Введите количество секунд указанного интервала!')

            }
        }
    }
}