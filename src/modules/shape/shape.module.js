import './shape.css';
import { Module } from '../../core/module';
import { tasks, createShapeAndMessage } from '../../utils';
import { contextMenu } from '../../app';
export class ShapeModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.showFigure = true;
		this.shape = null;
	}
	trigger(textContent) {
		if (textContent === tasks[1]) {
			// закрываем конеткстное меню
			contextMenu.close();

			// для удаления фигуры при последующем вызове меню
			// сама реализация в menu.js
			this.showFigure = false;

			// запись в конструктор отображаемой фигуры и
			// создание фигуры в HTML
			this.shape = createShapeAndMessage(true, false);
		}
	}
}
