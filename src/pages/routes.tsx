import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { AppRoute } from 'src/components/'
import Dashboard from './Dashboard'
import Details from './Details'

function Routes() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/details" component={Details} />
        <AppRoute exact path="/dashboard" component={Dashboard} />
        <AppRoute path="*">
          <Redirect to="/dashboard" />
        </AppRoute>
      </Switch>
    </Router>
  )
}

export default Routes
