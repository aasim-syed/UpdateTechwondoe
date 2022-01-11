import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../Context'
import RecMic from './RecMic'

export default function SecondStep() {
  const { formValues,  handleBack, handleNext} = useContext(AppContext)
  const { city, date, phone } = formValues

  const isError = useCallback(
    () =>
      Object.keys({ city, date, phone }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, city, date, phone]
  )

  return (
    <>
      <Grid container spacing={2}>
        
        <Grid item xs={12}>
          <RecMic/>
          {/* <FormHelperText error={!!agreenemt.error}>{agreenemt.error}</FormHelperText> */}
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
          Next
        </Button>
      </Box>
    </>
  )
}
