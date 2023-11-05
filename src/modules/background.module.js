import { Module } from '../core/module';
import { tasks } from '../utils';
import { getRandonColor } from '../utils';
import { contextMenu } from '../app';
export class BackgroundModule extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[4]) {
			document.body.style.background = getRandonColor();
			// закрываем контекстное меню
			contextMenu.close();
		}
	}
}
