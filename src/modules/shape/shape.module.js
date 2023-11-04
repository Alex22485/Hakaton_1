import { Module } from '../../core/module';
import { tasks, random } from '../../utils';
import './shape.css';
import { contextMenu } from '../../app';
import { getRandonColor } from '../../utils';

export class ShapeModule extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[1]) {
			let screenWidth = window.innerWidth;
			let screenHeight = window.innerHeight;
			const body = document.querySelector('body');
			const shape = document.createElement('div');
			shape.classList = `shape${random(0, 43)}`;
			shape.position = 'absolute';
			shape.style.top = `${random(100, screenHeight - 100)}px`;
			shape.style.left = `${random(100, screenWidth - 100)}px`;
			body.append(shape);
			// закрываем конеткстное меню
			contextMenu.close();
		}
	}
}
