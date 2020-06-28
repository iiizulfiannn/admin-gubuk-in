import React, { Component } from "react";

// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

import { connect } from "react-redux";
// import book from "redux/reducers/authReducer";

class Transactions extends Component {
  render() {
    const { books, users, transactions } = this.props;

    const DataTransactions = transactions.transactions.map((trans, index) => {
      const timeStamp = trans.created_at.split("T");
      const date = timeStamp[0];
      const time = timeStamp[1].split(".")[0];
      const book = books.booksByStatus.filter((book) => {
        return book.id === trans.id_book;
      });
      const buyer = users.users.filter((user) => {
        return user.id === trans.id_buyer;
      });
      const seller = users.users.filter((user) => {
        return user.id === trans.id_seller;
      });
      return (
        <tr key={index}>
          <td>{trans.id}</td>
          <td className={!book[0] ? "text-danger" : ""}>
            {book[0] ? book[0].title : "Rejected"}
          </td>
          <td>{buyer[0] ? buyer[0].name : ""}</td>
          <td>{seller[0] ? seller[0].name : ""}</td>
          <td
            className={
              trans.status === "Belum Dibayar" ? "text-danger" : "text-success"
            }
          >
            {trans.status}
          </td>
          <td>{`${time} ${date}`}</td>
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
                  <h3 className="mb-0">Transactions</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Book</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Seller</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                    </tr>
                  </thead>
                  <tbody>{DataTransactions}</tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ books, transactions, users }) => {
  return {
    books,
    transactions,
    users,
  };
};

export default connect(mapStateToProps)(Transactions);
