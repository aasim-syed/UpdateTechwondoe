import React from 'react'
import Typography from '@mui/material/Typography'
import Confetti from 'react-confetti'

export default function Success() {
  return (
    <>
    
      <Typography variant='h2' align='center' sx={{ py: 4 }}>
        Thank you!ð¥ºð¥ºð¥º
      </Typography>
      <Typography component='p' align='center'>
        Phew!ðµâð«That was done!Great work!â¤ï¸âð¥ð¥
      </Typography>
    <Confetti/>
    </>
  )
}
