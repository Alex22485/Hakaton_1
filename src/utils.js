export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const tasks =['Аналитика кликов', 'Случайная фигура', 'Таймер отсчета', 'Случайный звук', 'Случайный фон', 'Кастомное сообщение', 'Собственный модуль']