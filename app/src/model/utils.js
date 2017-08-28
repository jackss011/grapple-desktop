export function formatTimestampShort(timestamp) {
    let date = new Date(timestamp)
    let now = new Date()

    let today =
        date.getDate() == now.getDate() && date.getMonth() == now.getMonth()

    if(today)
        return formatTime(date.getHours())
            + ':'
            + formatTime(date.getMinutes())
    else {
        let month = date
            .toLocaleString('en-us', { month: 'long' })
            .substring(0, 3)
            .toLowerCase()

        let thisYear = now.getYear() == date.getYear()

        if(thisYear)
            return date.getDate()
                + ' '
                + month
        else {
            return month
                + ' '
                + date.getFullYear()
        }
    }
}


export function formatTimestamp(timestamp) {
    let d = new Date(timestamp)
    return d.toLocaleString()
}


export function formatTime(time) {
    let s = time.toString()
    return s.length <= 1 ? '0' + s : s
}
