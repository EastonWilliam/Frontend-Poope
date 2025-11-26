import { FC } from 'react';

import { Box, Container, Stack, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

import { BasicButton } from '@/components/Buttons/Buttons';

export const About: FC = () => {
    return (
        <Box component="section" id="about" mt={'5rem'}>
            <Container sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column', xs: 'column' }, justifyContent: 'space-between', py: 8 }} >
                <Stack width={{ md: '50%', sm: '80%', xs: '100%' }} mt={'10rem'} alignSelf={'center'}>
                    <Stack direction={'row'} gap={'1rem'} sx={{ justifySelf: { md: 'flex-start', sm: 'center', xs: 'center' } }}>
                        <Typography variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'}>About</Typography>
                        <Typography variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'} color="#FFD258">POOPECOIN</Typography>
                    </Stack>
                    <Typography variant="body1" mt={2} fontSize={'24px'}>
                        POOPECOIN is a community-driven meme cryptocurrency that aims to bring fun and excitement to the crypto world. Inspired by popular internet culture, POOPECOIN combines humor with blockchain technology to create a unique experience for its holders.
                    </Typography>
                    <Typography variant="body1" mt={2} fontSize={'24px'}>
                        Our mission is to build a strong and engaged community while promoting the adoption of cryptocurrencies. We believe that laughter is the best medicine, and through POOPECOIN, we hope to spread joy and positivity in the crypto space.
                    </Typography>

                    <Stack direction={{ md: 'row', xs: 'column', sm: 'column' }} spacing={2} mt={4}>
                        <BasicButton
                            width={"xs:'20rem'"}
                            height={'3rem'}
                            borderColor={'white'}
                            backgroundColor='#e6be10ff !important'
                            textColor={'#000000'}
                            hoverColor={'#ffffff'}
                            radius={'3rem'}
                            text='BUY POOPE'
                            endIcon={<CallMadeIcon sx={{ width: '1rem', height: '1rem' }}
                            />}
                        ></BasicButton>
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
                    </Stack>
                </Stack>
                <Box component={'img'} src="../assets/icons/toilet-open.png" alt="About POOPECOIN" width={{ md: '50%', sm: '80%', sx: '80%' }} height={'80%'} mt={'10rem'} />
            </Container>
        </Box >
    )
}