export type Code = 402 | 404 | 405 | 407 | 504;

interface Error {
    code: Code
    message: string;
    field: string;
    value: string;
}

export default Error;