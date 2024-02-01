class Receiver {
  public copy(): void {
    console.log(`Я зкопіював виділений об'єкт.`);
  }
  public paste(): void {
    console.log(`Я вставив зкопійований об'єкт.`);
  }
}

interface ICommand {
  execute(): void;
}

class Copy implements ICommand {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.copy();
  }
}

class Paste implements ICommand {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.paste();
  }
}

class KeyCombination {
  private firstKey: string;
  private secondKey: string;
  private command: ICommand;

  constructor(firstKey: string, secondKey: string, command: ICommand) {
    this.firstKey = firstKey;
    this.secondKey = secondKey;
    this.command = command;
    this.eventListener();
  }

  private eventListener(): void {
    console.log(
      `Я слухач подій. Я відстежую натискання комбінацій клавіш ${this.firstKey} + ${this.secondKey}`
    );
  }

  public doSomething(): void {
    this.command.execute();
  }
}

class Button {
  private nameButton: string;
  private command: ICommand;

  constructor(nameButton: string, command: ICommand) {
    this.nameButton = nameButton;
    this.command = command;
    this.createButton();
  }

  private createButton(): void {
    console.log(`Я створив кнопу з назвою ${this.nameButton}.`);
  }

  public doSomething(): void {
    this.command.execute();
  }
}

const receiver = new Receiver();
console.log(``);
const buttonCopy = new Button('Copy', new Copy(receiver));

console.log(``);
buttonCopy.doSomething();
console.log(``);

const buttonPaste = new Button('Paste', new Paste(receiver));
buttonPaste.doSomething();
console.log(``);
const keyCombinationCopy = new KeyCombination('Ctrl', 'C', new Copy(receiver));
keyCombinationCopy.doSomething();
console.log(``);

console.log(``);
const keyCombinationPaste = new KeyCombination(
  'Ctrl',
  'V',
  new Paste(receiver)
);
keyCombinationPaste.doSomething();
console.log(``);
