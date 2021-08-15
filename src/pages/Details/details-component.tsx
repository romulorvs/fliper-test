import { useEffect } from 'react'
import { setPageTitle } from 'src/helpers'

function Details(props: any) {
  console.log(props)

  useEffect(() => {
    setPageTitle('Detalhamento - Fliper')
  }, [])

  return <div>details</div>
}

export default Details
