/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosConfig = {
    baseURL: "https://some-domain.com/api/",
    timeout: 6000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

class HttpServiceReq {
    async get(url: string, config?: any): Promise<AxiosResponse> {
        const data = await instance.get(url, config).then((data) => data);
        return data;
    }

    async post(url: string, payload: any, config?: any): Promise<AxiosResponse> {
        const data = await instance.post(url, payload, config).then((data) => data);
        return data;
    }

    async put(url: string, payload: any, config?: any): Promise<AxiosResponse> {
        const data = await instance.put(url, payload, config).then((data) => data);
        return data;
    }

    async delete(url: string, config?: any): Promise<AxiosResponse> {
        const data = await instance.delete(url, config).then((data) => data);
        return data;
    }
}

const httpReq = new HttpServiceReq();

export default httpReq;
