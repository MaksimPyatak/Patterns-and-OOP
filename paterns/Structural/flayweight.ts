class SnowflackType {
  private color: string;
  private radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
  }

  public render(leftPos: number, anymation: string): void {
    console.log(
      `Створено блок стилізований під сніжинку кольору ${this.color}, радіусом ${this.radius} що падає на відстані ${leftPos}px від лівого краю з анімацією ${anymation} `
    );
  }
}

class SnowflackFactory {
  private static snowflackTypes: { [key: string]: SnowflackType } = {};

  public static createSnowflackTypesArr(
    arrOfTypeValue: [string, number][]
  ): void {
    arrOfTypeValue.forEach((item) => {
      const key = item[0] + '_' + item[1];
      this.snowflackTypes[key] = new SnowflackType(item[0], item[1]);
    });
  }

  /**
   * getSnowflackType
   */
  public static getSnowflackType(type: string): SnowflackType {
    const [color, radius] = this.getParamWithTypeNmae(type);

    if (!(type in this.snowflackTypes)) {
      this.snowflackTypes[type] = new SnowflackType(color, +radius);
    }
    return this.snowflackTypes[type];
  }

  public static getParamWithTypeNmae(type: string): string[] {
    return type.split('_');
  }
}

class Snowflack {
  private type: SnowflackType;
  private leftPos: number;
  private anymation: string;

  constructor(
    color: string,
    radius: number,
    leftPos: number,
    anymation: string
  ) {
    this.type = SnowflackFactory.getSnowflackType(color + '_' + radius);
    this.leftPos = leftPos;
    this.anymation = anymation;
  }

  /**
   * render
   */
  public render() {
    this.type.render(this.leftPos, this.anymation);
  }
}

class Snawfall {
  private snowflackes: Snowflack[] = [];

  constructor(paramArr: [string, number, number, string][]) {
    this.createsnowflackesArr(paramArr);
  }

  private createsnowflackesArr(paramsArr: [string, number, number, string][]) {
    paramsArr.forEach(([color, radius, leftPos, anymation]) => {
      this.snowflackes.push(new Snowflack(color, radius, leftPos, anymation));
    });
  }

  /**
   * renderSnowfall
   */
  public renderSnowfall() {
    this.snowflackes.forEach((snowflack) => snowflack.render());
  }
}

const paramArr: [string, number, number, string][] = [
  ['white', 6, 20, 'solid'],
  ['red', 4, 50, 'snag'],
];

const snowfall = new Snawfall(paramArr);
snowfall.renderSnowfall();
