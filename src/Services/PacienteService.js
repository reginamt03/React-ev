import { apiUrl } from "../config.json";
import http from "./HttpService";

const apiEndpoint = apiUrl + "/Paciente";

function pacienteUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPacientes() {
  return http.get(apiEndpoint);
}

export function getPaciente(pacienteId) {
  return http.get(pacienteUrl(pacienteId));
}

export function savePaciente(paciente) {
  if (paciente._id) {
    const body = { ...paciente };
    delete body._id;
    return http.put(pacienteUrl(paciente._id), body);
  }

  return http.post(apiEndpoint, paciente);
}

export function deletePaciente(pacienteId) {
  return http.delete(pacienteUrl(pacienteId));
}
