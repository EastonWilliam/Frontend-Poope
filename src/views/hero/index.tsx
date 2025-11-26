import React, { FC } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";

export const Hero: FC = () => {
    return (
        <Box component="section" id="hero" sx={{ backgroundImage: 'bg-pattern.svg', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Container maxWidth='xl' >
                <Typography
                    variant="h1"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: '10vh'
                    }}
                >
                    <Typography
                        sx={{
                            width: 'fit-comtent',
                            fontFamily: 'Mountains of Christmas',
                            fontWeight: 700,
                            fontStyle: "bold",
                            fontSize: { xs: 90, sm: 100, md: 150, lg: 200 },
                            lineHeight: "100%",
                            letterSpacing: '2%',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            userSelect: 'none'
                        }}
                    >POOPE</Typography>
                    <Typography
                        sx={{
                            width: "fit-content",
                            fontFamily: "Mountains of Christmas",
                            fontSize: { xs: 100, sm: 130, md: 200, lg: 300 },
                            lineHeight: '100%',
                            letterSpacing: '6%',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            userSelect: 'none'
                        }}
                    >solana</Typography>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: { xs: '160px', sm: '200px', md: '240px', lg: '320px' },
                        height: { xs: '160px', sm: '200px', md: '240px', lg: '320px' },
                        userSelect: 'none',
                        transform: 'translate(-50%, -50%)',


                    }}>
                        <img
                            src="./assets/icons/poope-coin.png"
                            alt="Poope Coin"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Box>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mt: 3,
                        fontWeight: 400,
                        textAlign: 'center',
                        justifySelf: 'center',
                        userSelect: 'none',
                        maxWidth: '600px',
                        textWrap: 'wrap',
                        fontSize: '18px'
                    }}
                >
                    Every bathroom break becomes a bullseye moment to embrace your inner
                    marksman. Nail that tight deadline, blast through the crypto world.
                </Typography>


            </Container>
        </Box>
    )
}