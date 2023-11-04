export function timerToHTML(timerDisplay) {
    const timerBlock = document.createElement('div');
    timerBlock.className = 'timer-block';
    timerBlock.textContent = timerDisplay;
    timerBlock.title = timerDisplay;

    document.body.append(timerBlock);
};