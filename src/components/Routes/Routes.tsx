import { Switch, Route } from 'react-router-dom'

import { locations } from '../../modules/routing/locations'
import { App } from '../App'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={locations.root()} component={App} />
    </Switch>
  )
}

export default Routes