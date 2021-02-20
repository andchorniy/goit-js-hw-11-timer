
const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');

class CountdownTimer { 
    constructor({ selector, targetDate }) { 
        this.selector = selector
        this.targetDate = targetDate
        setInterval(() => { 
        
        const delta = this.targetDate - Date.now() 

        daysRef.textContent = Math.floor(delta / (1000 * 60 * 60 * 24));
        hoursRef.textContent = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,'0');
        minsRef.textContent = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,'0');
        secsRef.textContent = Math.floor((delta % (1000 * 60)) / 1000).toString().padStart(2,'0');
        }, 1000)

    }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
