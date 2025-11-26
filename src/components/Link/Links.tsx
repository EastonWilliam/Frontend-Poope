import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


interface pageLinkProps {
  text: string
  color: string
  url: string
}

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function PageLink({ text, color, url }: pageLinkProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        color: color,
        fontFamily: 'Inter',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href={url} underline="none">
        {text}
      </Link>
    </Box>
  );
}