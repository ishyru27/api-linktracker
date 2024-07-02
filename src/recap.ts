// const myName = 'Nicolas';
// const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 12);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'nicolas');
nicolas.getSummary();
