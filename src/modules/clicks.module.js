import { Module } from '../core/module';
import { tasks } from '../utils';
import { random } from '../utils';
import { timer } from '../utils';
import { contextMenu } from '../app';
export class ClicksModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.clicks = 0;
	}
	trigger(textContent) {
		if (textContent === tasks[0]) {
			const randomInterval = random(5, 10);
			timer(randomInterval);
			let startClick = true;
			document.body.addEventListener('click', event => {
				if (startClick) {
					// Сообщение о количесвте кликов
					this.messageAboutClick(randomInterval);
					startClick = false;
				}
				this.clicks += 1;
				console.log('this.clicks: ', this.clicks);
			});
			// закрываем контекстное меню
			contextMenu.close();
		}
	}
	messageAboutClick(randomInterval) {
		const time = (randomInterval + 1) * 1000;
		setTimeout(() => {
			const messageOfClick = document.createElement('div');
			messageOfClick.className = 'messageOfClick';
			messageOfClick.textContent = `Сделано ${this.clicks} кликов`;
			document.body.append(messageOfClick);
			this.clicks = 0;
			console.log('this.clicks: ', this.clicks);
			this.removeMessage(messageOfClick);
		}, time);
	}
	removeMessage(message) {
		setTimeout(() => {
			// удаление сообщения
			message.remove();
		}, 4000);
	}
}
