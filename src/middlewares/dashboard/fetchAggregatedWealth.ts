import { gql } from '@apollo/client'
import client from 'src/services/apolloClient'

export const getQuery = () =>
  gql`
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
    }
  `

async function fetchAggregatedWealth() {
  return client.query({ query: getQuery() })
}

export default fetchAggregatedWealth
