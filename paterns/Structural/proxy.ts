interface IServiceInterface {
  operation(status: string): void;
}

class Service implements IServiceInterface {
  public operation(status: string): void {
    console.log(`"${status}" welcom to the Servise.`);
  }
}

class ProxyService implements IServiceInterface {
  private realService: Service;

  constructor(realService: Service) {
    this.realService = realService;
  }
  operation(status: string): void {
    if (status == 'admin') {
      this.realService.operation(status);
    } else {
      console.log(`"${status}" access is denied`);
    }
  }
}

const service = new Service();
const proxyServise = new ProxyService(service);

proxyServise.operation('admin');
proxyServise.operation('user');
