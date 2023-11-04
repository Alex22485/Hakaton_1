export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
};

export const tasks =['Аналитика кликов', 'Случайная фигура', 'Таймер отсчета', 'Случайный звук', 'Случайный фон', 'Кастомное сообщение', 'Собственный модуль'];

// Логика таймера

export function timer(seconds) {
    const rightTime = Date.now() + (seconds * 1000);

    displayTimer(seconds);

    let countdown = setInterval(() => {
        const timeLeft = Math.round((rightTime - Date.now()) / 1000);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            return;
        };

        displayTimer(timeLeft);

    }, 1000);

};

export function displayTimer(seconds) {
    const timeDisplay = `${seconds < 10 ? '0' : ''}${seconds}`;
    
    console.log(timeDisplay);
};
