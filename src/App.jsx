import React from "react";
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
      <div>
        <Header />
        <DefaultRoutes />
        <Footer />
      </div>
    );
  }
}

export default App;
