


class CountdownTimer { 
    constructor({ selector, targetDate }) { 
        this.selector = selector
        this.targetDate = targetDate
        createMarup(this.selector) 
        setInterval(() => { 
        const daysRef = document.querySelector(`#${this.selector} span[data-value="days"]`);
        const hoursRef = document.querySelector(`#${this.selector} span[data-value="hours"]`);
        const minsRef = document.querySelector(`#${this.selector} span[data-value="mins"]`);
        const secsRef = document.querySelector(`#${this.selector} span[data-value="secs"]`);
         
        const delta = this.targetDate - Date.now() 

        daysRef.textContent = Math.floor(delta / (1000 * 60 * 60 * 24));
        hoursRef.textContent = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,'0');
        minsRef.textContent = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,'0');
        secsRef.textContent = Math.floor((delta % (1000 * 60)) / 1000).toString().padStart(2,'0');
        }, 1000)

    }
}
function createMarup(selector) { 
    document.body.insertAdjacentHTML('beforeend', `<div class="timer" id="${selector}">
    <div class="field">
        <span class="value" data-value="days">11</span>
        <span class="label">Days</span>
    </div>

    <div class="field">
        <span class="value" data-value="hours">11</span>
        <span class="label">Hours</span>
    </div>

    <div class="field">
        <span class="value" data-value="mins">11</span>
        <span class="label">Minutes</span>
    </div>

    <div class="field">
        <span class="value" data-value="secs">11</span>
        <span class="label">Seconds</span>
    </div>
</div>`)
}
new CountdownTimer({
  selector: 'timer-1',
  targetDate: new Date('Sep 26, 2021'),
});

new CountdownTimer({
  selector: 'timer-2',
  targetDate: new Date('Oct 1, 2021'),
});

new CountdownTimer({
  selector: 'timer-3',
  targetDate: new Date('May 21, 2021'),
});