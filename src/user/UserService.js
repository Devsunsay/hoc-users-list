import Axios from "axios";
import {userApiUrl} from "../constants";

export const getUsers = () => {
    return Axios.get( userApiUrl).then(
        //
        res => res.data
    );
};

export const getUser = async id => {
    const res = await Axios.get(userApiUrl + id);
    return res.data;
};