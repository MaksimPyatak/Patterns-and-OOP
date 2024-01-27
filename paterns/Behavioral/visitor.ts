interface IText {
  accept(visitor: IVisitor): void;
}

class Paragraph implements IText {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
  accept(visitor: IVisitor): void {
    visitor.visitParagraph(this);
  }

  getText(): string {
    return this.text;
  }
}

class List implements IText {
  list: string[];

  constructor(list: string[]) {
    this.list = list;
  }
  accept(visitor: IVisitor): void {
    visitor.visitList(this);
  }

  getList(): string[] {
    return this.list;
  }
}

interface IVisitor {
  visitParagraph(element: Paragraph): void;
  visitList(element: List): void;
}

class ToUpperCase implements IVisitor {
  visitParagraph(element: Paragraph): void {
    const text = element.getText().toUpperCase();
    console.log(text);
  }

  visitList(element: List): void {
    const list = element.getList();
    console.log(list.join(' ').toUpperCase());
  }
}

class ToLowerCase implements IVisitor {
  visitParagraph(element: Paragraph): void {
    const text = element.getText().toLowerCase();
    console.log(text);
  }

  visitList(element: List): void {
    const list = element.getList();
    console.log(list.join(' ').toLowerCase());
  }
}

function codeOfClient(components: IText[], visitor: IVisitor) {
  components.forEach((component) => component.accept(visitor));
}

const components = [
  new List(['Text', 'For', 'Example', 'With', 'The', 'List']),
  new Paragraph('Text For Example'),
];
const visitorUpper = new ToUpperCase();
const visitLower = new ToLowerCase();

codeOfClient(components, visitorUpper);
console.log('');

codeOfClient(components, visitLower);
