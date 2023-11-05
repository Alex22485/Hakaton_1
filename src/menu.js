import { Menu } from './core/menu';
import { tasks } from './utils';
import { shapeModule } from './app';

export class ContextMenu extends Menu {
	constructor(el) {
		super(el);
		this.start = true;
	}

	open() {
		const screenWidth =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;
		const screenHeight =
			window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight;
		document.addEventListener('contextmenu', event => {
			event.preventDefault();

			// удаление фигуры из HTML
			if (!shapeModule.showFigure) {
				shapeModule.shape.remove();
				shapeModule.showFigure = true;
			}

			// блокировка открытия меню если модуль не
			if (this.start) {
				const clickX = event.clientX;
				const clickY = event.clientY;
				this.el.textContent = '';
				tasks.forEach(task => {
					const li = document.createElement('li');
					li.classList = 'menu-item';
					li.textContent = task;
					this.el.append(li);
				});
				this.el.style.display = 'inline';
				const menuWidth = this.el.offsetWidth;
				const menuHeight = this.el.offsetHeight;
				this.el.style.position = 'fixed';

				if (clickX + menuWidth > screenWidth) {
					this.el.style.left = clickX - menuWidth + 'px';
				} else {
					this.el.style.left = clickX + 'px';
				}

				if (clickY + menuHeight > screenHeight) {
					this.el.style.top = clickY - menuHeight + 'px';
				} else {
					this.el.style.top = clickY + 'px';
				}
				// console.log(menuWidth, meniHeight);
			}
		});
	}
	close() {
		this.el.style.display = 'none';
	}
	add() {}
}
