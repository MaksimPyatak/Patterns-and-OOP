interface IPageRender {
  getGameData(): IGameDataGetting;

  renderMatch(): IMatchesRenderer;
}
class CsPageRender implements IPageRender {
  public getGameData(): IGameDataGetting {
    return new CsDataGetting();
  }

  public renderMatch(): IMatchesRenderer {
    return new CsMatchesRenderer();
  }
}

class DotaPageRender implements IPageRender {
  public getGameData(): IGameDataGetting {
    return new DotaDataGetting();
  }

  public renderMatch(): IMatchesRenderer {
    return new DotaMatchesRenderer();
  }
}

interface IGameDataGetting {
  getData(): number[];
}

class CsDataGetting implements IGameDataGetting {
  getData() {
    console.log('Отримання даних для CS');

    return [1, 2, 3, 4];
  }
}

class DotaDataGetting implements IGameDataGetting {
  getData() {
    console.log('Отримання даних для Dota');

    return [1, 2, 3, 4];
  }
}

interface IMatchesRenderer {
  renderHead(): void;
  renderMatches(gameDataGetting: IGameDataGetting): void;
}

class CsMatchesRenderer implements IMatchesRenderer {
  renderHead() {
    console.log('Рендерінг заголовка Cs');
  }
  renderMatches(gameDataGetting: IGameDataGetting) {
    const gameData = gameDataGetting.getData();
    gameData.forEach((matchData) => {
      console.log(`Рендерінг матчув стилі CS з даними ${matchData}`);
    });
  }
}

class DotaMatchesRenderer implements IMatchesRenderer {
  renderHead() {
    console.log('Рендерінг заголовка Cs');
  }

  renderMatches(gameDataGetting: IGameDataGetting) {
    const gameData = gameDataGetting.getData();
    gameData.forEach((matchData) => {
      console.log(`Рендерінг матчув стилі Dota з даними ${matchData}`);
    });
  }
}

function renderPage(factory: IPageRender) {
  const gameData = factory.getGameData();
  const rendererMatch = factory.renderMatch();
  rendererMatch.renderHead();
  rendererMatch.renderMatches(gameData);
}

console.log('Рендеринг сторінки CS:');
renderPage(new CsPageRender());
console.log('');

console.log('Рендеринг сторінки Dota:');
renderPage(new DotaPageRender());
//
//
//
//
//
//
//

/**
 *
 * @param timestamp -- може бути лише рядком
 */
function makeDate(timestamp: string): Date;
/**
 *
 * @param m Heloo
 * @param d Buy
 * @param y
 */
function makeDate(m: number, d: number, y: number): Date;

function makeDate(mOrTimestamp: number | string, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    if (typeof mOrTimestamp === 'number') {
      return new Date(y, mOrTimestamp, d);
    }
    return new Date(Date.now());
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate('12345678');
const d2 = makeDate(5, 5, 5);
//const d3 = makeDate(1, 3);
