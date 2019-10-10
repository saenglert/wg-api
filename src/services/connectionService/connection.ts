import async from "async";
import axios, { AxiosRequestConfig } from "axios";

const worker = async (config: AxiosRequestConfig, callback: (error: Error | null | undefined, ...results: any[]) => void) =>
    axios.request(config)
        .then((response) => callback(null, response.data))
        .catch((error) => callback(error));

export default class Connection {
    private readonly id: string;
    private readonly queue: async.AsyncQueue<AxiosRequestConfig>;

    constructor(hostname: string) {
        this.id = hostname;
        this.queue = async.queue(worker, 1);
    }

    public request = async (config: AxiosRequestConfig): Promise<any> =>
        new Promise((resolve, reject) => {
            const callback = (error: Error | null | undefined, data: any) => error ? reject(error) : resolve(data);
            this.queue.push(config, callback);
        })

    public getId = () => this.id;
}
