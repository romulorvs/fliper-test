import { useEffect } from 'react'
import { setPageTitle } from 'src/helpers'
import { Card } from 'src/components/'
import { IDashboard } from './dashboard-types'
import { Container } from './dashboard-styles'

function Dashboard({ accountId, fetchDashboardData, ...cardData }: IDashboard) {
  useEffect(() => setPageTitle('Dashboard - Fliper'), [])

  useEffect(() => {
    fetchDashboardData(accountId)
  }, [accountId])

  return (
    <Container>
      <Card {...cardData} />
    </Container>
  )
}

export default Dashboard
