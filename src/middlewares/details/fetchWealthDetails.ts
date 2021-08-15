import { gql } from '@apollo/client'
import client from 'src/services/apolloClient'

export const query = gql`
  query MyQuery {
    wealthSummary {
      id
      cdi
      gain
      hasHistory
      profitability
      total
    }
  }
`
async function fetchWealthDetails() {
  return client.query({ query })
}

export default fetchWealthDetails
