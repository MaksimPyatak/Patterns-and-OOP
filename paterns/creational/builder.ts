interface PageBuilder {
  reset(): void;
  getPageContent(): PageContent;
  createPageWrapper(content: string[]): void;
  createFilterBlock(content: string[]): string;
  createFilter(): string;
  createLobbyConstructor(): string;
  createLobbyList(): string;
}

class CsPageBuilder implements PageBuilder {
  private pageContent: PageContent;
  constructor() {
    this.pageContent = new PageContent();
  }

  public reset(): void {
    this.pageContent = new PageContent();
  }

  public getPageContent() {
    const resalt = this.pageContent;
    this.reset();
    return resalt;
  }

  createPageWrapper(content: string[]): void {
    this.pageContent.content = content.reduce((acc, blockElem) => {
      acc = acc.concat(`\t${blockElem}\n`);
      return acc;
    }, '\n\tСторінка :\n');
  }

  createFilterBlock(content: string[]): string {
    const filtersBlock = content.reduce((acc, blockElem) => {
      acc = acc.concat(`\t\t${blockElem}\n`);
      return acc;
    }, 'Блок фільтрації:\n');
    return filtersBlock;
  }

  createFilter(): string {
    return 'Фільтри';
  }

  createLobbyConstructor(): string {
    return 'Конструктор лоббі';
  }

  createLobbyList(): string {
    return 'Таблиця матчів';
  }
}

class PageContent {
  public content: string = '';

  public showContent(): void {
    console.log(` ${this.content}\n`);
  }
}

class PageDirector {
  private pageBuilder!: PageBuilder;

  public setBuilder(pageBuilder: PageBuilder): void {
    this.pageBuilder = pageBuilder;
  }

  public createMatchPage(): void {
    const filters = this.pageBuilder.createFilter();
    const lobbyConstructor = this.pageBuilder.createLobbyConstructor();
    const filtersBlkock = this.pageBuilder.createFilterBlock([
      filters,
      lobbyConstructor,
    ]);
    const lobbyList = this.pageBuilder.createLobbyList();
    this.pageBuilder.createPageWrapper([filtersBlkock, lobbyList]);
  }

  public createStreamPage(): void {
    const filters = this.pageBuilder.createFilter();
    const filtersBlkock = this.pageBuilder.createFilterBlock([filters]);
    const lobbyList = this.pageBuilder.createLobbyList();
    this.pageBuilder.createPageWrapper([filtersBlkock, lobbyList]);
  }

  public createCalibrationPage(): void {
    const lobbyList = this.pageBuilder.createLobbyList();
    this.pageBuilder.createPageWrapper([lobbyList]);
  }
}

function createPages(pageDirector: PageDirector) {
  const builder = new CsPageBuilder();
  pageDirector.setBuilder(builder);

  console.log('Match page');
  pageDirector.createMatchPage();
  builder.getPageContent().showContent();

  console.log('Stream page');
  pageDirector.createStreamPage();
  builder.getPageContent().showContent();

  console.log('Calibration page');
  pageDirector.createCalibrationPage();
  builder.getPageContent().showContent();
}

const director = new PageDirector();
createPages(director);
