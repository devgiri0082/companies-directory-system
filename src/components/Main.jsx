
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormPage from "./FormPage";
import DetailsPage from "./DetailsPage";
export default function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <FormPage />
                </Route>
                <Route path="/company/:id">
                    <DetailsPage />
                </Route>
            </Switch>
        </Router>
    )
}