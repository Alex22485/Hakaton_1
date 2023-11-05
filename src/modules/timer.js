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
			// блокировка открывания меню если не выполнился модуль
			contextMenu.start = false
			
			contextMenu.close()
			console.log(tasks[2]);
			// закрываем контекстное меню
			
			const enterTime = prompt(`Введите количество секунд от 5 до 30:`);

            if (enterTime >= 5 && enterTime <= 30) {
                const secondForTimer = Number(enterTime)
                timer(secondForTimer)
				this.message(secondForTimer)
            } else {
				alert('Введите количество секунд указанного интервала!')
            }
		}
	}
	message(enterTime){
		const time = (enterTime + 2)* 1000
		const messageTimer = document.createElement('div')
		messageTimer.className = 'messageTimer'
		messageTimer.textContent = 'Время вышло !'
		setTimeout(() => {
			document.body.append(messageTimer)
			this.removeMessage(messageTimer)
		}, time)
	}
	removeMessage(message){
		setTimeout(() => {
			// удаление сообщения
			message.remove()
			// разблокировка меню
			contextMenu.start = true
		}, 1000)
		
	}
}
