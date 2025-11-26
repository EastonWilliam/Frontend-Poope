import { FC } from 'react'

import { DropdownLanguageButton, LogoButton } from '@/components/Buttons/Buttons'
import { FooterDescription, FooterLink } from '@/constants/Landing/footer'
import { Box, Divider, Link, List, Stack, Typography } from '@mui/material'

export const Footer: FC = () => {
    return (
        <Box width={'100%'}>
            <Stack
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    mt: '40px',
                    justifyContent: 'space-between',
                    justifySelf: 'center',
                    maxWidth: '1440px',
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        gap: '1rem',
                        alignItems: { xs: 'center', md: 'flex-start' }
                    }}
                >
                    <LogoButton
                        width={'150px'}
                        height={'54px'}
                        fontSize={'50px'}
                        logoIcon={<img src='./assets/icons/logo.png' alt='logo' style={{ width: '48px', height: '48px' }} />}
                        text='POOPE'
                    />
                    <Box
                        component='p'
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            color: '#666',
                            fontSize: '18px',
                            fontFamily: 'Inter',
                            maxWidth: '500px'
                        }}
                    >
                        {FooterDescription}
                    </Box>
                </Box>
                <Box
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: { xs: 'center' }
                    }}
                >
                    <List sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, gap: '5rem' }}>
                        {FooterLink.map(footerLink => (
                            <Box
                                key={footerLink.title}
                                sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '16px', width: '8rem' }}
                            >
                                <h4 style={{ marginBottom: '8px', fontSize: '24px', fontFamily: 'Mountains of Christmas' }}>
                                    {footerLink.title}
                                </h4>
                                <Stack display={'flex'} direction={'column'} justifyItems={'center'} alignItems={'center'}>
                                    {footerLink.Links.map(link => (
                                        <Link
                                            key={link}
                                            href='#'
                                            sx={{
                                                listStyle: 'none',
                                                mb: '4px',
                                                padding: '5px',
                                                color: '#666',
                                                fontSize: '18px',
                                                textWrap: 'nowrap',
                                                fontFamily: 'Inter',
                                                textAlign: 'center',
                                                '&::before': {
                                                    // kill the pseudo-element underline
                                                    display: 'none'
                                                }
                                            }}
                                        >
                                            {link}
                                        </Link>
                                    ))}
                                </Stack>
                            </Box>
                        ))}
                    </List>
                </Box>
            </Stack>
            <Divider
                sx={{
                    width: '100%',
                    borderBottom: '1px solid #e0e0e0',
                    marginTop: '20px'
                }}
            />
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent='space-between'
                alignItems='center'
                width='100%'
                gap={2}
            >
                {/* Left: Policies + Language */}
                <Stack direction={{ md: 'row', xs: 'column' }} gap={4} alignItems='center' sx={{ order: { xs: 1, md: 2 } }}>
                    <Stack direction={'row'} gap={'2rem'} mt={{ xs: '2rem', md: '0rem' }}>
                        <Link href='#' underline='none' sx={{ color: '#999', fontSize: '16px', fontFamily: 'Inter' }}>
                            Privacy Policy
                        </Link>
                        <Link href='#' underline='none' sx={{ color: '#999', fontSize: '16px', fontFamily: 'Inter' }}>
                            Terms of Service
                        </Link>
                    </Stack>

                    <DropdownLanguageButton
                        width='6rem'
                        height='auto'
                        borderColor='none'
                        backgroundColor='none'
                        icon={['assets/icons/en.png']}
                        justifyContent='flex-end'
                    />
                </Stack>

                {/* Right: Copyright */}
                <Typography
                    sx={{
                        order: { xs: 2, md: 1 },
                        color: '#999',
                        fontSize: '16px',
                        fontFamily: 'Inter',
                        whiteSpace: 'nowrap'
                    }}
                >
                    © 2024 POOPE
                </Typography>
            </Stack>
            {/* <Stack
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40%',
                    width: '100%'
                }}
            >

                <Stack
                    direction={'row'}
                    gap={'5rem'}
                    justifyItems={'center'}
                    alignItems={'center'}
                    sx={{
                        order: { xs: 2, md: 1 }, // mobile second, desktop first
                        flex: 1,
                        p: 2,
                    }}>

                    <Stack direction={'row'} gap={'2rem'} justifyContent={'flex-end'}>
                        <Link
                            href='#'
                            underline='none'
                            sx={{
                                color: '#999',
                                fontSize: '16px',
                                fontFamily: 'Inter',
                                "&::before": {                         // kill the pseudo-element underline
                                    display: "none",
                                },
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href='#'
                            underline='none'
                            sx={{
                                color: '#999',
                                marginLeft: '16px',
                                fontSize: '16px',
                                fontFamily: 'Inter',
                                "&::before": {                         // kill the pseudo-element underline
                                    display: "none",
                                },
                            }}
                        >
                            Terms of Service
                        </Link>
                    </Stack>
                    <DropdownLanguageButton
                        width={'6rem'}
                        height={'auto'}
                        borderColor={'none'}
                        backgroundColor={'none'}
                        icon={['assets/icons/en.png', 'assets/icons/en.png', 'assets/icons/en.png']}
                        justifyContent='flex-end'
                    ></DropdownLanguageButton>
                </Stack>
                <Box
                    sx={{
                        order: { xs: 1, md: 2 }, // mobile first, desktop second
                        flex: 1,
                        p: 2,
                    }}>
                    <Typography
                        component="p"
                        sx={{
                            color: '#999',
                            fontSize: '16px',
                            fontFamily: 'Inter',
                            justifyContent: 'left',
                            textWrap: 'nowrap'
                        }}
                    >
                        © 2024 POOPE
                    </Typography>
                </Box>

            </Stack> */}
        </Box >
    )
}
