import axios from "axios";

class Api {
  public interests = axios.create({
    baseURL: "http://localhost:5000",
  });

  public subject = axios.create({
    baseURL: "http://localhost:6000",
  });
}

export { Api };
