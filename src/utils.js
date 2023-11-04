export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const tasks =['Аналитика кликов', 'Случайная фигура', 'Таймер отсчета', 'Случайный звук', 'Случайный фон', 'Кастомное сообщение', 'Собственный модуль']

// рандомный цвет она
export const getRandonColor = () =>{
    let elem = 'RGB('
    for(let i = 1; i<4; i++){
      elem += `${255 - Math.round(Math.random()*100)},`
  }
  let randomElem = elem.slice(0,-1) + ")"

  return randomElem
}