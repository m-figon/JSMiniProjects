interface WorkingHuman {
    getWorkPlace(): string;
}
class Human implements WorkingHuman{
    public name: string;
    public age: number;
    private workplace: string;
    constructor(n: string, a: number, w: string) {
        this.name = n;
        this.age = a;
        this.workplace = w;
    }
    public getWorkPlace = (): string =>{
        return this.workplace;
    }
}

const inputs = document.querySelectorAll('input')!;
const button = document.querySelector('button') as HTMLElement;
const people = document.querySelector('.people') as HTMLElement;
const humans: Human[] = [];

button.addEventListener('click', () => {
    if (inputs[0].value.length > 0 && inputs[1].value.length > 0 && inputs[2].value.length > 0 && !isNaN(parseInt(inputs[1].value))) {
        humans.push(new Human(inputs[0].value,parseInt(inputs[1].value),inputs[2].value));
        console.log(humans);
        let humanDiv = document.createElement('div');
        humanDiv.className='human';
        let name: HTMLElement = document.createElement('h1');
        name.innerText=humans[humans.length-1].name;
        let age: HTMLElement = document.createElement('h1');
        age.innerText=(humans[humans.length-1].age).toString();
        let workplace: HTMLElement = document.createElement('h1');
        workplace.innerText=humans[humans.length-1].getWorkPlace();
        humanDiv.append(name);
        humanDiv.append(age);
        humanDiv.append(workplace);
        people.append(humanDiv);
        inputs.forEach(input => {
            input.value='';
        });
    }else{
        alert('empty inputs or age is not a number')
    }
})

