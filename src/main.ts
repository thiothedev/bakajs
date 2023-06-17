import type { BakalariEndpoint, BakalariAuthInfo } from './typings/auth';

export class BakalariClient {
  private endpoint: BakalariEndpoint | null;
  private username: BakalariAuthInfo['username'] | null;
  private password: BakalariAuthInfo['password'] | null;

  public constructor() {
    this.endpoint = null;
    this.username = null;
    this.password = null;
  }

  public login(authInfo: BakalariAuthInfo): void {
    this.username = authInfo.username;
    this.password = authInfo.password;

    console.log('Logged in!');
  }
}
