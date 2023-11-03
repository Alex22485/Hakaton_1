import './styles.css'
import {ContextMenu} from './menu'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import {Timer} from './modules/timer'
import {Sound} from './modules/sound'
import {BackgroundModule} from './modules/background.module'
import {Message} from './modules/message'

// Отображение меню
const openMenu = new ContextMenu('.menu')
openMenu.open()

const clicksModule = new ClicksModule ('тип', 'текст' )
const shapeModule = new ShapeModule ('тип', 'текст' )
const timer = new Timer ('тип', 'текст' )
const sound = new Sound ('тип', 'текст' )
const backgroundModule = new BackgroundModule ('тип', 'текст' )
const message = new Message ('тип', 'текст' )

document.addEventListener('click', (event) => {
    const textContent = event.target.textContent
    // реализация пунктов меню
    clicksModule.trigger(textContent)
    shapeModule.trigger(textContent)
    timer.trigger(textContent)
    sound.trigger(textContent)
    backgroundModule.trigger(textContent)
    message.trigger(textContent)
})