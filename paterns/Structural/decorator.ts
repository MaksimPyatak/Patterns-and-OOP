interface Printer {
  text: string;
  printing(text: string): string;
}

class BasePrinter implements Printer {
  public text: string;
  public printing(text: string): string {
    return `${text}`;
  }
}

class Decorator implements Printer {
  public text: string;
  protected printer: Printer;
  constructor(printer: Printer) {
    this.printer = printer;
  }
  public printing(text: string): string {
    return this.printer.printing(text);
  }
}

class LowerCase extends Decorator {
  public printing(text: string): string {
    return super.printing(text).toLowerCase();
  }
}

class UpperCase extends Decorator {
  public printing(text: string): string {
    return super.printing(text).toUpperCase();
  }
}

function convertString(text: string, printer: Printer) {
  console.log(printer.printing(text));
}
const simplePrinter = new BasePrinter();
const exampleText = 'Текст Для Перевірки';
convertString(exampleText, simplePrinter);

const lowerCase = new LowerCase(simplePrinter);
convertString(exampleText, lowerCase);
const upperCase = new UpperCase(simplePrinter);
convertString(exampleText, upperCase);
