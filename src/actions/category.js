import api from "../services/api";

const me = async () => {
    try {
        const response = await api.get('/user/me');
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const update = async (data) => {
    try {
        const response = await api.put('/user/update', { data });
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

export default {
    signIn, signUp, me, update
}