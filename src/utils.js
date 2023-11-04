export function random(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export const tasks = [
	'Аналитика кликов',
	'Случайная фигура',
	'Таймер отсчета',
	'Случайный звук',
	'Случайный фон',
	'Кастомное сообщение',
	'Собственный модуль'
];

// рандомный цвет она
export const getRandonColor = () => {
	let elem = 'RGB(';
	for (let i = 1; i < 4; i++) {
		elem += `${255 - Math.round(Math.random() * 100)},`;
	}
	let randomElem = elem.slice(0, -1) + ')';

	return randomElem;
};

export const MESSAGES = [
	'Привет!',
	'Hello!',
	'Как дела?',
	'How are you?',
	'Что нового?',
	"What's new?",
	'Хорошего дня!',
	'Have a nice day!',
	'Добро пожаловать!',
	'Welcome!',
	'Как прошел день?',
	'How was your day?',
	'Удачи!',
	'Good luck!',
	'Какой у тебя план на сегодня?',
	"What's your plan for today?",
	'Спасибо!',
	'Thank you!',
	'Приятно познакомиться!',
	'Nice to meet you!'
];
