import React, { Component } from "react";
import qs from "querystring";
import "../../styles/pagination.css";

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  // NavLink,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { getAllBooksActionCreator } from "redux/actions/books";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import Loading from "components/Loading";
import { URL_API } from "utils/http";
import { deleteBookById } from "utils/http";
// import { URL_API } from "utils/http";

class WaitingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: false,
      value: "created_at",
      page: 1,
      limit: 12,
      // status: "waiting",
    };
  }

  getAllBooks = async (newRequestData) => {
    const requestData = {
      sort: this.state.sort,
      value: this.state.value,
      page: this.state.page,
      limit: this.state.limit,
    };
    await this.props.getAllBooksAction(
      qs.stringify(this.state.page === 1 ? requestData : newRequestData)
    );
  };

  componentDidMount = () => {
    this.getAllBooks();
  };

  handlePageClick = (value) => {
    const page = parseInt(value.selected) + 1;
    this.setState(
      {
        page,
      },
      () => {
        const requestData = {
          sort: this.state.sort,
          value: this.state.value,
          page: this.state.page,
          limit: this.state.limit,
        };
        this.getAllBooks(requestData);
      }
    );
  };

  _deleteBookById = async (id) => {
    const user = JSON.parse(localStorage.getItem("_user"));
    await deleteBookById(id, user.token)
      .then((res) => this.getAllBooks())
      .catch((err) => console.log(err));
  };

  render() {
    const { books } = this.props;

    const dataBook = books.books.map((book, index) => {
      const timeStamp = book.created_at.split("T");
      const date = timeStamp[0];
      const time = timeStamp[1].split(".")[0];
      return (
        <tr key={index}>
          <td>{book.id}</td>
          <td className="capitalize">{book.user}</td>
          <td>
            <img
              src={`${URL_API}/image/${book.image}`}
              alt={book.title}
              style={{ width: "50px" }}
            />
          </td>
          <td className="capitalize">{book.title}</td>
          <td
            className={
              book.status === "waiting"
                ? "text-info capitalize"
                : book.status === "rejected"
                ? "text-danger capitalize"
                : "text-success capitalize"
            }
          >
            {book.status}
          </td>
          <td>{`${time} ${date}`}</td>
          <td>
            <Button
              color="info"
              onClick={() =>
                this.props.history.push({
                  pathname: `/admin/book/${book.id}`,
                  state: books.books.filter(
                    (bookDetail) => bookDetail.id === book.id
                  ),
                })
              }
            >
              Detail
            </Button>
            <Button
              color="danger"
              onClick={() => this._deleteBookById(book.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Waiting List</h3>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">User</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.isRejected && <p>Data not found</p>}
                    {books.isFulfilled && dataBook}
                  </tbody>
                </Table>
                {books.isLoading && <Loading />}
                <Row className="py-5">
                  <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={books.pagination.totalPage}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </Row>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBooksAction: (requestData) => {
      dispatch(getAllBooksActionCreator(requestData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingList);
