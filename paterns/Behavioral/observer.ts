class Header {
  private observer: HeaderObserver;

  constructor(headerObserver: HeaderObserver) {
    this.observer = headerObserver;
  }

  renderHeader(): void {
    console.log('Render Header');
  }

  changeGame(game: string): void {
    console.log(`Вибрано ${game}`);
    this.observer.notify('game', game);
  }

  openMessage(messageId: string): void {
    console.log(`Вибрано повідомлення з id: ${messageId}`);
    this.observer.notify('message', messageId);
  }
}

class HeaderObserver {
  private eventListners: Record<string, IEventListner[]> = {};

  attach(evenType: string, listner: IEventListner): void {
    if (evenType in this.eventListners) {
      this.eventListners[evenType].push(listner);
    } else {
      this.eventListners[evenType] = [listner];
    }
  }

  detach(evenType: string, listner: IEventListner): void {
    if (
      evenType in this.eventListners &&
      this.eventListners[evenType].includes(listner)
    ) {
      const index = this.eventListners[evenType].indexOf(listner);
      this.eventListners[evenType].splice(index, 1);
    }
  }

  notify(evenType: string, data: string): void {
    if (evenType in this.eventListners) {
      this.eventListners[evenType].forEach((listner) => {
        listner.updata(data);
      });
    }
  }
}

interface IEventListner {
  updata(data: string): void;
}

class PageRendering implements IEventListner {
  renderPage(pageName: string) {
    if (pageName === 'Dota') {
      console.log('Рендеринг Dota');
    } else if ('CS') {
      console.log('Рендеринг CS');
    }
  }

  updata(pageName: string): void {
    this.renderPage(pageName);
  }
}

class Messages implements IEventListner {
  private messages: Record<string, string> = {};

  addMessage(id: string, message: string) {
    this.messages[id] = message;
  }

  showMessage(id: string) {
    console.log(this.messages[id]);
  }

  updata(id: string): void {
    this.showMessage(id);
  }
}

const headerObserver = new HeaderObserver();
const header = new Header(headerObserver);

headerObserver.attach('game', new PageRendering());

const messages = new Messages();
messages.addMessage('first', 'Hello');
messages.addMessage('second', 'Bey');

headerObserver.attach('message', messages);

header.changeGame('CS');
header.openMessage('first');
