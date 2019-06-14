import React from 'react';
import moment from 'moment'

const HourDate = ({date, customClass}) => {
    return (
      <span className={customClass}>{date ? `${moment(date).format("HH:mm")}` : ''}</span>
    )
}

export default HourDate;