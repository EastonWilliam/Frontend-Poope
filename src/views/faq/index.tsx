import { FC, useState } from "react";

import {
    Box,
    Container,
    Grid2,
    Stack,
    styled,
    Theme,
    Typography,
} from "@mui/material"

import { BasicButton } from "@/components/Buttons/Buttons";

import AccordionDefault from "@/components/Accordion/Accordion";
import SelectTop from "@/components/Select";

interface accordion {
    id: string;
    title: string;
    content: string;
    type: number;
}

const faqData = {
    tabs: [
        "Frequently Asked Questions",
        "Resources",
        "How to Buy",
        "Documentation",
    ],
    accordions: [
        {
            id: "accordion1",
            title: "A hale holds nearly 30% of Poope Coin supply! is this supply! Is this true?",
            content:
                "Ok yes and it always has! The simple fact",
            type: 1,
        },
        {
            id: "accordion2",
            title: "Poope Coin has no utility",
            content:
                "Oh yes it does ,and it always has! The simple fact is that money has utility - and Poope is money",
            type: 1,
        },
        {
            id: "accordion3",
            title: " Can you put a cap on Poope Coin",
            content:
                "Oh yes it does, and it always has! The simple fact is that money has utility - and Poope is money",
            type: 3
        }

    ]
}

const SectionHeader = styled(Stack)(({ theme }: { theme: Theme }) => ({
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    "& #read-more": {
        display: "flex",
        flexDirection: 'row',

        [theme.breakpoints.down("md")]: {
            display: 'none',
        }
    }
}))

export const Faq: FC = () => {
    const [curTab, setTab] = useState<number>(0);
    const [data, setData] = useState<accordion[]>(faqData.accordions);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        const nextData = faqData.accordions.filter(
            (item) => item.type >= newValue,
        )
        setTab(newValue);
        setData(nextData);
    };

    return (
        <Box component={'section'} id="faq">
            <Container
                maxWidth="xl"
                style={{
                    gap: '24px',
                    maxWidth: '1440px'
                }}
            >
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        padding: { xs: '50px 20px', lg: '150px 50px', xl: '150px' },
                    }}>
                </Stack>
                <SectionHeader>
                    <Stack sx={{ display: 'flex', direction: 'column', width: '20rem' }}>
                        <Typography component='span' variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'}>
                            FIND OUT
                        </Typography>
                        <Typography component='span' variant="h2" fontFamily={'Mountains of Christmas'} color="#FFD258" fontSize={'80px'}>
                            MORE
                        </Typography>

                    </Stack>
                    <Stack id="read-more" fontSize={''}>
                        <Typography variant='body1' sx={{ maxWidth: '260px', color: '#9F9F9F', fontSize: '24px' }}>
                            Did you find what you looking for?
                        </Typography>
                    </Stack>
                    <BasicButton
                        width={'xs:10rem'}
                        height={'3rem'}
                        borderColor={'#f0d14aff !important'}
                        background="none !important"
                        textColor={'#f0d14aff !important'}

                        hoverColor={'#5c4d09ff !important'}
                        text='VIEW  MORE'
                        radius={'3rem'}

                    ></BasicButton>

                </SectionHeader>
                <Grid2 container justifyContent={'space-between'}
                    sx={{
                        gap: { xs: 1, md: 2, lg: 5, xl: 12.5 },
                        mt: { xs: 5, md: 10 },
                    }}
                >

                    <Stack
                        alignItems={'flex-start'}
                        sx={{
                            gap: "16px",
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {faqData.tabs.map((tab, index) => (
                            <BasicButton
                                width={'auto'}
                                height={'auto'}
                                text={tab}
                                borderColor={'#ffffffff !important'}
                                background={"none !important"}
                                fontSize={'24px'}
                                textColor={'#ffffff !important'}
                                hoverColor={'#ffd724ff !important'}
                                hoverTextColor={"#000000 !important"}
                                radius={'100px'}
                            ></BasicButton>
                        ))}
                    </Stack>
                    <Stack
                        sx={{
                            display: { sx: "block", md: 'none' },
                            justifyItems: 'center',
                            width: '100%',
                        }}
                    >
                        <SelectTop tabs={faqData.tabs} />
                    </Stack>

                    <Grid2 size={{ xs: 12, md: 7 }}>
                        <AccordionDefault data={data} />
                    </Grid2>
                </Grid2>
                <Stack
                    sx={{
                        gap: '24px',
                        display: { xs: 'flex', md: 'none' },
                        alignItems: 'center'
                    }}>
                    <Stack id="read-more" fontSize={''} mt={'5rem'}>
                        <Typography variant='body1' sx={{ maxWidth: '260px', color: '#9F9F9F', fontSize: '24px' }}>
                            Did you find what you looking for?
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box >
    )
}