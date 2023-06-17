import fetch from 'node-fetch';

import type { BakalariEndpoint, BakalariAuthInfo } from './typings/auth';
import type { AuthResponse } from './typings/api';

export class BakalariClient {
  private endpoint: BakalariEndpoint | null;
  private auth: AuthResponse | null = null;

  public constructor() {
    this.endpoint = null;
  }

  public setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  public async login(authInfo: BakalariAuthInfo): Promise<boolean> {
    try {
      const res = await fetch(`${this.endpoint}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `client_id=ANDR&grant_type=password&username=${authInfo.username}&password=${authInfo.password}`,
      });
      this.auth = (await res.json()) as AuthResponse;
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
