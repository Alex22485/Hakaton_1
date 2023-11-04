import { Module } from '../core/module';
import { tasks, MESSAGES } from '../utils';
import { random } from '../utils';
import { contextMenu } from '../app';

export class Message extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[5]) {
			let screenWidth = window.innerWidth;
			let screenHeight = window.innerHeight;
			const body = document.querySelector('body');
			const divMessage = document.createElement('div');
			divMessage.style.position = 'absolute';
			divMessage.style.top = `${random(100, screenHeight - 100)}px`;
			divMessage.style.left = `${random(100, screenWidth - 100)}px`;
			divMessage.textContent = MESSAGES[random(0, MESSAGES.length - 1)];
			body.append(divMessage);

			contextMenu.close();
		}
	}
}
