import { Header } from 'src/components'
import { IWrapper } from './wrapper-types'

function Wrapper({ children, ...header }: IWrapper) {
  return (
    <>
      <Header {...header} />
      {children}
    </>
  )
}

export default Wrapper
