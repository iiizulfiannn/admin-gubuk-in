import React from "react";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />

        <main ref="main">
          <div
            className="position-relative"
            style={{
              backgroundImage:
                "url(" + require("assets/img/image/bg12.jpg") + ")",
              backgroundSize: "cover",
              height: "90vh",
            }}
          >
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default"></div>
              <Container
                className="py-lg-md d-flex"
                style={{
                  height: "70vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="col px-0">
                  <Row>
                    <Col lg="12 text-center" style={{ paddingTop: 150 }}>
                      <h1 className="display-3 text-white font-weight-bold">
                        Bersama Kita Berantas Kelaparan Pengetahuan
                      </h1>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section
            className="section section-lg pt-lg-0"
            style={{ marginTop: 100 }}
          >
            <Container>
              <Row className="justify-content-center">
                <h1 style={{ marginBottom: 50, color: "#2469EF" }}>
                  Layanan Unggulan yang Kami Berikan
                </h1>
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div
                            className="rounded-circle text-center"
                            style={{ fontSize: 70, color: "#2469EF" }}
                          >
                            <i className="fas fa-mobile-alt"></i>
                          </div>
                          <h4 className="text-primary text-center">
                            Pengembangan Aplikasi
                          </h4>

                          <p className="description text-center">
                            Jika Anda harus mengembangkan aplikasi seluler, ini
                            adalah waktu yang paling tepat.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div
                            className="rounded-circle text-center"
                            style={{ fontSize: 70, color: "#2469EF" }}
                          >
                            <i className="fas fa-trophy"></i>
                          </div>
                          <h4 className="text-primary text-center">
                            Desain UI / UX
                          </h4>

                          <p className="description text-center">
                            Kami menyediakan Desain UI / UX terbaik dengan
                            mengikuti tren pasar terkini.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div
                            className="rounded-circle text-center"
                            style={{ fontSize: 70, color: "#2469EF" }}
                          >
                            <i className="far fa-comment-dots"></i>
                          </div>
                          <h4 className="text-primary text-center">
                            Tugas Wireframing
                          </h4>

                          <p className="description text-center">
                            Kami menghormati pendapat pelanggan kami dan
                            mengatasinya.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg" style={{ marginTop: 100 }}>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="8">
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: 40,
                      color: "#2469EF",
                    }}
                  >
                    Gubuk-In
                  </h3>
                  <p>
                    Aplikasi GubukIn, adalah sebuah aplikasi penyedia buku buku
                    pengetahuan....
                  </p>
                  <Button
                    color="info"
                    style={{ fontSize: 15, backgroundColor: "#2469EF" }}
                  >
                    Download
                  </Button>
                </Col>

                <Col className="order-md-1" md="4">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/image/hp.png")}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg" style={{ marginTop: 100 }}>
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3" style={{ color: "#2469EF" }}>
                    Ini Tim Kami
                  </h2>
                </Col>
              </Row>
              <br />
              <br />
              <br />
              <Row>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/image/regasiip.jpeg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title" style={{ fontSize: 20 }}>
                        <span
                          className="d-block mb-1"
                          style={{ color: "black" }}
                        >
                          Rega
                        </span>
                        <h6 className="text-muted" style={{ fontSize: 15 }}>
                          Frontend Developer
                        </h6>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://www.linkedin.com/in/rega-aji-prayogo-4144a4169/";
                          }}
                        >
                          <i
                            className="fab fa-linkedin"
                            style={{ color: "white" }}
                          ></i>
                        </Button>

                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "https://github.com/regaaji";
                          }}
                        >
                          <i
                            className="fab fa-github"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/image/redi.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title" style={{ fontSize: 20 }}>
                        <span
                          className="d-block mb-1"
                          style={{ color: "black" }}
                        >
                          Redi
                        </span>
                        <h6 className="text-muted" style={{ fontSize: 15 }}>
                          Full Stack Developer
                        </h6>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://www.instagram.com/redi_rmdn/";
                          }}
                        >
                          <i
                            className="fab fa-instagram"
                            style={{ color: "white" }}
                          ></i>
                        </Button>

                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://www.linkedin.com/in/redi-ramdan-08b077199/";
                          }}
                        >
                          <i
                            className="fab fa-linkedin"
                            style={{ color: "white" }}
                          ></i>
                        </Button>

                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://github.com/rediramdan";
                          }}
                        >
                          <i
                            className="fab fa-github"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/image/fian4.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title" style={{ fontSize: 20 }}>
                        <span
                          className="d-block mb-1"
                          style={{ color: "black" }}
                        >
                          Zulfian
                        </span>
                        <h6 className="text-muted" style={{ fontSize: 15 }}>
                          Frontend Developer
                        </h6>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              " https://github.com/iiizulfiannn";
                          }}
                        >
                          <i
                            className="fab fa-github"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <br />
              <br />
              <Row>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/image/vikra3.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title" style={{ fontSize: 20 }}>
                        <span
                          className="d-block mb-1"
                          style={{ color: "black" }}
                        >
                          Vikra
                        </span>
                        <h6 className="text-muted" style={{ fontSize: 15 }}>
                          Backend Developer
                        </h6>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://github.com/Vikraardiansyah/";
                          }}
                        >
                          <i
                            className="fab fa-github"
                            style={{ color: "white" }}
                          ></i>
                        </Button>

                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://www.instagram.com/vikraardiansyah/";
                          }}
                        >
                          <i
                            className="fab fa-instagram"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/image/dwiky.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title" style={{ fontSize: 20 }}>
                        <span
                          className="d-block mb-1"
                          style={{ color: "black" }}
                        >
                          Dwiky
                        </span>
                        <h6 className="text-muted" style={{ fontSize: 15 }}>
                          Backend Developer
                        </h6>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://www.instagram.com/dwikysh/";
                          }}
                        >
                          <i
                            className="fab fa-instagram"
                            style={{ color: "white" }}
                          ></i>
                        </Button>

                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://github.com/dwikysahut";
                          }}
                        >
                          <i
                            className="fab fa-github"
                            style={{ color: "white" }}
                          ></i>
                        </Button>

                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://github.com/rediramdan";
                          }}
                        >
                          <i
                            className="fab fa-github"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/image/ryan.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title" style={{ fontSize: 20 }}>
                        <span
                          className="d-block mb-1"
                          style={{ color: "black" }}
                        >
                          Ichlas
                        </span>
                        <h6 className="text-muted" style={{ fontSize: 15 }}>
                          Backend Developer
                        </h6>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://github.com/chlasswg26";
                          }}
                        >
                          <i
                            className="fab fa-github"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://www.instagram.com/ichlaswardy";
                          }}
                        >
                          <i
                            className="fab fa-instagram"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          style={{ backgroundColor: "#2469EF" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://www.facebook.com/jr.woles";
                          }}
                        >
                          <i
                            className="fab fa-facebook"
                            style={{ color: "white" }}
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>

        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
