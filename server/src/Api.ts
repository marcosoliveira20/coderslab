import axios from 'axios';

class Api {

    public user = axios.create({
        baseURL: "localhost:1000",
    });

    public unionUserGroup = axios.create({
        baseURL: "localhost:2000",
    });

    public group = axios.create({
        baseURL: "localhost:3000",
    });

    public schedule = axios.create({
        baseURL: "localhost:4000",
    });

    public interests = axios.create({
        baseURL: "localhost:5000",
    });

    public subject = axios.create({
        baseURL: "localhost:6000",
    });

    public roadmap = axios.create({
        baseURL: "localhost:7000",
    });

    public content = axios.create({
        baseURL: "localhost:8000",
    });

    public challenge = axios.create({
        baseURL: "localhost:9000",
    });
}

export default Api;