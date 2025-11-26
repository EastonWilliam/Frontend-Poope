import * as React from 'react';
import { ReactElement } from "react";

import { Button, MenuItem, Select, SelectChangeEvent, styled, alpha, InputBase, Link, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import value from '../../custom';

type Size = string | number;

interface BasicButtonProps {
    width: Size
    height: Size
    borderColor?: string
    background?: string
    backgroundColor?: string
    textColor?: string
    hoverColor?: string
    hoverTextColor?: string
    text: string
    fontSize?: Size
    startIcon?: ReactElement
    endIcon?: ReactElement
    link?: string
    radius: Size
    onClick?: () => void;

}

interface DropdownButtonProps {
    width: Size
    height: Size
    borderColor?: string
    backgroundColor?: string
    icon: ReactElement[],
    justifyContent?: string
    onChange?: (value: string) => void;
    value?: string
}

interface LogoButtonProps {
    width: Size
    height: Size
    logoIcon: ReactElement
    fontSize?: Size
    fontWeight?: Size
    fontFamily?: string
    color?: string
    text: string
    onClick?: () => void
}

interface ColorButtonProps {
    width?: Size
    height?: Size
    primaryColor?: string
    secondaryColor?: string
    onClick?: () =>
}

interface WalletLoginButtonProps {
    width: Size
    height: Size
    borderColor?: string
    backgroundColor?: string
    textColor?: string
    hoverColor?: string
    text: string
    startIcon?: ReactElement
    endIcon?: ReactElement
    link?: string
    radius: string | number
    onClick?: () => void
}

interface SearchBarProps {
    placeHolder?: string
    width: Size
    height: Size
    onChange?: (value: string) => void
    value?: string
    ariaLabel: string
}
export function LogoButton({
    width = 'auto',
    height = 'auto',
    logoIcon,
    text,
    fontSize = 20,
    fontWeight = 700,
    fontFamily,
    color = 'inherit'
}: LogoButtonProps) {
    return (
        <Button sx={{
            width,
            height,
            fontSize,
            fontWeight,
            fontFamily,
            color,
            background: 'none !important',
            border: 'none !important',
            textDecoration: 'none !important',
            padding: 0,
            minWidth: 0
        }} startIcon={logoIcon} >

            <Typography variant='h2' sx={{ fontFamily, textDecoration: 'none' }}>
                {text}
            </Typography>
        </Button >
    )
}

export function BasicButton({
    width = "auto",
    height = 40,
    borderColor,
    backgroundColor,
    background,
    textColor = "#fff",
    hoverColor,
    hoverTextColor,
    text,
    fontSize,
    startIcon,
    endIcon,
    link,
    radius }: BasicButtonProps) {
    return (<Button startIcon={startIcon} endIcon={endIcon} variant="contained" href={link}
        sx={{
            width: width,
            height: height,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            background: background,
            fontSize: fontSize,
            color: textColor,
            textTransform: 'none',
            borderRadius: radius,
            '&:hover': {
                backgroundColor: hoverColor,
                color: hoverTextColor
            }
        }}
    >{text}</Button>)
}


export function DropdownLanguageButton({
    width, height, borderColor, backgroundColor, icon, justifyContent
}: DropdownButtonProps) {

    const [lang, setLang] = React.useState('En');

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };

    return (

        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Language"
            onChange={handleChange}
            sx={{ width: width, height: height, borderColor: borderColor, backgroundColor: backgroundColor, justifyContent: justifyContent }}
        >

            <MenuItem key="En" value="En">
                <img src={icon[0]} width={'24px'} height={'24px'} alt="English" />
                En</MenuItem>
            <MenuItem key="Fr" value="Fr">
                <img src={icon[1]} width={'24px'} height={'24px'} alt="French" />
                Fr</MenuItem>
            <MenuItem key="Po" value="Po">
                <img src={icon[2]} width={'24px'} height={'24px'} alt="Portuguese" />
                Po</MenuItem>

        </Select>
    )
}

export function ColorButton({ width, height, primaryColor, secondaryColor }: colorButtonProps) {
    return (
        <Button sx={{ width: width, height: height, borderRadius: "50%", minWidth: '20px' }} >
            <DarkModeIcon />
        </Button>
    )
}

export function WalletLoginButton({
    width, height, borderColor, backgroundColor, textColor, hoverColor, text, startIcon, link, radius, onClick
}: walletLoginButtonProps) {
    return (<Button startIcon={startIcon} variant="contained" href={link} onClick={onClick}
        sx={{
            background: backgroundColor,
            color: textColor,
            textTransform: 'none',
            width: width,
            height: height,
            borderColor: borderColor,
            borderRadius: radius,
            '&:hover': {
                backgroundColor: hoverColor
            }
        }}
    > {text}</Button >)
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
    }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch'
            }
        }
    }
}))

export function CustomizedSearchBar({ placeHolder, width, height }: styledSearchBarProps) {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={placeHolder}
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: width, height: height }}
            />
        </Search>
    )
}