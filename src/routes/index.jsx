import React from "react";
import { Route, Switch } from "react-router";

import DefaultScene from "../scenes/landing";
import AboutScene from "../scenes/about";
import ProductLanding from "../components/products_landing";
import DocumentScene from "../scenes/documents";
import MarketingScene from "../scenes/marketing";
import Kymdan2Product from "../components/kymdan2";
import RoyalScene from "../components/royal";
import Kymdan5Product from "../components/kymdan5";
import TonbanProduct from "../components/tonban";
import AngusProduct from "../components/angus";
import BearProduct from "../components/bear";
import ExtractProduct from "../components/extract";
import LoginScene from "../scenes/login_scene";
import RegisterScene from "../scenes/register_scene";
import Profile from "../scenes/profile";

const DefaultRoutes = () => (
    <Switch>
      <Route exact path="/" component={DefaultScene} />
      <Route exact path="/about_products" component={ProductLanding} />
      <Route exact path="/documents" component={DocumentScene} />
      <Route exact path="/marketing" component={MarketingScene} />
      <Route exact path="/about" component={AboutScene} />
      <Route exact path="/kymdan2" component={Kymdan2Product} />
      <Route exact path="/royal" component={RoyalScene} />
      <Route exact path="/kymdan5" component={Kymdan5Product} />
      <Route exact path="/tonban" component={TonbanProduct} />
      <Route exact path="/angus" component={AngusProduct} />
      <Route exact path="/bear" component={BearProduct} />
      <Route exact path="/extract" component={ExtractProduct} />

      <Route exact path="/login" component={LoginScene} />
      <Route exact path="/registration" component={RegisterScene} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
);

export default DefaultRoutes;
