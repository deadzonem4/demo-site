import React from 'react';
import moment from 'moment';

const EventsDate = ({date, customClass}) => {

    return (
      <em className={customClass}>{date ? `${moment(date).format("DD.MM.YY")}` : ''}</em>
    )
}

export default EventsDate;