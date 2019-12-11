import * as moment from 'moment'

export default (start = moment('2018-12'), end = moment()) => {
  const months = []
  while (end > start) {
    months.push(start.format('YYYYMM'))
    start.add(1, 'month')
  }
  return months
}
