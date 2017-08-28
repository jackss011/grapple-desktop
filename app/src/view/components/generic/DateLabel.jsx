import React from 'react'

import {formatTimestampShort} from '~/model/utils.js'


class DateLabel extends React.Component {
    render() {
        return (
            <div className="date">
                {formatTimestampShort(this.props.timestamp)}
            </div>
        )
    }
}

export default DateLabel
