import { Menu } from './core/menu';

export class ContextMenu extends Menu {
	constructor(el) {
		super(el);
	}

	open() {
		this.el.addEventListener('click', event => {
			console.log(event.target);
		});

		document.addEventListener('contextmenu', event => {
			this.el.textContent = '';
			// блокируем текстовое меню по умолчанию
			event.preventDefault();

			const tasks = [
				'Аналитика кликов',
				'Случайная фигура',
				'Таймер отсчета',
				'Случайный звук',
				'Кастомное сообщение',
				'Собственный модуль'
			];
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
		this.el.style.display = 'none';
	}
}
