class Calendar {
    calendar: any;
    select: any;
    months: string[];
    monthsDays: number[];
    lastDays: number;
    constructor() {
        this.calendar = document.querySelector('.calendar');
        this.select = document.querySelector('select');
        this.months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Oct","Dec"];
        this.monthsDays = [31,29,31,30,31,30,31,31,30,31,30,31]
        this.lastDays=31;
        console.log(this.select);
    }
    monthInit():any{
        for (let i = 0; i < 12; i++) {
            const option: any = document.createElement('option');
            option.value=this.months[i];
            option.innerHTML=this.months[i];
            this.select.appendChild(option);
        }
    }
    lastMonthDays():number{
        return this.lastDays;
    }
    calendarInit():any{
        console.log(this.select.value);
        let num;
        for(let i=0; i<this.months.length; i++){
            if(this.months[i]===this.select.value){
                num=i;
                this.lastDays=this.monthsDays[num];
            }
        }
        for (let i = 1; i <= this.monthsDays[num]; i++) {
            const div: any = document.createElement('div');
            const h1: any = document.createElement('h1');
            div.className = "item";
            h1.textContent = i.toString();
            div.appendChild(h1);
            this.calendar.appendChild(div);
        }
        
    }
    
}



let calendarObj = new Calendar();
calendarObj.monthInit();
calendarObj.calendarInit();
let days = calendarObj.lastMonthDays();
calendarObj.select.addEventListener("change", ()=>{
    for (let i = 1; i <= days; i++) {
        calendarObj.calendar.removeChild(calendarObj.calendar.lastChild);
    }    calendarObj.calendarInit();
});