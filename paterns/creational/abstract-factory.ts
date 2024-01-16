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

/**
 * Product 1
 */
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

/**
 * Product 2
 */
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
