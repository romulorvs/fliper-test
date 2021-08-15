import { Route, RouteProps } from 'react-router-dom'
import ConnectedWrapper from './wrapper-component-conected'

const AppRoute = ({ children, component, ...rest }: RouteProps) => {
  const Component = component as any

  if (!Component) {
    return (
      <Route {...rest} component={component}>
        {children}
      </Route>
    )
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <ConnectedWrapper>
          <Component {...matchProps} />
        </ConnectedWrapper>
      )}
    >
      {children}
    </Route>
  )
}

export default AppRoute
