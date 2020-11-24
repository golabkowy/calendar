// jaka jest roznica między importem z klamrami a bez lol ni mom pojęcia
import axios from 'axios';

class HttpService {

    //Facade for axios
    static doPost(endpoint, data) {
        axios.post(`http://localhost:3030/${endpoint}`, data)
            .then((response) => {
                console.log("POST request succeed " + response);
            }).catch((error) => {
            console.log("POST request error " + error)
        });
    }

    static async doGet(endpoint) {
        axios.get(`http://localhost:3030/${endpoint}`)
            .then((response) => {
                console.log("GET request succeed");
            })
            .catch((error) => {
                console.log("GET request error  " + error);
            });
    }

    static async doGetPromise(endpoint) {
        return axios.get(`http://localhost:3030/${endpoint}`)
    }

    static doDelete(data, endpoint) {

    }

    static doPut(data, endpoint) {

    }
}

export default HttpService;
