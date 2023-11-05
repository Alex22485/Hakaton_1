import { Module } from '../core/module';
import { tasks } from '../utils';
import { random } from '../utils';
import { contextMenu } from '../app';
import { createShapeAndMessage } from '../utils';

export class Message extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[5]) {
			// блокировка открывания меню если не выполнился модуль
			contextMenu.start = false;

			const randomInterval = random(1,2);
			createShapeAndMessage(false, true);

			const messageRandome = document.querySelector('.messageRandome');
			this.removeMessage(randomInterval, messageRandome);

			contextMenu.close();
		};
	};
	removeMessage(randomInterval,divMessage) {
		const time = (randomInterval)* 1000;
		setTimeout(() => {
			divMessage.remove();
			// разблокировка меню
			contextMenu.start = true;
		}, time);

	};
};
