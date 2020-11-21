import * as ko from "knockout";
import "./components";
import "./pages/DashboardPage";
import "./../node_modules/jquery/dist/jquery.min.js";

import { Router, Route } from "@profiscience/knockout-contrib-router";

Router.setConfig({
    base: "/src",
    hashbang: true,
    activePathCSSClass: "active"
})

Router.useRoutes([
    new Route("/", "dashboard"),
    new Route("/profile", "profile-page")
])


class Main {

}

ko.applyBindings(new Main());