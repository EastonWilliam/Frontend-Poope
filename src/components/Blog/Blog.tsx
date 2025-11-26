import { FC } from 'react'

import { CardContent, CardMedia, styled, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'


import { BasicButton } from '../Buttons/Buttons'
interface Props {
  article: {
    title: string
    imgUrl?: string
    content: string
  }
}

const BlogTitle = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: 'full'
})

const BlogContent = styled(Typography)({
  color: '#9F9F9F',
  useSelect: 'none',
  fontWeight: 400,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  height: '70px',
  width: 'full'
})

export const BlogArticle: FC<Props> = ({ article }) => {
  return (
    <Card
      sx={{
        minWidth: 312,
        width: 312,
        height: 400,
        touchAction: 'pan-x',
        msTouchAction: 'pan-x',
        background: 'none !important',
        border: 'none',
        boxShadow: 'none'
      }}
    >
      <CardMedia sx={{ height: 200 }} image={article.imgUrl ?? './assets/update1.png'} />
      <CardContent style={{ maxWidth: '100%' }}>
        <BlogTitle variant='h4'>{article.title}</BlogTitle>
        <BlogContent>{article.content}</BlogContent>
      </CardContent>
      <CardActions sx={{ marginTop: '2rem' }}>
        <BasicButton
          width={'8rem'}
          height={'3rem'}
          borderColor='#f0c94cff!important'
          background='none !important'
          textColor='#eed02aff !important'
          hoverColor='#a89807ff !important'
          hoverTextColor='#000000 !important'
          text='View More'
          radius={'100px'}
        ></BasicButton>
      </CardActions>
    </Card>
  )
}
