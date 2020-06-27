import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  CardBody,
  // NavLink,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { URL_API } from "utils/http";

class DetailBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "waiting", //waiting, rejected, approved
    };
  }
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
                  <Row
                    onClick={() => this.props.history.push("/admin/index")}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="mb-0 ml-4">
                      <i className=" ni ni-bold-left" />
                    </div>
                    <h3 className="mb-0 ml-4">Dashboard</h3>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p>Haaai semuanya</p>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default DetailBooks;
