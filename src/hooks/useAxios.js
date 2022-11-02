import {API_URL,API_KEY} from "../config/config";
import {useEffect, useState} from "react";
import {API} from "../api/api";

export function useAxios(apiUrl) {
    const [data, setData] = useState(null);
    const fetchUrl = async () => {
        const res = await API.get(apiUrl)
        setData(res.data.results);
    }
    useEffect(() => {
        fetchUrl().then();
    }, [])

    return {
    data,
}

}