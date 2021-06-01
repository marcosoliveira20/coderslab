import axios from 'axios';

class Api {

    public user = axios.create({
        baseURL: "http://localhost:9001/user",
    });

    public unionUserGroup = axios.create({
        baseURL: "http://localhost:2000/unionUserGroup",
    });

    public group = axios.create({
        baseURL: "http://localhost:3000/group",
    });

    public schedule = axios.create({
        baseURL: "http://localhost:4000/schedule",
    });

    public interests = axios.create({
        baseURL: "http://localhost:5000/interest",
    });

    public subject = axios.create({
        baseURL: "http://localhost:6000/subject",
    });

    public roadmap = axios.create({
        baseURL: "http://localhost:7000/roadmap",
    });

    public content = axios.create({
        baseURL: "http://localhost:8000/content",
    });

    public challenge = axios.create({
        baseURL: "http://localhost:9000/challenge",
    });
}

export default Api;