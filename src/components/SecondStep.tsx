import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormHelperText from '@mui/material/FormHelperText'
// import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const { city, date} = formValues

  const isError = useCallback(
    () =>
      Object.keys({ city, date }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, city, date]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='City'
            name='city'
            placeholder='Enter your city🌆🏙️'
            value={city.value}
            onChange={handleChange}
            error={!!city.error}
            helperText={city.error}
            required={city.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label='Date of birth👶👼'
            name='date'
            type='date'
            defaultValue={date.value}
            onChange={handleChange}
            required={date.required}
          />
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
