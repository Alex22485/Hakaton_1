import { Module } from '../../core/module';
import { tasks, random } from '../../utils';
import './shape.css';
import { contextMenu } from '../../app';

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
			shape.style.position = 'absolute';
			shape.style.top = `${random(150, screenHeight - 150)}px`;
			shape.style.left = `${random(200, screenWidth - 200)}px`;
			body.append(shape);
			// закрываем конеткстное меню
			contextMenu.close();
		}
	}
}
