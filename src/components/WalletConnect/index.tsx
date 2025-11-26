import * as React from 'react';

import { Backdrop, Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { BasicButton} from '../Buttons/Buttons';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    width: 400,
    bgcolor: 'grey',
    border: '2px solid #000',
    borderRadius: '100px',
    boxShadow: 24,
    p: 4
}

export default function TransitionModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            sx={{ width: '30%' }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Box>
                        <Typography
                            id='transition-modal-title'
                            variant='h6' component={'h2'}
                            textAlign={'center'}
                            width={'70%'}
                            justifySelf={'center'}
                            alignSelf={'center'}>
                            Connect to your Solana Wallet
                        </Typography>
                        <Button startIcon={<CloseIcon />}
                            sx={{
                                justifyContent: 'flex-end',
                                alignSelf: 'flex-start'
                            }} />
                    </Box>
                    <Stack direction={'column'} gap={'2rem'}>
                        <BasicButton
                            width={'80%'}
                            height={'4rem'}
                            backgroundColor={'#141414'}
                            textColor={'#ffffff'}
                            hoverColor={'#504f4fff'}
                            fontSize={'18px'}
                            startIcon={<img src='../assets/icons/wallet.png' />}
                            text={'MetaMask'}
                            radius={'100px'}
                        ></BasicButton>
                        <BasicButton
                            width={'80%'}
                            height={'4rem'}
                            backgroundColor={'#141414'}
                            textColor={'#ffffff'}
                            hoverColor={'#504f4fff'}
                            fontSize={'18px'}
                            startIcon={<img src='../assets/icons/wallet (1).png' />}
                            text={'Phantom'}
                            radius={'100px'}
                        ></BasicButton>
                        <BasicButton
                            width={'80%'}
                            height={'4rem'}
                            backgroundColor={'#141414'}
                            textColor={'#ffffff'}
                            hoverColor={'#504f4fff'}
                            fontSize={'18px'}
                            startIcon={<img src='../assets/icons/wallet (4).png' />}
                            text={'Solflare'}
                            radius={'100px'}
                        ></BasicButton>
                        <BasicButton
                            width={'80%'}
                            height={'4rem'}
                            backgroundColor={'#141414'}
                            textColor={'#ffffff'}
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