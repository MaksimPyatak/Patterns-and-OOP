abstract class Pizza {
  public createPizza(): void {
    this.takeBasis();
    this.spreadSauce();
    this.putSausage();
    this.hook();
    this.putMushrooms();
    this.putTomatoes();
    this.rubCheese();
  }
  protected takeBasis(): void {
    console.log(`Візьміть основу.`);
  }
  protected abstract spreadSauce(): void;
  protected abstract putSausage(): void;

  protected hook(): void {}
  protected abstract putMushrooms(): void;
  protected abstract putTomatoes(): void;

  protected rubCheese(): void {
    console.log(`Потріть зверху сир.`);
  }
}

class PepperoniPizza extends Pizza {
  protected spreadSauce() {
    console.log(`Змастіть томатним соусом.`);
  }
  protected putSausage() {
    console.log(`Покладіть папероні`);
  }
  protected putMushrooms() {}
  protected putTomatoes() {
    console.log(`Покладіть томати`);
  }
}

class WhitePizza extends Pizza {
  protected spreadSauce() {
    console.log(`Змастіт вершковим соусом`);
  }
  protected putSausage() {}
  protected hook() {
    console.log(`Покладіть шинку.`);
  }
  protected putMushrooms() {
    console.log(`Покладіть печериці.`);
  }
  protected putTomatoes() {}
}

const pepperoniPizza = new PepperoniPizza();
const whitePizza = new WhitePizza();
console.log(``);
console.log(`Рецепт приготування піци "Папероні".`);
pepperoniPizza.createPizza();
console.log(``);
console.log(`Рецепт приготування "Білої" піци`);
whitePizza.createPizza();
