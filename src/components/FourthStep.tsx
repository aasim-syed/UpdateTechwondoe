import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
// import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../Context'

export default function FirstStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const {password, confirmPassword } = formValues

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ password , confirmPassword}).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, password , confirmPassword]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Password🔑'
            name='password'
            type="password"
            placeholder='Enter Password🔑🕵️!'
            value={password.value}
            onChange={handleChange}
            error={!!password.error}
            helperText={password.error}
            required={password.required}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="password"
            label='Confirm Password💯?'
            name='confirmPassword'
            placeholder='Confirm Password💯'
            value={confirmPassword.value}
            onChange={handleChange}
            error={!!confirmPassword.error}
            helperText={confirmPassword.error}
            required={confirmPassword.required}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                // checked={agreenemt.value}
                onChange={handleChange}
                name='agreenemt'
                color='primary'
                // required={agreenemt.required}
              />
            }
            label='Agree to terms and conditionszzzzzz!!✅'
          />
          {/* <FormHelperText error={!!agreenemt.error}>{agreenemt.error}</FormHelperText> */}
        </Grid>
        </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
