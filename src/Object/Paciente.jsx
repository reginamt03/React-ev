const pacientes = [{}];

export function getPacientes() {
  fetch("https://localhost:44333/api/Vista1/GetPaciente")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ pacientes: data });
    });
  return pacientes;
}

export function getPaciente(id) {
  return pacientes.find((p) => p.id === pacientes.id);
}

export function savePaciente(paciente) {
  let pacienteDb = pacientes.find((p) => p.id === paciente.id) || {};
  pacienteDb.nombre = paciente.nombre;
  pacienteDb.apPaterno = paciente.apPaterno;
  pacienteDb.apMaterno = paciente.apMaterno;
  pacienteDb.telefono = paciente.telefono;
  pacienteDb.FechaNacimiento = paciente.FechaNacimiento;
  pacienteDb.FechaInscripcion = paciente.FechaInscripcion;

  if (!pacienteDb.id) {
    pacienteDb.id = 6;
    pacientes.push(pacienteDb);
  }

  return pacienteDb;
}

export function deletePaciente(id) {
  let pacienteDb = pacientes.find((p) => p.id === id);
  pacientes.splice(pacientes.indexOf(pacienteDb), 1);
  return pacienteDb;
}
