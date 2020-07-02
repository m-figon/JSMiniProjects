var Calendar = /** @class */ (function () {
    function Calendar() {
        this.calendar = document.querySelector('.calendar');
        this.items;
        this.select = document.querySelectorAll('select');
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Oct", "Dec"];
        this.monthsDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.lastDays = 31;
        this.num = 0;
        console.log(this.select[1]);
    }
    Calendar.prototype.monthInit = function () {
        for (var i = 0; i < 12; i++) {
            var option = document.createElement('option');
            option.value = i;
            console.log(option.value);
            option.innerHTML = this.months[i];
            this.select[1].appendChild(option);
        }
    };
    Calendar.prototype.yearInit = function () {
        for (var i = 2020; i >= 1960; i--) {
            var option = document.createElement('option');
            option.value = i;
            option.innerHTML = i;
            this.select[0].appendChild(option);
        }
    };
    Calendar.prototype.selectChange = function () {
        console.log(this.select[1].value);
        for (var i = 0; i < this.months.length; i++) {
            if (i === parseInt(this.select[1].value)) {
                console.log('select match!');
                this.num = i;
                this.lastDays = this.monthsDays[this.num];
                console.log(this.lastDays);
                return this.lastDays;
            }
        }
    };
    Calendar.prototype.calendarInit = function () {
        var _this = this;
        for (var i = 1; i <= this.monthsDays[this.num]; i++) {
            var div = document.createElement('div');
            div.className = "item";
            div.textContent = i.toString();
            this.calendar.appendChild(div);
        }
        this.items = document.querySelectorAll('.item');
        console.log(this.items);
        var _loop_1 = function (i) {
            this_1.items[i].addEventListener("click", function () {
                for (var i_1 = 7; i_1 < _this.items.length; i_1++) {
                    _this.items[i_1].id = "";
                }
                var tmp = "";
                _this.items[i].id = "selected";
                console.log(_this.items[i]);
                if (parseInt(_this.items[i].childNodes[0].nodeValue) < 10) {
                    tmp += "0" + _this.items[i].childNodes[0].nodeValue;
                }
                else {
                    tmp += _this.items[i].childNodes[0].nodeValue;
                }
                if (parseInt(_this.select[1].value) < 10) {
                    tmp += "/0" + (parseInt(_this.select[1].value) + 1);
                }
                else {
                    tmp += "/" + (parseInt(_this.select[1].value) + 1);
                }
                tmp += "/" + _this.select[0].value;
                var text = document.querySelector('.date h1');
                console.log(text);
                text.innerHTML = "Chosen date is: " + tmp;
                console.log(tmp);
            });
        };
        var this_1 = this;
        for (var i = 7; i < this.items.length; i++) {
            _loop_1(i);
        }
    };
    return Calendar;
}());
var calendarObj = new Calendar();
calendarObj.yearInit();
calendarObj.monthInit();
calendarObj.calendarInit();
calendarObj.select[1].addEventListener("change", function () {
    var days = calendarObj.selectChange();
    for (var i = 1; i <= days; i++) {
        calendarObj.calendar.removeChild(calendarObj.calendar.lastChild);
    }
    calendarObj.calendarInit();
    var text = document.querySelector('.date h1');
    text.innerHTML = "";
});
calendarObj.select[0].addEventListener("change", function () {
    var days = calendarObj.selectChange();
    for (var i = 1; i <= days; i++) {
        calendarObj.calendar.removeChild(calendarObj.calendar.lastChild);
    }
    calendarObj.calendarInit();
    var text = document.querySelector('.date h1');
    text.innerHTML = "";
});
