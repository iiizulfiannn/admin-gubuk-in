import React, { Component } from "react";

// reactstrap components
import { Card, CardHeader, Container, Row, CardBody, Button } from "reactstrap";
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
                  <h2>Title</h2>
                  <h4>Cateogry</h4>
                  <h4>
                    <em>Author</em>
                  </h4>
                  <p>Price</p>
                  <p>Description</p>
                  <Row
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Button color="success">Accept</Button>
                    <Button color="danger">Reject</Button>
                  </Row>
                  <iframe
                    style={{ width: "100%", height: "100vh" }}
                    title="have fun"
                    src={`${URL_API}/ebook/file_ebook-1592930529518.pdf`}
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
