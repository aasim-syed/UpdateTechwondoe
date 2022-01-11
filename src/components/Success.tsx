import React from 'react'
import Typography from '@mui/material/Typography'
import Confetti from 'react-confetti'

export default function Success() {
  return (
    <>
    
      <Typography variant='h2' align='center' sx={{ py: 4 }}>
        Thank you!🥺🥺🥺
      </Typography>
      <Typography component='p' align='center'>
        Phew!😵‍💫That was done!Great work!❤️‍🔥🔥
      </Typography>
    <Confetti/>
    </>
  )
}
