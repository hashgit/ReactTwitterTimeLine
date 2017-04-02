import axios from "axios";

export function Login(data) {
    return {
        type: "LOGIN",
        payload: axios.post(
            "http://localhost:5000/token",
            data)
    }
}
