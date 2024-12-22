declare module 'paapi5-nodejs-sdk' {
  export class ApiClient {
    accessKey: string;
    secretKey: string;
  }

  export class DefaultApi {
    constructor(client: ApiClient);
    searchItems(request: any): Promise<any>;
  }
}
