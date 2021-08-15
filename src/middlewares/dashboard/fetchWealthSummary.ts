import { gql } from '@apollo/client'
import client from 'src/services/apolloClient'

export const getQuery = (id: number) =>
  gql`
    query MyQuery {
      wealthSummary_by_pk(id: ${id}) {
        cdi
        gain
        profitability
        total
      }
    }
  `

async function fetchWealthSummary(id: number) {
  return client.query({ query: getQuery(id) })
}

export default fetchWealthSummary
