import React from 'react';
import moment from 'moment';
import localization from 'moment/locale/bg';

const FullDate = ({date, customClass}) => {

  return (
    <em className={customClass}>{date ? `${moment(date).locale("bg", localization).format("DD MMMM YYYY")} | ${moment(date).format("HH:mm")}` : ''}</em>
  )
}

export default FullDate;