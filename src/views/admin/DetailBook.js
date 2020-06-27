import React, { Component } from "react";

// reactstrap components
import { Card, CardHeader, Container, Row, CardBody } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { URL_API } from "utils/http";

class DetailBooks extends Component {
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
                  <iframe
                    // style={{ height: "750px" }}
                    title="have fun"
                    src={
                      "http://3.92.162.78:8080/ebook/file_ebook-1592930529518.pdf"
                    }
                    key="45"
                  ></iframe>
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
