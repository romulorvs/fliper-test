function getTestingComponent(component: any) {
  if (process?.env?.NODE_ENV === 'test') {
    // eslint-disable-next-line react/display-name
    return (props: any) => <>{props.children}</>
  }

  return component
}

export default getTestingComponent
