import axios from 'axios';

class Api {

    public user = axios.create({
        baseURL: "http://localhost:1000",
    });

    public unionUserGroup = axios.create({
        baseURL: "http://localhost:2000",
    });

    public group = axios.create({
        baseURL: "http://localhost:3000",
    });

    public schedule = axios.create({
        baseURL: "http://localhost:4000",
    });

    public interests = axios.create({
        baseURL: "http://localhost:5000",
    });

    public subject = axios.create({
        baseURL: "http://localhost:6000",
    });

    public roadmap = axios.create({
        baseURL: "http://localhost:7000",
    });

    public content = axios.create({
        baseURL: "http://localhost:8000",
    });

    public challenge = axios.create({
        baseURL: "http://localhost:9000",
    });
}

export default Api;