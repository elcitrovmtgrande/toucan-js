import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

export class Toucan {

  private value: input;
  private config: config;
  private token: string = '';
  private data: payload = { iat: -1, exp: 0, };
  private is_jwt: boolean = false;
  private is_valid: boolean = false;
  private default_secret: string = 'We love Toucan !';
  private default_expiresIn: number = 3600;


  constructor(value: input, config: config) {
    this.value = value;
    this.config = config;
    this._init();
  }

  public isAuthentic(): boolean {
    try {
      if (typeof this.token === 'string') {
        const data = jwt.verify(this.token, this.config?.secret || this.default_secret);
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
    if (this.data?.exp && this.data.exp > this._10(new Date().getTime())) {
      this.is_valid = true;
      return this.is_valid;
    }
    this.is_valid = false;
    return this.is_valid;
  }

  public isExpired(): boolean {
    if (this.data?.exp && this.data.exp > this._10(new Date().getTime())) {
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
    const _e: string = `[${new Date().toJSON()}:Toucan] >>> Oh no ! Toucan can only read real tokens... (provided value: ${this.value})`;
    // If initial param is a JWT
    if (typeof this.value === 'string') {
      try {
        const data = jwtDecode(this.value);
        if (data && typeof data === 'object') {
          this.data = data as payload;
          this.token = this.value;
          this.is_jwt = true;
          if (this.data?.exp && this.data.exp > this._10(new Date().getTime())) {
            this.is_valid = true;
          }
        }
      } catch (e) {
        console.log(_e);
        throw new Error(_e);
      }
    } else if (typeof this.value === 'object') {
      const token = jwt.sign(this.value, this.config?.secret || this.default_secret, { expiresIn: this.config?.expiresIn || this.default_expiresIn });
      const data = jwtDecode(token) as payload;
      this.token = token;
      this.data = data;
      this.is_jwt = true;
    } else {
      const error = `[${new Date().toJSON()}:Toucan] >>> Oh no ! Toucan can only read real tokens... (provided value: ${this.value})`;
      console.log(_e);
      throw new Error(_e);
    }
  }

  private _10(number: number): number {
    const numAsString = number.toString();
    const firstTenDigits = numAsString.slice(0, 10);
    return parseInt(firstTenDigits, 10);
  }
}

export type payload = {
  [key: string]: any;
} & {
  iat?: number;
  exp?: number;
};;

export type input = string | payload;

export type config = {
  expiresIn?: number;
  secret?: string;
}

export default Toucan;
