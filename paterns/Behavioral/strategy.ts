class Tabs {
  private tabs: string[];
  private strategy: IStrategy;
  private ollStrategues: Record<string, IStrategy>;

  constructor(
    strategy: IStrategy,
    ollStrategies: Record<string, IStrategy>,
    tabs: string[]
  ) {
    this.strategy = strategy;
    this.ollStrategues = ollStrategies;
    this.tabs = tabs;
  }

  private setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  public renderTabs(): void {
    console.log(`Рендеринг табів`);
  }

  public selectTabs(text: string): void {
    console.log(`Змінюємо контент згідно вибраного табу`);
    this.setStrategy(this.ollStrategues[text]);
    const result = this.strategy.renderContent(text);
    console.log(result);
  }
}

interface IStrategy {
  renderContent(text: string): string;
}

class MatchesRendering implements IStrategy {
  public renderContent(): string {
    return 'Conten template of match tab';
  }
}

class TranslationesRendering implements IStrategy {
  public renderContent(): string {
    return 'Conten template of translation tab';
  }
}

const tabsContetn: Record<string, IStrategy> = {
  matches: new MatchesRendering(),
  tranlation: new TranslationesRendering(),
};

console.log('');
const tabs = new Tabs(tabsContetn.matches, tabsContetn, [
  'matches',
  'tranlation',
]);
tabs.selectTabs('tranlation');
console.log('');
tabs.selectTabs('matches');
