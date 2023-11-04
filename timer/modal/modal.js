// Ввод секунд через модальное окно. Нигде в коде не используется, требуется доработки

export function createModalOverlayTimer() {
    const modalOverlay = `
    <div class="modal-overlay">
        <form class="timer-modal">
            <div class="timer-modal__enter">
                <label class="timer-modal__label" for="time-input">Введите количество секунд от 5 до 30:</label>
                <input id="time-input" name="time-input" type="number" min="5" max="30" value="5" />
            </div>
            <div class="timer-modal__buttons">
                <button class="timer-modal__button timer-modal__cancel-button" type="submit">Отмена</button>
                <button class="timer-modal__button timer-modal__enter-button">Ввести</button>
            </div>
        </form>
    </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", modalOverlay);
};