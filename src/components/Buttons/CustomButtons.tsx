// import { ReactElement } from 'react'

// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
// import CallMadeIcon from '@mui/icons-material/CallMade'
// import CallReceivedIcon from '@mui/icons-material/CallReceived'
// import { Box, Button, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'

// import { Currencies } from '@/constants/currency'
// import { colorSchemes } from '@/theme/themePrimitives'

// interface sizeProps {
//   width: string | number
//   height: string | number
// }

// const useSizeStyles = ({ width, height }: sizeProps) => ({
//   width,
//   height
// })

// interface StyledLinkButtonProps extends sizeProps {
//   startIcon?: ReactElement
//   endIcon?: ReactElement
//   text?: string
//   backgroundColor: string
//   textColor: string
//   hoverColor: string
//   href: string
// }

// interface StyledLangButtonProps extends sizeProps {
//   flagIcon: ReactElement
//   language: string
//   backgroundColor: string
//   textColor: string
//   hoverColor: string
// }

// interface styledNavButtonProps extends sizeProps {
//   icon: ReactElement
// }

// interface styledActionButtonProps extends sizeProps {
//   icon: ReactElement
//   label: string
// }

// interface styledStateButtonProps extends sizeProps {
//   percent: number
//   color: string
//   borderColor: string
// }

// interface styledCurrencyButtonProps extends sizeProps {
//   icon: ReactElement
//   type: string
// }

// interface basicButtonProps extends sizeProps {
//   color: string
//   borderColor: string
//   backgroundColor: string
//   radius: number
//   value: string
//   startIcon?: ReactElement
//   endIcon?: ReactElement
// }

// interface styledCurrencyField {
//   width: string
//   height: string
//   backgroundColor: string
//   color: string
//   value: number
// }

// interface styledTransactionList {
//   time: number
//   count: number
//   status: string
// }

// export function CustomizedLinkButton({
//   startIcon,
//   endIcon,
//   text,
//   backgroundColor,
//   textColor,
//   hoverColor,
//   href,
//   ...size
// }: StyledLinkButtonProps) {
//   return (
//     <Button
//       startIcon={startIcon}
//       endIcon={endIcon}
//       variant='contained'
//       href={href}
//       sx={{
//         backgroundColor: backgroundColor,
//         color: textColor,
//         textTransform: 'none',
//         ...useSizeStyles(size),
//         '&:hover': {
//           backgroundColor: hoverColor
//         }
//       }}
//     >
//       {text}
//     </Button>
//   )
// }

// export function CustomizedLangButton({
//   flagIcon,
//   language,
//   backgroundColor,
//   textColor,
//   hoverColor,
//   width,
//   height
// }: StyledLangButtonProps) {
//   return (
//     <Button
//       startIcon={flagIcon}
//       variant='contained'
//       sx={{
//         backgroundColor: backgroundColor,
//         color: textColor,
//         width: width,
//         height: height,
//         '&:hover': {
//           backgroundColor: hoverColor
//         }
//       }}
//     >
//       {language}
//     </Button>
//   )
// }

// export function CustomizedNavButton({ icon, width, height }: styledNavButtonProps) {
//   return (
//     <Button
//       sx={{
//         minWidth: 0,
//         width: width,
//         height: height,
//         borderRadius: '50%',
//         backgroundColor: '#b7b8ba08',
//         '&:hover': {
//           backgroundColor: '#3738386e'
//         }
//       }}
//     >
//       {icon}
//     </Button>
//   )
// }

// export function CustomizedActionButton({ label, icon }: styledActionButtonProps) {
//   return (
//     <Stack direction='column'>
//       <Button sx={{ borderRadius: '50%', width: '2rem', height: '2rem' }} startIcon={icon}></Button>
//       <Typography>{label}</Typography>
//     </Stack>
//   )
// }

// export function CustomizedStateButton({ percent, color, borderColor }: styledStateButtonProps) {
//   if (percent > 0) {
//     return (
//       <Button
//         sx={{ borderRadius: '50%', color: color, borderColor: borderColor, width: '3rem', height: '1rem' }}
//         endIcon={<CallMadeIcon />}
//       >
//         + {percent}%
//       </Button>
//     )
//   } else {
//     return (
//       <Button
//         sx={{ borderRadius: '50%', color: color, borderColor: borderColor, width: '3rem', height: '1rem' }}
//         endIcon={<CallReceivedIcon />}
//       >
//         - {percent}%
//       </Button>
//     )
//   }
// }

// export function CustomizedCurrencyButton({ icon, type }: styledCurrencyButtonProps) {
//   return (
//     <Button
//       startIcon={icon}
//       sx={{ width: '3rem', height: '1rem', color: colorSchemes.dark.palette.grey[100], background: 'none' }}
//     >
//       {type}
//     </Button>
//   )
// }

// export function CustomizedCurrencyInput({ width, height, backgroundColor, color, value }: styledCurrencyField) {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: backgroundColor }}>
//       <TextField
//         id='filled-search'
//         sx={{
//           width: width,
//           height: height,

//           color: color
//         }}
//         variant='filled'
//         value={value}
//       ></TextField>

//       <Typography>Max</Typography>
//       <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
//         {Currencies.map((item, index) => {
//           return (
//             <MenuItem value={item.value} key={item.value + index} sx={{ background: 'none' }}>
//               <AttachMoneyIcon />
//               <em>{item.value}</em>
//             </MenuItem>
//           )
//         })}
//       </Select>
//     </Box>
//   )
// }

// export function CustomizedBasicButton({
//   color,
//   backgroundColor,
//   borderColor,
//   radius,
//   value,
//   width,
//   height,
//   startIcon,
//   endIcon
// }: basicButtonProps) {
//   return (
//     <Button
//       sx={{
//         width: width,
//         height: height,
//         color: color,
//         backgroundColor: backgroundColor,
//         borderColor: borderColor,
//         borderRadius: radius
//       }}
//       startIcon={startIcon}
//       endIcon={endIcon}
//     >
//       {value}
//     </Button>
//   )
// }

// export function CustomizedTransactionList({ time, count, status }: styledTransactionList) {
//   return (
//     <Stack direction={'row'} spacing={'2rem'}>
//       <Typography>{time}</Typography>
//       <Typography>{count} $POI</Typography>
//       <CustomizedBasicButton
//         color={colorSchemes.dark.palette.grey[50]}
//         backgroundColor={colorSchemes.dark.palette.baseShadow}
//         borderColor='#000000'
//         radius={30}
//         value={status}
//         width={'3rem'}
//         height={'1rem'}
//         endIcon={<CallMadeIcon />}
//       ></CustomizedBasicButton>
//     </Stack>
//   )
// }
