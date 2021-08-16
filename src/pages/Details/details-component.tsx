import { useEffect } from 'react'
import { setPageTitle } from 'src/helpers'
import { Card, SummaryCard } from 'src/components/'
import { Container } from './details-styles'
import { IDetails } from './details-types'

function Details({ aggregate, loading, summary, fetchDetailsData }: IDetails) {
  useEffect(() => {
    setPageTitle('Sua Carteira')
    fetchDetailsData()
  }, [])

  return (
    <Container>
      <SummaryCard loading={loading} {...aggregate} />
      {summary.map((cardData, index) => (
        <Card key={index} loading={loading} {...cardData} />
      ))}
    </Container>
  )
}

export default Details
