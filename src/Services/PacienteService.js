import { apiUrl } from "../config.json";
import http from "./HttpService";

const apiEndpoint = apiUrl + "/Paciente";

function pacienteUrl(id) {
  return `${apiEndpoint}/${id}`;
}

function nuevoPacienteUrl(nombre, aP, aM, tel, fecha) {
  return `${apiEndpoint}/new?n=${nombre}&apP=${aP}&apM=${aM}&tel=${tel}&fn=${fecha}`;
}

export function getPacientes() {
  return http.get(apiEndpoint);
}

export function getPaciente(pacienteId) {
  return http.get(pacienteUrl(pacienteId));
}

export function savePaciente(paciente) {
  const nuevaUrl = nuevoPacienteUrl(
    paciente.nombre,
    paciente.apellidoPaterno,
    paciente.apellidoMaterno,
    paciente.telefono,
    paciente.fechaNacimiento
  );
  return http.put(nuevaUrl);
}

export function deletePaciente(pacienteId) {
  return http.delete(pacienteUrl(pacienteId));
}
