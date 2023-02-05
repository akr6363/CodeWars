function formatDuration(seconds) {
    let time = ''
    let remains = seconds
    let yearSec = 365 * 24 * 60 * 60
    let daySec = 24 * 60 * 60
    let hourSec = 60 * 60
    let minuteSec = 60
    if (seconds === 0) return 'now'
    if (remains >= yearSec) {
        let year = Math.floor(remains / yearSec)
        remains -= yearSec * year
        year === 1 ?
            time += `${year} year` :
            time += `${year} years`
    }
    if (remains >= daySec) {
        let day = Math.floor(remains / daySec)
        remains -= daySec * day
        if (seconds > yearSec) {
            if (remains === 0) {
                time += ' and '
            } else { time += ', ' }
        }
        day === 1 ?
            time += `${day} day` :
            time += `${day} days`
    }
    if (remains >= hourSec) {
        let hour = Math.floor(remains / hourSec)
        remains -= hourSec * hour
        if (seconds > daySec) {
            if (remains === 0) {
                time += ' and '
            } else { time += ', ' }
        }
        hour === 1 ?
            time += `${hour} hour` :
            time += `${hour} hours`
    }
    if (remains >= minuteSec) {
        let minute = Math.floor(remains / minuteSec)
        remains -= minuteSec * minute
        if (seconds > hourSec) {
            if (remains === 0) {
                time += ' and '
            } else { time += ', ' }
        }
        minute === 1 ?
            time += `${minute} minute` :
            time += `${minute} minutes`
    }
    if (remains < 60 && remains !== 0) {
        if (seconds > 60) {
            time += ' and '
        }
        remains === 1 ?
            time += `${remains} second` :
            time += `${remains} seconds`
    }
    console.log(time)
    return time
}


formatDuration(3659)
formatDuration(2)
formatDuration(31708802)
formatDuration(3662)
