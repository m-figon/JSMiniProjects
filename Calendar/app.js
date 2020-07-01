var Calendar = /** @class */ (function () {
    function Calendar() {
        this.calendar = document.querySelector('.calendar');
        this.select = document.querySelector('select');
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Oct", "Dec"];
        this.monthsDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.lastDays = 31;
        console.log(this.select);
    }
    Calendar.prototype.monthInit = function () {
        for (var i = 0; i < 12; i++) {
            var option = document.createElement('option');
            option.value = this.months[i];
            option.innerHTML = this.months[i];
            this.select.appendChild(option);
        }
    };
    Calendar.prototype.lastMonthDays = function () {
        return this.lastDays;
    };
    Calendar.prototype.calendarInit = function () {
        console.log(this.select.value);
        var num;
        for (var i = 0; i < this.months.length; i++) {
            if (this.months[i] === this.select.value) {
                num = i;
                this.lastDays = this.monthsDays[num];
            }
        }
        for (var i = 1; i <= this.monthsDays[num]; i++) {
            var div = document.createElement('div');
            var h1 = document.createElement('h1');
            div.className = "item";
            h1.textContent = i.toString();
            div.appendChild(h1);
            this.calendar.appendChild(div);
        }
    };
    return Calendar;
}());
var calendarObj = new Calendar();
calendarObj.monthInit();
calendarObj.calendarInit();
var days = calendarObj.lastMonthDays();
calendarObj.select.addEventListener("change", function () {
    for (var i = 1; i <= days; i++) {
        calendarObj.calendar.removeChild(calendarObj.calendar.lastChild);
    }
    calendarObj.calendarInit();
});
