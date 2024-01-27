/**
 * PlayingField -- клас, знімки якого будуть зберігатися
 */
class PlayingField {
  private state: string[][];

  constructor() {
    this.state = new Array(3);
    let i: number;
    for (i = 0; i < 3; i++) {
      this.state[i] = new Array(3);
      let j: number;
      for (j = 0; j < 3; j++) {
        this.state[i][j] = '_';
      }
    }
  }

  /**
   * Змінюю елемент масива
   */
  public makeMove(x: number, y: number, placeholder: string): void {
    this.state[x][y] = placeholder;
    // console.log('Поточний стан:');

    // console.table(this.state);
    // console.log('\n');
  }

  public save(): IMemento {
    const state = this.state.map((row) => [...row]);
    return new ConcreteMemento(state);
  }

  public restore(memento: IMemento): void {
    this.state = memento.getState();
  }

  public showState(): void {
    console.log('Показати поточний стан:');
    for (const row of this.state) {
      let element: string = ``;
      for (const i of row) {
        element = element + `${i}|`;
      }
      console.log(element);
    }
  }
}

interface IMemento {
  getState(): string[][];

  getDate(): string;
}

class ConcreteMemento implements IMemento {
  private state: string[][];
  private date: string;

  constructor(state: string[][]) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  getState(): string[][] {
    return this.state;
  }

  getDate(): string {
    return this.date;
  }
}

/**
 * Caretaker -- опікун
 */
class Caretaker {
  private mementos: IMemento[] = [];
  private originator: PlayingField;

  constructor(originator: PlayingField) {
    this.originator = originator;
  }

  public backup(): void {
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (this.mementos.length === 0) {
      return;
    }
    const memento = this.mementos.pop();
    if (memento !== undefined) {
      this.originator.restore(memento);
      console.log('Останні зміни скасовано.');
    }
  }

  public showHistory(): void {
    console.log('history');
    console.log('Список знімків:');
    for (const memento of this.mementos) {
      console.table(`${memento.getState()} ${memento.getDate()}`);
    }
    if (this.mementos.length === 0) {
      console.log('Знімки відсутні\n');
    }
    console.log('\n');
  }
}

let example = new PlayingField();
const caretacer = new Caretaker(example);

function play(x: number, y: number, placeholder: string) {
  caretacer.backup();
  example.makeMove(x, y, placeholder);
}
caretacer.showHistory();
play(1, 1, 'x');
caretacer.showHistory();
play(0, 0, '0');
caretacer.showHistory();
play(0, 2, 'x');
play(2, 0, '0');
play(1, 0, 'x');
play(2, 2, '0');
play(1, 2, 'x');

caretacer.showHistory();

caretacer.undo();
caretacer.showHistory();
example.showState();
caretacer.undo();
caretacer.undo();
example.showState();
