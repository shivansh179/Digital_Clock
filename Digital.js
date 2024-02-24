function Digital_Clock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(Digital_Clock,1000);
setAlarm();