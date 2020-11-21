import * as ko from "knockout";
import "./components";
import "./pages/DashboardPage";

import { Router, Route } from "@profiscience/knockout-contrib-router";

Router.setConfig({
    base: "/src",
    hashbang: true,
    activePathCSSClass: "active"
})

Router.useRoutes([
    new Route("/", "dashboard"),
])


class Main {

}

ko.applyBindings(new Main());