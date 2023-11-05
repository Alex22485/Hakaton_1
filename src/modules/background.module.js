import { Module } from '../core/module';
import { tasks, getRandonColor } from '../utils';
import { contextMenu } from '../app';
export class BackgroundModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.changeColor = true
	}
	trigger(textContent) {
		if (textContent === tasks[4]) {
			document.body.style.background = getRandonColor();
			// закрываем контекстное меню
			contextMenu.close();
			// для удаления цвета фона при повторном вызове меню
			// сама реализация в menu.js
			this.changeColor = false
		}
	}
}
