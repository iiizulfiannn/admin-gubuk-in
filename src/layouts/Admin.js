import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import "../styles/home.css";

import routes from "routes.js";
import { addAuthCreator } from "redux/actions/auth";
import { connect } from "react-redux";

class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Detail Book";
  };
  componentDidMount = () => {
    const user = localStorage.getItem("_user");
    const email = localStorage.getItem("_email");

    if (email !== null) {
      if (user !== null) {
        const userVal = JSON.parse(user);
        const { token, email, refreshToken } = userVal;
        this.props.addAuth({ token, email, refreshToken, user: userVal });
      }
    }

    if (!user) {
      this.props.history.push("/auth/login");
    } else {
      const userData = JSON.parse(localStorage.getItem("_user"));
      if (userData.role !== 1) {
        this.props.history.push("/auth/login");
      }
    }
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/Logo-Blue.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/admin/index" />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
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

export default connect(null, mapDispatchToProps)(Admin);
