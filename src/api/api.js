import axios from "axios";
import {API_KEY, API_URL} from "../config/config";

export const API= axios.create({
    baseURL: API_URL,
    params: {
        api_key: API_KEY,
        language: "ko-KR",
    },
});