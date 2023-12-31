export function random(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
// содержимое меню
export const tasks = [
	'Аналитика кликов',
	'Случайная фигура',
	'Таймер отсчета',
	'Случайный звук',
	'Случайный фон',
	'Кастомное сообщение'
];
// рандомный цвет фона
export const getRandonColor = () => {
	let elem = 'RGB(';
	for (let i = 1; i < 4; i++) {
		elem += `${255 - Math.round(Math.random() * 100)},`;
	}
	let randomElem = elem.slice(0, -1) + ')';
	return randomElem;
};
// для модуля звука
export const SOUNDURL = 'https://cdn.freesound.org/previews/';
export const SOUNDPATHPARAMS = [
	'708/708781_5674468-lq',
	'708/708767_1089955-lq',
	'708/708745_1089955-lq',
	'708/708744_1648170-lq',
	'708/708724_15370993-lq',
	'708/708693_15370993-lq',
	'708/708616_1089955-lq',
	'708/708615_1089955-lq',
	'708/708602_9034501-lq',
	'708/708579_15367714-lq',
	'708/708577_15367714-lq',
	'708/708576_15367714-lq',
	'708/708574_15367714-lq',
	'708/708573_15367714-lq',
	'708/708572_1089955-lq',
	'708/708522_15367714-lq',
	'708/708519_15367714-lq',
	'708/708510_15367714-lq',
	'708/708517_15367714-lq',
	'708/708509_15367714-lq',
	'708/708507_15367714-lq',
	'708/708505_15367714-lq',
	'708/708494_15367714-lq',
	'708/708492_15367714-lq',
	'708/708491_15367714-lq',
	'708/708485_5674468-lq',
	'708/708474_15367714-lq',
	'708/708463_15367714-lq',
	'708/708462_15367714-lq',
	'708/708460_15367714-lq'
];
//таймер времени
export function timer(second) {
	const secondHtml = document.createElement('div');
	secondHtml.className = 'seconds';
	secondHtml.style.userSelect = 'none';

	const dataNow = Date.now();
	const dataFinish = Date.now() + second;
	let result = dataFinish - dataNow;

	let idInt = setInterval(() => {
		secondHtml.textContent = '';
		secondHtml.textContent = result;
		document.body.append(secondHtml);
		result = result - 1;
		chesk(result, idInt, secondHtml);
	}, 1000);
}
function chesk(result, idInt, secondHtml) {
	if (result === -2) {
		// останов setInterval
		clearInterval(idInt);
		secondHtml.remove();
	}
}
// для модуля message
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
// создание фигуры или сообщения для shape.module и message
export function createShapeAndMessage(shape = false, message = false) {
	let screenWidth = window.innerWidth;
	let screenHeight = window.innerHeight;
	const divShapeOrMessage = document.createElement('div');
	divShapeOrMessage.style.position = 'absolute';
	divShapeOrMessage.style.top = `${random(150, screenHeight - 150)}px`;
	divShapeOrMessage.style.left = `${random(200, screenWidth - 200)}px`;

	if (shape) {
		divShapeOrMessage.classList = `shape${random(0, 43)}`;
	} else if (message) {
		divShapeOrMessage.className = 'messageRandome';
		divShapeOrMessage.textContent = MESSAGES[random(0, MESSAGES.length - 1)];
	}
	document.body.append(divShapeOrMessage);
	// return используется только для удаления фигуры в shape.module.js
	return divShapeOrMessage;
}
