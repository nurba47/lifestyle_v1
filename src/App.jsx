import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import DefaultRoutes from "./routes";
import Footer from "./components/footer";
import { inject, observer } from "mobx-react";

@inject("authCtrl") @observer
class App extends React.Component {
  componentDidMount() {
    this.props.authCtrl.loadProfile();
  }

  render() {
    let { ready } = this.props.authCtrl;
    if (!ready) return null;
    return (
      <Router>
        <div>
          <Header />
          <DefaultRoutes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
