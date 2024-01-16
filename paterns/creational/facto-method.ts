abstract class MatchRenderer {
  public abstract factoryMethod(): IMatch;

  public iterateMatchData(matchesData: { id: string }[]): void {
    matchesData.forEach((matchData: { id: string }) => {
      const match = this.factoryMethod();
      match.createHtml(matchData.id);
    });
  }
}

/**
 * Конкретні створювачі перевизначають фабричний метод для зміни типу отриманого продукту.
 */
class MatchRendererAsRow extends MatchRenderer {
  public factoryMethod(): IMatch {
    return new RowMatch();
  }
}

class MatchRendererAsCard extends MatchRenderer {
  public factoryMethod(): IMatch {
    return new CardMatch();
  }
}

interface IMatch {
  createHtml(matchId: string): void;
}

class RowMatch implements IMatch {
  public createHtml(matchId: string): void {
    console.log(`Створює HTML структуру у вигляді рядка з id ${matchId}`);
  }
}

class CardMatch implements IMatch {
  public createHtml(matchId: string): void {
    console.log(`Створює HTML структуру у вигляді картки з id ${matchId}`);
  }
}

function renderMatch(creator: MatchRenderer, matchData: { id: string }[]) {
  creator.iterateMatchData(matchData);
}

const matchData = [{ id: '1' }, { id: '2' }, { id: '3' }];

renderMatch(new MatchRendererAsRow(), matchData);
console.log('');

renderMatch(new MatchRendererAsCard(), matchData);
