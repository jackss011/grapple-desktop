import React from 'react'

class DateLabel extends React.Component {
    render() {
        return <div className="date">{this.formatDate()}</div>
    }

    formatDate() {
        let timestamp = this.props.timestamp

        let date = new Date(timestamp)
        let now = new Date()

        let today =
            date.getDate() == now.getDate() && date.getMonth() == now.getMonth()

        if(today)
            return this.ft(date.getHours())
                + ':'
                + this.ft(date.getMinutes())
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

                return this.ft(date.getMonth())
                    + ' '
                    + date.getYear()
            }
        }

    }

    ft(time) {
        let s = time.toString()
        return s.length <= 1 ? '0' + s : s
    }
}

export default DateLabel
