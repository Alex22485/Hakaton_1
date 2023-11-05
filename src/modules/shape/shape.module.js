import { Module } from '../../core/module';
import { tasks } from '../../utils';
import './shape.css';
import { contextMenu } from '../../app';
import { createShapeAndMessage } from '../../utils';

export class ShapeModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.showFigure = true
		this.shape = null
	}
	trigger(textContent) {

		if (textContent === tasks[1]) {
			// createShapeAndMessage(true, false);

			// закрываем конеткстное меню
			contextMenu.close();

			// для удаления фигуры при последующем вызове меню
			// сама реализация в menu.js
			this.showFigure = false
			// запись в конструктор отображаемой фигуры и
			// создание фигуры в HTML
			this.shape = createShapeAndMessage(true, false);
		}
	}
}
