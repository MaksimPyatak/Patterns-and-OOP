class Transporter {
  protected transportationMathod: TransportationMathod;
  constructor(transportationMathod: TransportationMathod) {
    this.transportationMathod = transportationMathod;
  }
  public transportation(): string {
    let result = `Доставка вантажів в іншу країну здійснюється наступним чином:\n
      ${this.transportationMathod.localTransportation()}\n
      ${this.transportationMathod.overload()}\n
      ${this.transportationMathod.internationalTransportation()}`;
    return result;
  }
}

class DHL extends Transporter {
  public transportation(): string {
    let result = `DHL доставляє вантажі в іншу країну наступним чином:\n
      ${this.transportationMathod.localTransportation()}\n
      ${this.transportationMathod.overload()}\n
      ${this.transportationMathod.internationalTransportation()}`;
    return result;
  }
}

class FedEx extends Transporter {
  public transportation(): string {
    let result = `FedEx доставляє вантажі в іншу країну наступним чином:\n
      ${this.transportationMathod.localTransportation()}\n
      ${this.transportationMathod.overload()}\n
      ${this.transportationMathod.internationalTransportation()}`;
    return result;
  }
}

interface TransportationMathod {
  localTransportation(): string;
  overload(): string;
  internationalTransportation(): string;
}

class SeaTransportation implements TransportationMathod {
  public localTransportation(): string {
    return `перевезення по країні`;
  }
  public overload(): string {
    return `перевантаження`;
  }
  public internationalTransportation(): string {
    return `перевезення морем`;
  }
}

class AirTransportation implements TransportationMathod {
  public localTransportation(): string {
    return `перевезення по країні`;
  }
  public overload(): string {
    return `перевантаження`;
  }
  public internationalTransportation(): string {
    return `перевезення літаком`;
  }
}

const seaTransportationMathod = new SeaTransportation();
const airTransportationMathod = new AirTransportation();

const seaTransporterByDHL = new DHL(seaTransportationMathod);
console.log(seaTransporterByDHL.transportation());

console.log(``);

const seaTransporterByFedEx = new FedEx(seaTransportationMathod);
console.log(seaTransporterByFedEx.transportation());

console.log(``);

const airTransporterByFedEx = new FedEx(airTransportationMathod);
console.log(airTransporterByFedEx.transportation());
