import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch, useSelector } from 'react-redux';
import {
  setReturnDate,
  getReturnDate,
} from '../../../Redux/actions/manageUserActions';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date(JSON.parse(localStorage.getItem('returnDate')).returnDate)
  );

  const handleDateChange = (date) => {
    dispatch(setReturnDate(date.toDateString(), getDate));
  };

  const getDate = () => {
    dispatch(getReturnDate());
    window.location.reload();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disablePast={true}
        margin="normal"
        id="date-picker-dialog"
        label="Pick return date:"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
