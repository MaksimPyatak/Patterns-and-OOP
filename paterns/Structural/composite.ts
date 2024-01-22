abstract class Component {
  protected parent: Component | null = null;

  /**
   * setParent встановлює батька
   */
  public setParent(parent: Component | null) {
    this.parent = parent;
  }
  /**
   * getParent повертає батька
   */
  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  /**
   * Чи може компонент мати дітей.
   */
  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

/**
 * Клас Table кінцевий об’єкт композиції
 */
class Table extends Component {
  public operation(): string {
    return 'Table';
  }
}
/**
 * Клас Chair кінцевий об’єкт композиції
 */
class Chair extends Component {
  public operation(): string {
    return 'Chair';
  }
}

/**
 * Room - компонент-контейнер
 */
class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  /**
   * operation рекурсивно проходить усіх своїх дітей, збираючи та підсумовуючи їхні результати.
   */
  public operation(): string {
    const results: string[] = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Приміщення(${results.join('+')})`;
  }
}

function getOfficeStructure(component: Component) {
  console.log(`План офісу: ${component.operation()}`);
}

const office = new Composite();
const room1 = new Composite();
room1.add(new Table());
room1.add(new Chair());
const room2 = new Composite();
room2.add(new Table());
room2.add(new Chair());
room2.add(new Chair());
office.add(room1);
office.add(room2);
getOfficeStructure(office);
console.log('');

/**
 * updateOffice додає компоненти
 */
function updateOffice(component1: Component, component2: Component) {
  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`План оновленого приміщення: ${component1.operation()}`);
}
const chair = new Chair();
updateOffice(room2, chair);
