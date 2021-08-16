import { gql } from '@apollo/client'
import client from 'src/services/apolloClient'

export const query = gql`
  query MyQuery {
    wealthSummary_aggregate {
      aggregate {
        sum {
          cdi
          gain
          profitability
          total
        }
      }
    }
    wealthSummary {
      cdi
      gain
      profitability
      total
    }
  }
`

async function fetchAggregatedWealth() {
  return client.query({ query })
}

export default fetchAggregatedWealth
