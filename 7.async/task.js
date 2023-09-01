class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}

		for (let i = 0; i < this.alarmCollection.length; i++) {
			if (time === this.alarmCollection[i].time) {
				console.warn('Уже присутствует звонок на это же время')
			}
		};

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
	}

	getCurrentFormattedTime() {
		const now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();

		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return hours + ':' + minutes;
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(item => {
				if (item.time === this.getCurrentFormattedTime() && item.canCall) {
					item.canCall = false;
					item.callback();
				}
			});
		}, 1000)
	}

	stop = function() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls = function() {
		this.alarmCollection.forEach(item => {
			item.canCall = true;
		});
	}

	clearAlarms = function() {
		this.stop();
		this.alarmCollection = [];
	}
}