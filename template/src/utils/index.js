export const formatDate = (now, type) => {
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  month = month < 10 ? '0' + month : month
  var date = now.getDate()
  date = date < 10 ? '0' + date : date
  var hour = now.getHours()
  hour = hour < 10 ? '0' + hour : hour
  var minute = now.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = now.getSeconds()
  second = second < 10 ? '0' + second : second
  let result = ''
  switch (type) {
    case 1:
      result = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
      break
    case 2:
      result = year + '-' + month + '-' + date
      break
    case 3:
      result = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second
      break
    default:
      result = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  }
  return result
}
