import { useState } from "react";

import { MenuOutlined } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Container,
  Link,
  Stack,
  Theme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ColorButton,
  DropdownLanguageButton,
  LogoButton,
  WalletLoginButton,
} from "@/components/Buttons/Buttons";

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Navbar = styled(Stack)(({ theme }: { theme: Theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 32,
  [theme.breakpoints.down("lg")]: {
    gap: 8,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const [mobileHeaderOpen, setMoblieHeaderOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: "0px",
        left: "0px",
        zIndex: "100",
        backdropFilter: "blur(15px)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        transition: "background 0.3s",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: "24px 10px", lg: "24px 30px", xl: "24px 100px" },
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* logo */}
          <Link href="#" underline="none"
            sx={{
              textDecoration: "none",                // remove normal underline
              "&:hover": { textDecoration: "none" }, // remove hover underline
              "&::before": {                         // kill the pseudo-element underline
                display: "none",
              },
            }}>
            <Stack direction={"row"} gap={1} >
              <LogoButton
                width={'auto'}
                height={'auto'}
                fontSize={'34px'}
                fontWeight={'700'}
                fontFamily="Mountains of Christmas"
                logoIcon={<img src="../assets/icons/logo.png" alt="Logo" width={'36px'} height={'36px'} />}
                text="POOPE"
              />

            </Stack>
          </Link>

          {/* navigation */}
          <Navbar>
            {["About", "Tokenomics", "Roadmap", "Community", "FAQ"].map(
              (item) => (
                <Link
                  href={"#" + item.trim().toLowerCase()}
                  variant="subtitle2"
                  key={item}
                  underline="none"
                  sx={{
                    fontSize: "18px",
                    "&::before": {                         // kill the pseudo-element underline
                      display: "none",
                    },
                  }}
                >
                  {item}
                </Link>
              )
            )}
            <DropdownLanguageButton
              width={"6rem"}
              height={"2rem"}
              borderColor="white"
              icon={["../assets/icons/en.png", "../assets/icons/en.png", "../assets/icons/en.png"]}

            />
          </Navbar>

          {/* header buttons */}
          <Stack
            sx={{
              flexDirection: "row",
              columnGap: "8px",
            }}
          >
            <ColorButton />
            <Stack
              sx={{
                flexDirection: "row",
                display: { xs: "none", md: "flex" },
              }}
            >
              <WalletLoginButton
                width={"150px"}
                height={"40px"}
                backgroundColor="#FFD258 !important"
                hoverColor="white !important"
                textColor="#000000"
                text="Connect"
                startIcon={<AccountBalanceWalletIcon />}
                link="#"
                radius="100px"
              />
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                display: { xs: "flex", md: "none" },
              }}
            >
              <ButtonBase
                color="primary"
                onClick={() => setMoblieHeaderOpen(true)}
              >
                <Stack
                  width="40px"
                  height="40px"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MenuOutlined />
                </Stack>
              </ButtonBase>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      {/* <ConnectWallet open={walletOpen} setOpen={handleConnectWallet} /> */}
      {/* <MobileHeader
        open={mobileHeaderOpen}
        handleClose={() => setMoblieHeaderOpen(false)}
      /> */}
    </Box>
  );
};

export default Header;
