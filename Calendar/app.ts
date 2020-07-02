class Calendar {
    calendar: any;
    select: any;
    items: any;
    months: string[];
    monthsDays: number[];
    lastDays: number;
    num: number;
    constructor() {
        this.calendar = document.querySelector('.calendar');
        this.items;
        this.select = document.querySelectorAll('select');
        this.months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Oct","Dec"];
        this.monthsDays = [31,29,31,30,31,30,31,31,30,31,30,31]
        this.lastDays=31;
        this.num=0;
        console.log(this.select[1]);
    }
    monthInit():any{
        for (let i = 0; i < 12; i++) {
            const option: any = document.createElement('option');
            option.value=this.months[i];
            option.innerHTML=this.months[i];
            this.select[1].appendChild(option);
        }
    }
    yearInit():any{
        for (let i = 2020; i >= 1960; i--) {
            const option: any = document.createElement('option');
            option.value=i;
            option.innerHTML=i;
            this.select[0].appendChild(option);
        }
    }
    selectChange(): number{
        console.log(this.select[1].value);
        for(let i=0; i<this.months.length; i++){
            if(this.months[i]===this.select[1].value){
                this.num=i;
                this.lastDays=this.monthsDays[this.num];
                return this.lastDays;
            }
        }
    }
    calendarInit():any{
        for (let i = 1; i <= this.monthsDays[this.num]; i++) {
            const div: any = document.createElement('div');
            div.className = "item";
            div.textContent = i.toString();
            this.calendar.appendChild(div);
        }
        this.items = document.querySelectorAll('.item');
        console.log(this.items);
        for(let i = 7; i<=this.items.length ;i++){
            this.items[i].addEventListener("click", ()=>{
                let tmp;
                tmp=this.items[i].childNodes[0].nodeValue+"/"+this.select[1].value+"/"+this.select[0].value;
                const text = document.querySelector('.date h1')
                console.log(text);
                text.innerHTML="Chosen date is: "+tmp;
                console.log(tmp);
                });
        }
        
    }
}



let calendarObj = new Calendar();
calendarObj.yearInit();
calendarObj.monthInit();
calendarObj.calendarInit();
calendarObj.select[1].addEventListener("change", ()=>{
    let days: number = calendarObj.selectChange();
    for (let i = 1; i <= days; i++) {
        calendarObj.calendar.removeChild(calendarObj.calendar.lastChild);
    }
    calendarObj.calendarInit();
});

calendarObj.calendar.addEventListener("click", (item)=>{
    console.log(item);
});
