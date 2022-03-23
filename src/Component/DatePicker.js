import React from 'react'

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import Grid from '@material-ui/core/Grid';
  import MomentUtils from '@date-io/moment';
export default function DatePicker() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  return (
    <>
          <MuiPickersUtilsProvider  utils={MomentUtils}>
          <Grid container spacing={3}>     
         <Grid  item xs={6}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
        
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /></Grid>
        <Grid  item xs={6}>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          variant="inline"
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
    </>
  )
}
