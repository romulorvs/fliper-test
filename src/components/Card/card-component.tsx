import { ICard } from './card-types'

function Card({
  accountLabel,
  cdi,
  gain,
  profitability,
  total,
  loading,
}: ICard) {
  if (loading) {
    return <div>loading</div>
  }

  return (
    <div>
      <div>accountLabel: {accountLabel}</div>
      <div>cdi: {cdi}</div>
      <div>gain: {gain}</div>
      <div>profitability: {profitability}</div>
      <div>total: {total}</div>
      <div>loading: {loading}</div>
    </div>
  )
}

export default Card
