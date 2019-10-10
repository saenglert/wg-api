export type Code = 402 | 404 | 405 | 407 | 504;

export interface Error {
    code: Code;
    message: string;
    field: string;
    value: string;
}
