import { Module } from '../core/module';
import { tasks,random, SOUNDURL, SOUNDPATHPARAMS } from '../utils';
import { contextMenu } from '../app';
export class Sound extends Module {
	constructor(type, text) {
		super(type, text);
		this.bool = false;
		this.audio = null;
	}
	trigger(textContent) {
		if (textContent === tasks[3]) {
			console.log(this.bool);
			if (this.bool) {
				this.audio.pause();
				this.bool = false;
			} else {
				let randomSong = random(0, SOUNDPATHPARAMS.length - 1);
				this.audio = new Audio(`${SOUNDURL}${SOUNDPATHPARAMS[randomSong]}.mp3`);
				this.audio.addEventListener('ended', () => {
					this.bool = false;
				});
				this.audio.volume = 1;
				this.audio.play();
				this.bool = true;
			}
			// закрываем контекстное меню
			contextMenu.close();
		}
	}
}
