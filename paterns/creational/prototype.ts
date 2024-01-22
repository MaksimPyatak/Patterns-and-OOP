interface IPrototype {
  clone(): this;
}

class CupPrototype implements IPrototype {
  private form: string = 'tea_cup';
  public volume: number;
  public color: string;

  constructor(volume: number, color: string) {
    this.volume = volume;
    this.color = color;
  }
  public clone(): this {
    const clone = Object.assign({}, this);
    return clone;
  }
}
function createCup() {
  const cup = new CupPrototype(150, 'yelow');
  const bigCup = cup.clone();
  const smallCup = cup.clone();
  if (cup.volume == smallCup.volume) {
    console.log(' Успіх!');
    console.log(cup);
    console.log(smallCup);
  } else {
    console.log('Невдача(((');
    console.log(cup);
    console.log(smallCup);
  }

  cup.volume = 400;
  console.log(cup);
  console.log(smallCup);
}
createCup();
