import Error from "./error";

interface ApiResponse<T> {
    status: "ok" | "error";
    error?:  Error,
    meta: { count: number },
    data: T
}

export default ApiResponse;