import React from 'react';
import moment from 'moment'

const YearDate = ({date, customClass}) => {
    return (
      <em className={customClass}>{date ? `${moment(date).format("DD MMMM YYYY")}` : ''}</em>
    )
}

export default YearDate;