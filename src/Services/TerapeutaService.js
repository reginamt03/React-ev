import { apiUrl } from "../config.json";
import http from "./HttpService";

const apiEndpoint = apiUrl + "/Terapeuta";

function terapeutaUrl(id) {
  return `${apiEndpoint}/${id}`;
}

function nuevoTerapeutaUrl(nombre, aP, aM, tel, fecha) {
  return `${apiEndpoint}/new?n=${nombre}&apP=${aP}&apM=${aM}&tel=${tel}&fn=${fecha}`;
}

function modificarTerapeutaUrl(id, nombre, aP, aM, tel, fecha) {
  return `${apiEndpoint}/update?id=${id}&n=${nombre}&apP=${aP}&apM=${aM}&tel=${tel}&fn=${fecha}`;
}

export function getTerapeutas() {
  return http.get(apiEndpoint);
}

export function getTerapeuta(terapeutaId) {
  return http.get(terapeutaUrl(terapeutaId));
}

export function saveTerapeuta(teraputa) {
  if (teraputa.idTerapeuta) {
    const body = { ...teraputa };
    delete body.idTerapeuta;
    const nuevaUrl = modificarTerapeutaUrl(
      teraputa.idTerapeuta,
      teraputa.nombre,
      teraputa.apellidoPaterno,
      teraputa.apellidoMaterno,
      teraputa.telefono,
      teraputa.fechaNacimiento
    );
    return http.put(nuevaUrl);
  }
  const nuevaUrl = nuevoTerapeutaUrl(
    teraputa.nombre,
    teraputa.apellidoPaterno,
    teraputa.apellidoMaterno,
    teraputa.telefono,
    teraputa.fechaNacimiento
  );
  return http.put(nuevaUrl);
}

export function deleteTerapeuta(terapeutaId) {
  return http.delete(terapeutaUrl(terapeutaId));
}
