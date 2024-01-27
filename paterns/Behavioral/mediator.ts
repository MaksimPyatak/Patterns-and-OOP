interface IMediator {
  notify(event: string): void;
}

class ConcretMediator implements IMediator {
  private sendingButtom: SendingButton;
  private sendingKey: SendingKey;
  private formMessage: FormMessage;

  constructor(sB: SendingButton, sK: SendingKey, sF: FormMessage) {
    this.sendingButtom = sB;
    this.sendingButtom.setMediator(this);
    this.sendingKey = sK;
    this.sendingKey.setMediator(this);
    this.formMessage = sF;
    this.formMessage.setMediator(this);
  }

  notify(event: string): void {
    if (event === 'Send' || 'Enter') {
      this.formMessage.showMessage();
    }
  }
}

class BaseComponent {
  protected mediator: IMediator | null = null;

  constructor(mediator?: IMediator) {
    if (mediator !== undefined) {
      this.mediator = mediator;
    }
  }

  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
}

class SendingButton extends BaseComponent {
  public send(): void {
    console.log('Ви натиснули кнопку Send. Повинна відправитися форма.');
    this.mediator?.notify('Send');
  }
}

class SendingKey extends BaseComponent {
  public send(): void {
    console.log('Ви натиснули клавішу Enter. Повинна відправитися форма.');
    this.mediator?.notify('Enter');
  }
}

class FormMessage extends BaseComponent {
  public showMessage(): void {
    console.log('Заповнена форма відправилась.');
  }
}

const sendButtom = new SendingButton();
const sendKey = new SendingKey();
const sendingForm = new FormMessage();
const mediator = new ConcretMediator(sendButtom, sendKey, sendingForm);

console.log('');
sendKey.send();
console.log('');
sendButtom.send();
console.log('');
