import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchBox from "./searchBox";
import { paginate } from "../Services/paginate";
import Pagination from "./pagination";
import NavBar from "./NavBar";
import { getTerapeutas, deleteTerapeuta } from "./../Services/TerapeutaService";
import TerapeutasTable from "./TerapeutasTable";

class Terapeutas extends Component {
  state = {
    terapeutas: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data: terapeutas } = await getTerapeutas();
    this.setState({ terapeutas });
  }

  handleDelete = async (terapeuta) => {
    const originalTerapeutas = this.state.terapeutas;
    const terapeutas = originalTerapeutas.filter(
      (t) => t._id !== terapeuta.IdTerapeuta
    );
    this.setState({ terapeutas });

    try {
      await deleteTerapeuta(terapeuta.IdTerapeuta);
      alert("Terapeuta eliminado correctamente");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("x");
        alert("Este Terapeuta no se puede eliminar");
        this.setState({ terapeutas: originalTerapeutas });
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
      terapeutas: allTerapeutas,
    } = this.state;

    let filtered = allTerapeutas;
    if (searchQuery)
      filtered = allTerapeutas.filter((t) =>
        t.Nombre.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const terapeutas = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: terapeutas };
  };

  render() {
    const { length: count } = this.state.terapeutas;
    const { sortColumn, searchQuery, pageSize, currentPage } = this.state;

    if (count === 0) return <p>No hay terapeutas en la tabla.</p>;

    const { totalCount, data: terapeutas } = this.getPagedData();

    return (
      <React.Fragment>
        <NavBar />
        <div className="row">
          <div className="col">
            <Link
              to="/terapeutas/new/0"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              Nuevo Terapeuta
            </Link>
            <p>Mostrando {totalCount} pacientes en la base de datos.</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <TerapeutasTable
              terapeutas={terapeutas}
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

export default Terapeutas;
