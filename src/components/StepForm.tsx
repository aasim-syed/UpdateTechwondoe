import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import FourthStep from './FourthStep'
import ThirdStep from './ThirdStep'
import Confirm from './Confirm'
import Success from './Success'
import { AppContext } from '../Context'

// Step titles
const labels = ['First Step1️⃣', 'Second Step2️⃣','Audio Recording🎤','Password Step🔑', 'Confirmation🥳🙌Woohoo🥳']
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep />
    case 1:
      return <SecondStep />
    case 2:
      return <ThirdStep/>
    case 3:
      return <FourthStep />
    case 4:
      return <Confirm/>
    
    default:
      throw new Error('Unknown step')
  }
}

const StepForm = () => {
  const { activeStep } = useContext(AppContext)

  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Box style={{backgroundColor:'rgba(22, 2, 3, 0.2)',borderRadius:'15px'}} sx={{ my: 5 }}>
            <Typography variant='h4' align='center'>
              TECHWONDOE ASSIGNMENT
            </Typography>
            <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
              FOUR STEP FORM🙂
            </Typography>
          </Box>
          <Stepper style={{backgroundColor:'rgba(44, 212, 218, 0.2)',color:'white',borderRadius:'13px'}} activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
      )}
    </>
  )
}

export default StepForm
