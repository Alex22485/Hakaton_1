import { Module } from '../core/module';
import { tasks, timer } from '../utils';
import { contextMenu } from '../app';
export class Timer extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[2]) {
			// блокировка открывания меню если не выполнился модуль
			contextMenu.start = false;
			contextMenu.close();

			const body = document.querySelector('body');
			const modal = document.createElement('form');
			modal.classList = 'timerModal';
			const input = document.createElement('input');
			input.classList = 'timerInput';
			const btn = document.createElement('button');
			btn.classList = 'timerBtn';
			btn.type = 'submit';
			btn.textContent = 'Submit';
			const descr = document.createElement('div');
			descr.classList = 'descr';
			descr.textContent = 'Введите количество секунд от 5 до 30:';
			body.append(modal);
			modal.append(descr, input, btn);

			modal.addEventListener('submit', event => {
				event.preventDefault();
				let enterTime = input.value;
				console.log(enterTime);
				if (enterTime >= 5 && enterTime <= 30) {
					modal.remove();
					const secondForTimer = Number(enterTime);
					timer(secondForTimer);
					this.message(secondForTimer);
				} else {
					alert('Введите количество секунд указанного интервала!');
				}
			});
		}
	}
	message(enterTime) {
		const time = (enterTime + 2) * 1000;
		const messageTimer = document.createElement('div');
		messageTimer.className = 'messageTimer';
		messageTimer.textContent = 'Время вышло !';
		setTimeout(() => {
			document.body.append(messageTimer);
			this.removeMessage(messageTimer);
		}, time);
	}
	removeMessage(message) {
		setTimeout(() => {
			// удаление сообщения
			message.remove();
			// разблокировка меню
			contextMenu.start = true;
		}, 1000);
	}
}
