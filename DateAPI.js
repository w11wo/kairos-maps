export function getCurrentDayAndDate() {
  var today = new Date()
  var day = today.getDay()
  var dd = today.getDate()
  var mm = today.getMonth()
  var yyyy = today.getFullYear();

  switch(day) {
    case 0:
      day = "Sunday"
      break
    case 1:
      day = "Monday"
      break
    case 2:
      day = "Tuesday"
      break
    case 3:
      day = "Wednesday"
      break
    case 4:
      day = "Thursday"
      break
    case 5:
      day = "Friday"
      break
    case 6:
      day = "Saturday"
      break
  }

  switch(mm) {
    case 0:
      mm = "January"
      break
    case 1:
      mm = "February"
      break
    case 2:
      mm = "March"
      break
    case 3:
      mm = "April"
      break
    case 4:
      mm = "May"
      break
    case 5:
      mm = "June"
      break
    case 6:
      mm = "July"
      break
    case 7:
      mm = "August"
      break
    case 8:
      mm = "September"
      break
    case 9:
      mm = "October"
      break
    case 10:
      mm = "November"
      break
    case 11:
      mm = "December"
      break
  }

  today = day + ", " + dd + " " + mm + " " + yyyy

  return [day, today]
}
