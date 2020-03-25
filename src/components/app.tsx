/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionalComponent, h } from "preact";
import { Router, RouterOnChangeArgs } from "preact-router";
import Route from "preact-async-route";

import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Header from "./header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    const handleRoute = (e: RouterOnChangeArgs): void => {
        console.log(e.url);
    };

    return (
        <div id="app">
            <Header />
            <Router onChange={handleRoute}>
                <Route
                    path="/"
                    getComponent={(): Promise<any> =>
                        import("../routes/home").then(module => module.default)
                    }
                />
                <Route path="/profile/" component={Profile} user="me" />
                <Route path="/profile/:user" component={Profile} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
