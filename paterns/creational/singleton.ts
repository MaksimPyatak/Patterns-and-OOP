class FirstTabContent {
  static instance: FirstTabContent | null = null;

  private constructor() {
    console.log('\nnew instance ');

    this.getTabContentData();
  }

  static getInstance() {
    if (this.instance === null) {
      this.instance = new FirstTabContent();
    } else {
      console.log('Повернення раніше створеного екземпляра\n');
    }
    return this.instance;
  }

  private getTabContentData() {
    console.log('Запит для отримання даних для рендеренгу таба');
    console.log('Дані для рендеренгу таба отимано\n');
  }

  public renderTabContent() {
    console.log('Рендериннг контенту таба');
  }
}

FirstTabContent.getInstance();
FirstTabContent.getInstance();
