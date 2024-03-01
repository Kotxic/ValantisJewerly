import md5 from "md5";
import axios from "axios";

export default class API{
    static async postData(data){
        const apiUrl = 'https://api.valantis.store:41000/';
        const password = 'Valantis';
        const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const xAuth = md5(`${password}_${timestamp}`);
        const headers = {
            'X-Auth': xAuth,
            'Content-Type': 'application/json' // Установите соответствующий Content-Type для вашего запроса
        };
        try {
            const response = await axios.post(apiUrl, data, { headers });
            return response.data


        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }

    }



}
