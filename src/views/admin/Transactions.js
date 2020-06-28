import React, { Component } from "react";

// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

import { getAllTransaction } from "utils/http";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "waiting",
    };
  }

  componentDidMount = async () => {
    const user = JSON.parse(localStorage.getItem("_user"));
    await getAllTransaction(user.token)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
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
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mission Imposibble</td>
                      <td>Bagus Pratama</td>
                      <td>Ni Made Bagus</td>
                      <td>Belum Dibayar</td>
                      <td>20:54 22/06/2020</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Transactions;
