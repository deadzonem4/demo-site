import React from 'react';
import moment from 'moment'

const FullDate = ({date, customClass}) => {
    return (
      <em className={customClass}>{date ? `${moment(date).format("DD MMMM YYYY")} | ${moment(date).format("HH:mm")}` : ''}</em>
    )
}

export default FullDate;