//import { apiUrl } from "../config.json";
//import http from "./HttpService";

//const apiEndpoint = apiUrl + "/Login";

export function login(user, password) {
  // http
  //   .get(apiEndpoint, { user, password })
  fetch(`https://localhost:44333/api/Login?user=${user}&pass=${password}`)
    .then((res) => res.json())
    .then((data) => {
      if (data > 0) {
        window.location = "/home";
      } else {
        alert("Usuario y/o contraseña inválidos");
      }
    });
}
