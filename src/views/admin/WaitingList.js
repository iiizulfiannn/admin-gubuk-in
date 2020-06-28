import React, { Component } from "react";
import qs from "querystring";

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
// import { URL_API } from "utils/http";

class WaitingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "waiting", //waiting, rejected, approved
    };
  }

  componentDidMount = async () => {
    const requestData = {
      // page: 1,
      sort: true,
      // status: "waiting",
      value: "created_at",
      // limit: 5,
    };
    await this.props.getAllBooksAction(qs.stringify(requestData));
  };

  render() {
    const { books } = this.props;

    const dataBook = books.books.map((book, index) => {
      return (
        <tr key={index}>
          <td>{book.id}</td>
          <td>{book.id_user}</td>
          <td>{book.title}</td>
          <td
            className={
              book.status === "waiting"
                ? "text-warning"
                : book.status === "rejected"
                ? "text-danger"
                : "text-success"
            }
          >
            {book.status}
          </td>
          <td>{book.created_at}</td>
          <td>
            <Button
              color="info"
              onClick={() => this.props.history.push(`/admin/book/${book.id}`)}
            >
              Detail
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
                      <th scope="col">Title</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>{dataBook}</tbody>
                </Table>
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
