function formatPrice(num: number | string) {
  let stringNum

  if (typeof num === 'number') {
    stringNum = num.toLocaleString()
  } else {
    stringNum = parseFloat(num).toLocaleString()
  }

  if (!stringNum.includes(',')) {
    return `${stringNum},00`
  }

  const letterAfterComma = stringNum.length - 1 - stringNum.lastIndexOf(',')

  if (letterAfterComma === 0) {
    return `${stringNum}00`
  }

  if (letterAfterComma === 1) {
    return `${stringNum}0`
  }

  if (letterAfterComma >= 3) {
    return stringNum.substr(0, stringNum.lastIndexOf(',') + 4)
  }

  return stringNum
}

export default formatPrice
