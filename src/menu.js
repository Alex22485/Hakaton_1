import { Menu } from './core/menu';
import { tasks } from './utils';

export class ContextMenu extends Menu {
	constructor(el) {
		super(el);
	}
	open() {
		document.addEventListener('contextmenu', event => {
			this.el.textContent = '';
			console.log(event.target);
			// блокируем текстовое меню по умолчанию
			event.preventDefault();

			tasks.forEach(task => {
				const li = document.createElement('li');
				li.classList = 'menu-item';
				li.textContent = task;
				this.el.append(li);
			});
			this.el.style.display = 'inline';
		});
	}
	close() {
		this.el.styleisplay = 'none';
	}
	add() {}
}
