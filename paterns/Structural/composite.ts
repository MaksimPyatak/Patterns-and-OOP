abstract class Component {
  protected parent: Component | null = null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

class Table extends Component {
  public operation(): string {
    return 'Table';
  }
}

class Chair extends Component {
  public operation(): string {
    return 'Chair';
  }
}

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
