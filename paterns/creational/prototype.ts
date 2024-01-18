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
  const Cup = new CupPrototype(150, 'yelow');
  const bigCup = Cup.clone();
  const smallCup = Cup.clone();
  if (bigCup.volume == smallCup.volume) {
    console.log(' Успіх!');
    console.log(bigCup);
    console.log(smallCup);
  } else {
    console.log('Невдача(((');
    console.log(bigCup);
    console.log(smallCup);
  }

  bigCup.volume = 400;
  console.log(bigCup);
  console.log(smallCup);
}
createCup();
