import { Route, RouteProps } from 'react-router-dom'
import { Wrapper } from 'src/components/'

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
        <Wrapper>
          <Component {...matchProps} />
        </Wrapper>
      )}
    >
      {children}
    </Route>
  )
}

export default AppRoute
