import { Header } from 'src/components'
import { IWrapper } from './wrapper-types'

function Wrapper({ header, children }: IWrapper) {
  return (
    <>
      <Header {...header} />
      {children}
    </>
  )
}

export default Wrapper
