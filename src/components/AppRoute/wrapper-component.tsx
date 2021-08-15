import { Header } from 'src/components'
import { IWrapper } from './app-route-types'

function Wrapper({ header, children }: IWrapper) {
  return (
    <>
      <Header {...header} />
      {children}
    </>
  )
}

export default Wrapper
