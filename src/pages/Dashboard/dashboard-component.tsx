import { useEffect } from 'react'
import { setPageTitle } from 'src/helpers'
import { Card } from 'src/components/'
import { IDashboard } from './dashboard-types'

function Dashboard({
  accountId,
  hasError,
  errorMessage,
  fetchDashboardData,
  resolveError,
  ...cardData
}: IDashboard) {
  useEffect(() => setPageTitle('Dashboard - Fliper'), [])

  useEffect(() => {
    fetchDashboardData(accountId)
  }, [accountId])

  return (
    <div>
      <Card {...cardData} />
      {hasError && <p>DEU RUIM!</p>}
    </div>
  )
}

export default Dashboard
