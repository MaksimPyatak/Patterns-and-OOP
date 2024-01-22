interface IHandler {
  setNext(hendler: IHandler): IHandler;
  typeChecking(type: string): string;
}

abstract class Inviroment implements IHandler {
  private nextInviroment: IHandler | null = null;

  public setNext(inviroment: IHandler): IHandler {
    this.nextInviroment = inviroment;
    return inviroment;
  }

  public typeChecking(type: string): string {
    if (this.nextInviroment) {
      return this.nextInviroment.typeChecking(type);
    }
    return `Підходяще середовище для ${type} відсутне.`;
  }
}

class Lake extends Inviroment {
  public typeChecking(type: string): string {
    if (type === 'Риба') {
      return `${type} розміщується в озері.`;
    }
    return super.typeChecking(type);
  }
}

class Meadov extends Inviroment {
  public typeChecking(type: string): string {
    if (type === 'Коник') {
      return `${type} розміщується на лузі.`;
    }
    return super.typeChecking(type);
  }
}

class Mountains extends Inviroment {
  public typeChecking(type: string): string {
    if (type === 'Козел') {
      return `${type} розміщується в горах.`;
    }
    return super.typeChecking(type);
  }
}
const lake = new Lake();
const meadov = new Meadov();
const mountains = new Mountains();

lake.setNext(meadov).setNext(mountains);

console.log('');
console.log(lake.typeChecking('Козел'));
console.log('');
console.log(lake.typeChecking('Коник'));
console.log('');
console.log(lake.typeChecking('Вовк'));
console.log('');
