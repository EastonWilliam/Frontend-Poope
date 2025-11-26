import { Typography, Box } from '@mui/material'


interface sloganProps {
    width: string | number
    height: string | number
    fontFamily: string
    fontSize: string | number
    beforeText: string
    afterText: string
    beforeColor: string
    afterColor: string
}


export function Slogan({ width, height, fontFamily, fontSize, beforeText, afterText, beforeColor, afterColor }: sloganProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', width: width, height: height }}>
            <Typography sx={{
                fontFamily: fontFamily,
                fontSize: fontSize,
                color: beforeColor
            }}>{beforeText}</Typography>
            <Typography sx={{
                fontFamily: fontFamily,
                fontSize: fontSize,
                color: afterColor
            }}>{afterText}</Typography>
        </Box>
    )
}