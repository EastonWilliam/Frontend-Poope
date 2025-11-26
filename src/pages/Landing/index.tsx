import { Hero } from '@/views/hero'
import { About } from '@/views/about'
import { Banner } from '@/views/banner'
import { Blog } from '@/views/blog'
import { Faq } from '@/views/faq'
import { Roadmap } from '@/views/roadmap'
import { Tokenomic } from '@/views/tokenomic'
import { Box, Stack } from '@mui/material'
import React from 'react'

export const Landing = () => {
    return (
        <>
            <Hero />
            <About />
            <Tokenomic />
            <Roadmap />
            <Faq />
            <Blog />
            <Banner />
        </>
    )
}