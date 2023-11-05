import { Menu } from './core/menu';
import { tasks } from './utils';
import { backgroundModule, shapeModule } from './app';
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
		// вызов контекстного меню
		document.addEventListener('contextmenu', event => {
			event.preventDefault();
			// удаление фигуры из HTML (для модуля shape.module.js)
			if (!shapeModule.showFigure) {
				shapeModule.shape.remove();
				shapeModule.showFigure = true;
			}
			// удаление измененного фона при повторном вызове меню
			if(!backgroundModule.changeColor){
				document.body.style = 'RGD(0,0,0)'
				backgroundModule.changeColor = true

			}
			// блокировка открытия меню если модули выполняют свой функционал для
			// для timer, message, click.module.
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
			}
		});
	}
	close() {
		this.el.style.display = 'none';
	}
	add() {}
}
