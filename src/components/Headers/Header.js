import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
// import { Container } from "reactstrap";

import { withRouter } from "react-router-dom";

import qs from "querystring";
import { getAllBooksByStatusActionCreator } from "redux/actions/books";
import { getAllTransactionsActionCreator } from "redux/actions/transaction";
import { getAllUsersActionCreator } from "redux/actions/user";
import { connect } from "react-redux";

class Header extends React.Component {
  _getAllBooks = async () => {
    const reqData = {
      status: "accepted",
      limit: 100,
    };
    await this.props.getAllBooksByStatusAction(qs.stringify(reqData));
  };

  _getAllTransactions = async (token) => {
    await this.props.getAllTransactionsAction(token);
  };

  _getAllUsers = async (token) => {
    await this.props.getAllUsersAction(token);
  };
  componentDidMount = () => {
    const user = localStorage.getItem("_user");
    if (!user || user === null || user === undefined) {
      this.props.history.push("/auth");
    } else {
      const userVal = JSON.parse(user);
      const { token } = userVal;
      this._getAllBooks();
      this._getAllTransactions(token);
      this._getAllUsers(token);
    }
  };
  render() {
    const { books, transactions, users } = this.props;
    return (
      <>
        <div className="header bg-gradient-info py-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 pb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Transactions
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {transactions.transactions.length}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 pb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {users.users.length}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 pb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Books
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {books.paginationByStatus.totalData}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i className="fas fa-book" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ books, users, transactions }) => {
  return {
    books,
    users,
    transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBooksByStatusAction: (reqData) => {
      dispatch(getAllBooksByStatusActionCreator(reqData));
    },
    getAllTransactionsAction: (token) => {
      dispatch(getAllTransactionsActionCreator(token));
    },
    getAllUsersAction: (token) => {
      dispatch(getAllUsersActionCreator(token));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
