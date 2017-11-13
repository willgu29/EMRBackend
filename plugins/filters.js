import Vue from 'vue'

Vue.filter('formatDate', function (jsonDate) {
  console.log(jsonDate)
  var dateStr = JSON.parse(JSON.stringify(jsonDate))
  console.log(dateStr)
  var date = new Date(dateStr)
  console.log(date)
  return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
})
