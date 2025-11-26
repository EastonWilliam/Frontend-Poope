import { FC } from "react";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import XIcon from '@mui/icons-material/X'

export const Banner: FC = () => {
    return (
        <Box
            component="section"
            sx={{
                background: "#ffd258",
                borderRadius: "50px",
            }}
        >
            <Container maxWidth="xl">
                <Stack
                    sx={{
                        alignItems: "center",
                        textAlign: "center",
                        padding: { xs: "150px 24px", md: "150px" },
                        gap: "24px",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            textTransform: "uppercase",
                            fontSize: { xs: "55px", md: "110px" },
                            lineHeight: { xs: "64px", md: "120px" },
                            fontFamily: 'Mountains of Christmas',
                            letterSpacing: "7%",
                            color: "#141414",
                            fontWeight: 600,
                        }}
                    >
                        ITS A beautiful When Meme token Can bring people together
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#141414",
                        }}
                    >
                        Join our POOPE community today. It's one of the fastest growing
                        communities on Solana! Don't miss out POOPE, $POOPE.
                    </Typography>
                    <Stack
                        sx={(theme) => ({
                            [theme.breakpoints.down("md")]: {
                                width: "100%",
                            },
                            flexDirection: { md: "row" },
                            gap: "24px",
                        })}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            sx={(theme) => ({
                                borderRadius: '100px',
                                ...theme.applyStyles("dark", {
                                    border: "1px solid black !important",
                                }),
                            })}
                            endIcon={<img src="../assets/icons/discord.png" alt="Discord" style={{ width: 24, height: 24 }} />}

                        >
                            DISCORD
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            sx={(theme) => ({
                                borderRadius: '100px',
                                ...theme.applyStyles("dark", {
                                    borderColor: "black !important",
                                }),
                            })}
                            endIcon={<XIcon />}
                        >
                            Twitter/X
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

