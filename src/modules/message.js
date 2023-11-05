import { Module } from '../core/module';
import { tasks, random, createShapeAndMessage } from '../utils';
import { contextMenu } from '../app';
export class Message extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[5]) {
			// блокировка открывания меню если не выполнился модуль
			contextMenu.start = false;

			const randomInterval = random(1, 2);
			createShapeAndMessage(false, true);

			const messageRandome = document.querySelector('.messageRandome');
			this.removeMessage(randomInterval, messageRandome);
			// закрываем контекстное меню
			contextMenu.close();
		}
	}
	removeMessage(randomInterval, divMessage) {
		const time = randomInterval * 1000;
		setTimeout(() => {
			divMessage.remove();
			// разблокировка меню
			contextMenu.start = true;
		}, time);
	}
}
