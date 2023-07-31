import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

export class Toucan {

  private value: input;
  private config: config;
  private token: string = '';
  private data: payload = {
    iat: -1,
    exp: 0,
  };
  private is_jwt: boolean = false;
  private is_valid: boolean = false;

  constructor(value: input, config: config) {
    this.value = value;
    this.config = config;
    this._init();
  }

  public isAuthentic(): boolean {
    try {
      if (typeof this.value === 'string') {
        const data = jwt.verify(this.value, this.config?.secret || 'We love Toucan !');
        if (typeof data === 'object') {
          return true;
        }
        return false;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  public isJWT(): boolean {
    return this.is_jwt;
  }

  public isValid(): boolean {
    if (this.data?.exp > this._10(new Date().getTime())) {
      this.is_valid = true;
      return this.is_valid;
    }
    this.is_valid = false;
    return this.is_valid;
  }

  public isExpired(): boolean {
    if (this.data?.exp > this._10(new Date().getTime())) {
      this.is_valid = true;
      return !this.is_valid;
    }
    this.is_valid = false;
    return !this.is_valid;
  }

  public getInput(): input {
    return this.value;
  }

  public getConfig(): config {
    return this.config;
  }

  public getToken(): string {
    return this.token;
  }

  public getPayload(): payload {
    return this.data;
  }

  private _init(): void {
    if (typeof this.value === 'string') {
      try {
        const data = jwtDecode(this.value);
        if (data && typeof data === 'object') {
          this.data = data as payload;
          this.token = this.value;
          this.is_jwt = true;
          if (this.data?.exp > this._10(new Date().getTime())) {
            this.is_valid = true;
          }
        }
      } catch (e) {
        console.log(`[${new Date().toJSON()}:Toucan] >>> Oh no ! Toucan can only read real tokens... (provided value: ${this.value})`);
      }
    }
    if (typeof this.value === 'object') {
      this.token = jwt.sign(this.value, this.config?.secret || 'We love Toucan !', { expiresIn: this.config?.expiresIn || 3600 });
      this.data = this.value;
      this.is_jwt = true;
    }
  }

  private _10(number: number): number {
    const numAsString = number.toString();
    const firstTenDigits = numAsString.slice(0, 10);
    return parseInt(firstTenDigits, 10);
  }
}

export type payload = {
  [key: string]: any; // N'importe quelle propriété de n'importe quel type
} & {
  iat: number;
  exp: number;
};;

export type input = string | payload;

export type config = {
  expiresIn?: number;
  secret?: string;
}

export default Toucan;
