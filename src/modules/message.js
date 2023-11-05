import { Module } from '../core/module';
import { tasks, MESSAGES } from '../utils';
import { random } from '../utils';
import { timer } from '../utils'
import { contextMenu } from '../app';

export class Message extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[5]) {
			// блокировка открывания меню если не выполнился модуль
			contextMenu.start = false
			const randomInterval = random(1,2)
			timer(randomInterval)
			let screenWidth = window.innerWidth;
			let screenHeight = window.innerHeight;
			const body = document.querySelector('body');
			const divMessage = document.createElement('div');
			divMessage.className = 'messageRandome'
			divMessage.style.position = 'absolute';
			divMessage.style.top = `${random(150, screenHeight - 150)}px`;
			divMessage.style.left = `${random(200, screenWidth - 200)}px`;
			divMessage.textContent = MESSAGES[random(0, MESSAGES.length - 1)];
			body.append(divMessage);

			this.removeMessage(randomInterval,divMessage)

			contextMenu.close();
		}
	}
	removeMessage(randomInterval,divMessage){
		const time = (randomInterval + 2)* 1000
		setTimeout(() => {
			divMessage.remove()
			// разблокировка меню
			contextMenu.start = true
		}, time)

	}
}
