import React from "react";

// reactstrap components
import {
  Button,
  Card,
  // CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  // Row,
  Col,
} from "reactstrap";
import { addAuthCreator } from "redux/actions/auth";
import { connect } from "react-redux";
import { postLogin } from "utils/http";
import qs from "querystring";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWrong: false,
      isEmpty: false,
      email: "",
      password: "",
      isLoading: false,
    };
  }

  _submit = () => {
    this.setState({
      isWrong: false,
      isEmpty: false,
    });
    if (this.state.email === "" || this.state.password === "") {
      this.setState({
        isEmpty: true,
      });
    } else {
      this.setState({
        isEmpty: false,
        isWrong: false,
      });
      const data = {
        email: this.state.email,
        password: this.state.password,
      };
      this.setState({ isLoading: true });
      this._login(data);
    }
  };

  _login = async (data) => {
    await postLogin(qs.stringify(data))
      .then((res) => {
        this.setState({ isLoading: false });
        const { token, refreshToken, email } = res.data.data;
        const user = res.data.data;
        localStorage.setItem("_user", JSON.stringify(user));
        this.props.addAuth({ token, email, refreshToken, user });
        this.props.history.push("/admin/index");
      })
      .catch((err) => {
        this.setState({
          isWrong: true,
        });
        console.log(err);
      });
  };

  _changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  _changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      style={{ color: "#000" }}
                      onChange={this._changeEmail}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      style={{ color: "#000" }}
                      onChange={this._changePassword}
                    />
                  </InputGroup>
                </FormGroup>
                {this.state.isLoading && (
                  <p className="text-primary">Loading....</p>
                )}
                {this.state.isWrong && (
                  <p className="text-danger">*Email or password went wrong!</p>
                )}
                {this.state.isEmpty && (
                  <p className="text-danger">*Email or password empty!</p>
                )}
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={this._submit}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAuth: (body) => {
      dispatch(addAuthCreator(body));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
