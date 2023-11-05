import { Module } from '../../core/module';
import { tasks, random } from '../../utils';
import './shape.css';
import { contextMenu } from '../../app';
import { getRandonColor } from '../../utils';
import { createShapeAndMessage } from '../../utils';

export class ShapeModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.showFigure = true
		this.shape = null
	}
	trigger(textContent) {

		if (textContent === tasks[1]) {
			createShapeAndMessage(true, false);

			// закрываем конеткстное меню
			contextMenu.close();

			// для удаления фигуры при последующем вызове меню
			// сама реализация в menu.js
			this.showFigure = false
			this.shape = shape
		}
	}
	// sendShapeHtmlToMenuJs(shape){
	// 	return shape

	// }
}
