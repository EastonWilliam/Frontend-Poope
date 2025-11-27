import { Backdrop, Button, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import CloseIcon from '@mui/icons-material/Close'
import { BasicButton } from '../Buttons/Buttons'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 50%)',
  width: 400,
  bgcolor: 'grey',
  border: '2px solid #000',
  backgroundColor: '#313131 !important',
  borderRadius: '100px',
  boxShadow: 24,
  p: 4
}

type TransitionModalProps = {
  open: boolean
  handleClose: () => void
}

export default function TransitionModal({ open, handleClose }: TransitionModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
      sx={{ width: '30%', marginBottom: '100rem', justifySelf: 'center' }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Stack justifyContent={'center'} direction={'row'}>
            <Typography
              id='transition-modal-title'
              variant='h6'
              component={'h2'}
              textAlign={'center'}
              width={'70%'}
              justifySelf={'center'}
              alignSelf={'center'}
            >
              Connect to your Solana Wallet
            </Typography>
            <Button
              startIcon={<CloseIcon />}
              sx={{
                justifySelf: 'flex-end',
                alignSelf: 'flex-start'
              }}
              onClick={handleClose}
            />
          </Stack>
          <Stack direction={'column'} gap={'2rem'} justifyItems={'center'} justifySelf={'center'} mt={'2rem'}>
            <BasicButton
              width={'20rem'}
              height={'4rem'}
              backgroundColor={'#141414 !important'}
              textColor={'#ffffff !important'}
              hoverColor={'#504f4fff !important'}
              fontSize={'18px'}
              startIcon={<img src='../assets/icons/wallet.png' />}
              text={'MetaMask'}
              radius={'100px'}
            ></BasicButton>
            <BasicButton
              width={'20rem'}
              height={'4rem'}
              backgroundColor={'#141414 !important'}
              textColor={'#ffffff !important'}
              hoverColor={'#504f4fff !important'}
              fontSize={'18px'}
              startIcon={<img src='../assets/icons/wallet (1).png' />}
              text={'Phantom'}
              radius={'100px'}
            ></BasicButton>
            <BasicButton
              width={'20rem'}
              height={'4rem'}
              backgroundColor={'#141414 !important'}
              textColor={'#ffffff !important'}
              hoverColor={'#504f4fff !important'}
              fontSize={'18px'}
              startIcon={<img src='../assets/icons/wallet (4).png' />}
              text={'Solflare'}
              radius={'100px'}
            ></BasicButton>
            <BasicButton
              width={'20rem'}
              height={'4rem'}
              backgroundColor={'#141414 !important'}
              textColor={'#ffffff !important'}
              hoverColor={'#504f4fff'}
              fontSize={'18px'}
              startIcon={<img src='../assets/icons/wallet (2).png' />}
              text={'Solflare'}
              radius={'100px'}
            ></BasicButton>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  )
}
