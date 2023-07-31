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
