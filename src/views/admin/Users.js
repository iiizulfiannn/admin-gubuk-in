import React, { Component } from "react";

// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { URL_API } from "utils/http";
import { getAllUsers } from "utils/http";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "waiting",
    };
  }

  componentDidMount = async () => {
    const user = JSON.parse(localStorage.getItem("_user"));
    await getAllUsers(user.token)
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
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>

                      <td>
                        <img
                          alt="..."
                          src={`${URL_API}/image/image-1592930525588.jpg`}
                          width={50}
                          style={{ borderRadius: "50px" }}
                        />
                      </td>
                      <td>Bagus Pratama</td>
                      <td>bagus@example.com</td>
                      <td>User</td>
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

export default Users;
