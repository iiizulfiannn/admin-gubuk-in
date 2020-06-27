import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  NavLink,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { URL_API } from "utils/http";

class WaitingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "waiting",
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
                  <h3 className="mb-0">Waiting List</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">User</th>
                      <th scope="col">Title</th>
                      <th scope="col">Image</th>
                      <th scope="col">File PDF</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Author</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ridwan Dermawan</td>
                      <td>Mission Imposibble</td>
                      <td>
                        <img
                          alt="..."
                          src={`${URL_API}/image/image-1592930525588.jpg`}
                          width={50}
                        />
                      </td>
                      <td>
                        <NavLink
                          href={`${URL_API}/ebook/file_ebook-1592930529518.pdf`}
                          target="_blank"
                        >
                          file_ebook-1592930529518.pdf
                        </NavLink>
                      </td>
                      <td>A e-book from John ...</td>
                      <td>Actions</td>
                      <td>John Lenon</td>
                      <td>Rp. 33.500,-</td>
                      <td
                        className={
                          this.state.status === "waiting"
                            ? "text-danger"
                            : "text-success"
                        }
                      >
                        Waiting
                      </td>
                      <td>20:54 22/06/2020</td>
                      <td>
                        <Button color="success">Accept</Button>
                        <Button color="danger">Reject</Button>
                      </td>
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

export default WaitingList;
