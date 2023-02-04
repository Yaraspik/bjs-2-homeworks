class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, action){
        if(!time || !action){
            throw new Error ('Отсутствуют обязательные аргументы');
        }

        if(this.alarmCollection.find(alarm => alarm.time === time)){
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({
            callback: action,
            time: time,
            canCall: true
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time);
    }

    getCurrentFormattedTime(){
        let currentTime = new Date();
        let hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}`: currentTime.getHours();
        let minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}`: currentTime.getMinutes();

        return hours + ":" + minutes;
    }

    start(){
        if(this.intervalId != null){
            return;
        }

        this.intervalId = setInterval(this.alarmCollection.forEach(alarm => {
            if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true){
                alarm.canCall = false;
                alarm.callback();
            };
        }),1000);
    }

    stop(){
        clearInterval();
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}