import Error from "./error";

interface Response<T> {
    status: "ok" | "error";
    error?: Error;
    meta: { count: number };
    data: T;
}

export default Response;
