import axios from 'axios';
import { error } from 'node:console';

export const httpClientPlugin = {
    get: async (url:string) => {
        const response = await axios.get(url);
        // const response = await fetch(url);
        return await response;
    },
    post: async(url: string, body: any) => {
        throw new Error("Not implemented");
    },
    put: async(url: string, body: any) => {
        throw new Error("Not implemented");
    },
    delete: async(url: string, body: any) => {
        throw new Error("Not implemented");
    },
};