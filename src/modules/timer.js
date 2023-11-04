import { Module } from '../core/module';
import { tasks } from '../utils';
import { timer } from '../utils'
import {contextMenu} from '../app'
export class Timer extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[2]) {
			contextMenu.close()
			console.log(tasks[2]);
			// закрываем контекстное меню
			
			const enterTime = prompt(`Введите количество секунд от 5 до 30:`);

            if (enterTime >= 5 && enterTime <= 30) {
                const secondForTimer = Number(enterTime)
                timer(secondForTimer)

            } else {

                alert('Введите количество секунд указанного интервала!')

            }
		}

	}
}
