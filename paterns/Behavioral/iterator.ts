interface IIterator<Type> {
  current(): Type;
  next(): Type;
  valid(): boolean;
  resetPosition(): void;
}

interface IAggregator {
  getIterator(): IIterator<string>;
}

class InstitutionsListIterator implements IIterator<string> {
  private collection: HigherEducationInstitutionsList;
  private position: number = 0;

  constructor(collection: HigherEducationInstitutionsList) {
    this.collection = collection;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    ++this.position;
    return item;
  }

  public valid(): boolean {
    return this.position < this.collection.getCount();
  }

  public resetPosition(): void {
    this.position = 0;
  }
}

class HigherEducationInstitutionsList implements IAggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): IIterator<string> {
    return new InstitutionsListIterator(this);
  }
}

const institutions = new HigherEducationInstitutionsList();
institutions.addItem('Націонадьний авіаційний університет');
institutions.addItem('Національна академія внутрішніх справ України');
institutions.addItem('Націонадьний медичний університет');
institutions.addItem(
  'Національна академія образотворчого мистецтва і архітектури'
);
institutions.addItem(
  'Військовий інститут телекомунікацій та інформатизації імені Героїв Крут'
);

const institutionsIterator = institutions.getIterator();
const institute = 'інститут';
const university = 'університет';
const academy = 'академія';

console.log('');

function research(filter: string) {
  while (institutionsIterator.valid()) {
    const element = institutionsIterator.next();

    if (element.includes(filter)) {
      console.log(element);
    }
  }
  institutionsIterator.resetPosition();
}

research(institute);
console.log('');
research(university);
console.log('');
research(academy);
console.log('');
