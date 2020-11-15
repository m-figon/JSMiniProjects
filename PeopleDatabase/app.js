var Human = /** @class */ (function () {
    function Human(n, a, w) {
        var _this = this;
        this.getWorkPlace = function () {
            return _this.workplace;
        };
        this.name = n;
        this.age = a;
        this.workplace = w;
    }
    return Human;
}());
var inputs = document.querySelectorAll('input');
var button = document.querySelector('button');
var people = document.querySelector('.people');
var humans = [];
button.addEventListener('click', function () {
    if (inputs[0].value.length > 0 && inputs[1].value.length > 0 && inputs[2].value.length > 0 && !isNaN(parseInt(inputs[1].value))) {
        humans.push(new Human(inputs[0].value, parseInt(inputs[1].value), inputs[2].value));
        console.log(humans);
        var humanDiv = document.createElement('div');
        humanDiv.className = 'human';
        var name_1 = document.createElement('h1');
        name_1.innerText = humans[humans.length - 1].name;
        var age = document.createElement('h1');
        age.innerText = (humans[humans.length - 1].age).toString();
        var workplace = document.createElement('h1');
        workplace.innerText = humans[humans.length - 1].getWorkPlace();
        humanDiv.append(name_1);
        humanDiv.append(age);
        humanDiv.append(workplace);
        people.append(humanDiv);
        inputs.forEach(function (input) {
            input.value = '';
        });
    }
    else {
        alert('empty inputs or age is not a number');
    }
});
