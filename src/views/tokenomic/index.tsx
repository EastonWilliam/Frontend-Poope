import { FC } from "react";

import { Container, Stack, Box, Typography } from "@mui/material"
import CallReceivedIcon from '@mui/icons-material/CallReceived';

import { BasicButton } from "@/components/Buttons/Buttons";

export const Tokenomic: FC = () => {
    return (
        <Container>
            <Stack direction={{ md: 'row', xs: 'column', sm: 'column' }} justifyContent={'space-between'} mt={'10rem'}>
                <Box component={'img'} src="../assets/icons/tokenomic.png" alt="Tokenomic Image" width={{ md: "60%", xs: '80%', sm: '80%' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', alignSelf: 'center' }}>
                    <Stack direction={'row'} mt={'5rem'} alignSelf={{ sm: 'center', xs: 'center' }}>
                        <Typography variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'}>TOKEN</Typography>
                        <Typography variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'} color="#FFD258">OMIC</Typography>
                    </Stack>
                    <Box>
                        <Typography variant="body1" mt={2} fontSize={'24px'}>
                            PoopeCoin is designed with a deflationary tokenomics model to reward long-term holders and promote scarcity.
                        </Typography>
                        <Typography variant="body1" mt={2} fontSize={'24px'}>
                            Additionally, a portion of each transaction is redistributed to existing holders, providing passive income and incentivizing holding.
                        </Typography>
                    </Box>
                    <Box mt={'3rem'} sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'space-between' }}>
                        <BasicButton
                            width={'xs:10rem'}
                            height={'3rem'}
                            borderColor={'white'}
                            backgroundColor={'#e6be10ff !important'}
                            textColor={'#000000'}
                            hoverColor={'#ffffff'}
                            radius={'3rem'}
                            text='READ  MORE'
                            endIcon={<CallReceivedIcon sx={{ width: '1rem', height: '1rem' }} />}
                        ></BasicButton>
                        <Box component={'img'} src="../assets/icons/poope-coin.png" width={'100px'} mt={'5rem'} right={'0'}></Box>
                    </Box>
                </Box >
            </Stack >
        </Container >
    )
}