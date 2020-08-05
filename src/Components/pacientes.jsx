import React, { Component } from "react";
import { Link } from "react-router-dom";
import PacientesTable from "./PacientesTable";
import _ from "lodash";
import SearchBox from "./searchBox";
import { deletePaciente, getPacientes } from "../Services/PacienteService";
import { paginate } from "./../Services/paginate";
import Pagination from "./pagination";
import NavBar from "./NavBar";

class Pacientes extends Component {
  state = {
    pacientes: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data: pacientes } = await getPacientes();
    this.setState({ pacientes });
  }

  handleDelete = async (paciente) => {
    const originalPacientes = this.state.pacientes;
    const pacientes = originalPacientes.filter(
      (p) => p._id !== paciente.IdPaciente
    );
    this.setState({ pacientes });

    try {
      await deletePaciente(paciente.IdPaciente);
      alert("Paciente eliminado correctamente");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("x");
        alert("Este paciente no se puede eliminar");
        this.setState({ pacientes: originalPacientes });
      }
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      pacientes: allPacientes,
    } = this.state;

    let filtered = allPacientes;
    if (searchQuery)
      filtered = allPacientes.filter((p) =>
        p.Nombre.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const pacientes = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: pacientes };
  };

  render() {
    const { length: count } = this.state.pacientes;
    const { sortColumn, searchQuery, pageSize, currentPage } = this.state;

    if (count === 0) return <p>No hay pacientes en la tabla.</p>;

    const { totalCount, data: pacientes } = this.getPagedData();

    return (
      <React.Fragment>
        <NavBar />
        <div className="row">
          <div className="col">
            <Link
              to="/pacientes/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              Nuevo Paciente
            </Link>
            <p>Mostrando {totalCount} pacientes en la base de datos.</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <PacientesTable
              pacientes={pacientes}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pacientes;
