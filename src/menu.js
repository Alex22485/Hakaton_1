import { Menu } from './core/menu';
import { tasks } from './utils';
import { shapeModule } from './app';

export class ContextMenu extends Menu {
	constructor(el) {
		super(el);
		this.start = true;
	}

	open() {
		document.addEventListener('contextmenu', event => {
			event.preventDefault();

			// удаление фигуры из HTML
			if (!shapeModule.showFigure) {
				shapeModule.shape.remove();
				shapeModule.showFigure = true;
			}

			// блокировка открытия меню если модуль не
			if (this.start) {
				this.el.textContent = '';
				this.el.style.position = 'fixed';
				this.el.style.left = event.clientX + 'px';
				this.el.style.top = event.clientY + 'px';

				tasks.forEach(task => {
					const li = document.createElement('li');
					li.classList = 'menu-item';
					li.textContent = task;
					this.el.append(li);
				});
				this.el.style.display = 'inline';
			}
		});
	}
	close() {
		this.el.style.display = 'none';
	}
	add() {}
}
