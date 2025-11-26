import { FC } from "react";
import { Grid, Stack, styled, Typography, Box, Container } from "@mui/material";

import { BlogArticle } from "@/components/Blog/Blog";


const blogData = {
    desription: "This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave the way for innovative developments.",
    articles: [
        {
            imgUrl: "../assets/icons/update1.png",
            title: "Poope Coin has no Utility",
            content: "Oh yes it does, and it always has! The simple fact is that money has utility - and Poo is money! Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE"
        },
        {
            imgUrl: "./assets/icons/update2.png",
            title: "How to win with Poope",
            content: "Cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke..."
        },
        {
            imgUrl: "./assets/icons/update3.png",
            title: "Poope Coin has no Utility",
            content: "Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE"
        }
    ]
}

const StyledBlog = styled(Stack)(() => ({
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
}));

const BlogGrid = styled(Grid)({
    my: { xs: 3, md: 6.125 },
    columnGap: 3,
    overflow: "scroll",
    maxWidth: "1440px",
    width: "100%",
    gap: "50px",
    justifyContent: "space-evenly",
    "&::-webkit-scrollbar": {
        display: "none"
    }
});

const CenteredTypography = styled(Typography)(() => ({
    textAlign: "center",
}))


export const Blog: FC = () => {
    return (
        <Box component="section" id="community">
            <Container maxWidth="xl">
                <StyledBlog sx={{ padding: { xs: "50px 0px", lg: "150px 0px", xl: "150px 0px" } }}>
                    <Stack component="h2" direction="row">
                        <Typography component="span" variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'}>
                            STAY&nbsp;
                        </Typography>
                        <Typography component="span" variant="h2" fontFamily={'Mountains of Christmas'} fontSize={'80px'} color="#FFD258">
                            UPDATE
                        </Typography>
                    </Stack>
                    <BlogGrid container wrap="nowrap">
                        {blogData.articles.map((article) => (
                            <BlogArticle key={article.title} article={article} />
                        ))}
                    </BlogGrid>
                </StyledBlog>
            </Container>
        </Box >
    )
}