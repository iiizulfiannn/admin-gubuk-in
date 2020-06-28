import React, { Component } from "react";

// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { URL_API } from "utils/http";
import { connect } from "react-redux";
import avatar from "../../assets/img/avatar.jpg";

class Users extends Component {
  render() {
    const { users } = this.props;

    const DataUser = users.users.map((user, index) => {
      const timeStamp = user.created_at.split("T");
      const date = timeStamp[0];
      const time = timeStamp[1].split(".")[0];
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>
            <img
              alt="..."
              src={
                user.image_profile === null
                  ? avatar
                  : user.image_profile.slice(0, 13) === "image_profile"
                  ? `${URL_API}/imageProfile/${user.image_profile}`
                  : user.image_profile
                  ? user.image_profile
                  : user.image_profile === (undefined || null || "" || -1)
                  ? avatar
                  : avatar
              }
              width={50}
              style={{ borderRadius: "50px" }}
            />
          </td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role === 0 || user.role === 2 ? "User" : "Admin"}</td>
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
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Created At</th>
                    </tr>
                  </thead>
                  <tbody>{DataUser}</tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Users);
