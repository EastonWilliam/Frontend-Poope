import { FC } from "react";

import { SlicerBar } from "@/components/SlicerBar";
import { Box, Container, Stack, Typography } from "@mui/material";

const description = " This roadmap outlines the key milestones and development phases for PoopeCoin, highlighting our commitment to innovation, community engagement, and long-term growth.";

const phaseData = {
    description: "This roadmap outlines the key milestones and development phases for PoopeCoin, highlighting our commitment to innovation, community engagement, and long-term growth.",
    roadmap: [
        {
            imgUrl: "../assets/icons/single_paper.png",
            content: [
                {
                    title: "PHASE1",
                    items: ["Launch on Solana", "Website Landing Page", "Marketing"],
                },
            ],
        },
        {
            imgUrl: "../assets/icons/single_paper.png",
            content: [
                {
                    title: "PHASE2",
                    items: ["Launch on Solana", "Website Landing Page", "Marketing"],
                },
            ],
        },
        {
            imgUrl: "../assets/icons/long-paper.png",
            content: [
                {
                    title: "PHASE3",
                    items: ["Trending on X", "CG CMC Listing"],
                },
                {
                    title: "PHASE4",
                    items: [
                        "Establish Poopie presence",
                        "Spreading memes",
                        "Ensure long-term sustainability",
                    ],
                },
            ],
        },
    ]
}

export const Roadmap: FC = () => {
    return (
        <Box component="section" id="roadmap">
            <Container maxWidth="lg">
                <Stack
                    sx={{
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "24px",
                        padding: {
                            xs: "50px 20px 20px 20px",
                            lg: "150px 0px 20px 0px",
                        },
                        maxWidth: '1440px'
                    }}
                >
                    <Stack component="h2" direction="row">
                        <Typography component="span" variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'}>
                            OUR&nbsp;
                        </Typography>
                        <Typography component="span" variant="h2" fontFamily={'Mountains of Christmas'} color="#FFD258" fontSize={'80px'}>
                            ROADMAP
                        </Typography>
                    </Stack>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: "center",
                            fontSize: '24px'
                        }}
                    >
                        {phaseData.description}
                    </Typography>
                </Stack>
            </Container>

            <SlicerBar data={phaseData.roadmap} />
        </Box>
    )
}