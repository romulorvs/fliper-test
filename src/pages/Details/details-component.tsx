import { useEffect } from 'react'
import { setPageTitle } from 'src/helpers'

function Details(props: any) {
  useEffect(() => {
    setPageTitle('Detalhamento - Fliper')
  }, [])

  return <div>details</div>
}

export default Details
