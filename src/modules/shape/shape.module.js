import { Module } from '../../core/module';
import { tasks, random } from '../../utils';
import './shape.css';
import { contextMenu } from '../../app';
import { getRandonColor } from '../../utils';
import { createShapeAndMessage } from '../../utils';

export class ShapeModule extends Module {
	constructor(type, text) {
		super(type, text);
	}
	trigger(textContent) {
		if (textContent === tasks[1]) {
			createShapeAndMessage(true, false);

			// закрываем конеткстное меню
			contextMenu.close();
		}
	}
}
