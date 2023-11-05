import { Module } from '../core/module';
import { tasks, random, timer } from '../utils';
import { contextMenu } from '../app';
export class ClicksModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.clicks = 0;
		this.handleClick = this.handleClick.bind(this);
	}
	trigger(textContent) {
		if (textContent === tasks[0]) {
			// блокировка открывания меню если не выполнился модуль
			contextMenu.start = false;

			const randomInterval = random(5, 10);
			timer(randomInterval);
			
			this.messageAboutClick(randomInterval);
			document.body.addEventListener('click', this.handleClick);
			// закрываем контекстное меню
			contextMenu.close();
		}
	}
	handleClick() {
		this.clicks++;
		console.log(this.clicks);
	}
	messageAboutClick(randomInterval) {
		const time = (randomInterval + 2) * 1000;
		setTimeout(() => {
			const messageOfClick = document.createElement('div');
			messageOfClick.className = 'messageOfClick';
			messageOfClick.textContent = `Сделано ${this.clicks} кликов`;
			document.body.append(messageOfClick);
			this.clicks = 0;
			console.log('this.clicks: ', this.clicks);
			this.removeMessage(messageOfClick);
			document.body.removeEventListener('click', this.handleClick);
		}, time);
	}
	removeMessage(message) {
		setTimeout(() => {
			// удаление сообщения
			message.remove();
			// разблокировка меню
			contextMenu.start = true;
		}, 3000);
	}
}
