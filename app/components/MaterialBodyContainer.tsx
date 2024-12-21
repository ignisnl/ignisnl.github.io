import { Box, styled } from "@mui/material";

const MaterialBodyContainer = styled(Box)(({ theme }) => ({
  margin: `0 ${theme.spacing(2)}`,
  width: `calc(100% - ${theme.spacing(4)})`,
  [theme.containerQueries("viewport").up("sm")]: {
    margin: `0 ${theme.spacing(4)}`,
    width: `calc(100% - ${theme.spacing(8)})`,
  },
  [theme.containerQueries("viewport").up("md")]: {
    marginLeft: theme.spacing(6),
    marginRight: "auto",
    width: `calc(100% - ${theme.spacing(12)})`,
    maxWidth: 736,
  },
  [theme.containerQueries("viewport").up("lg")]: {
    marginRight: theme.spacing(25),
    width: `calc(100% - ${theme.spacing(31)})`,
    maxWidth: "none",
  },
  [theme.containerQueries("viewport").up("xl")]: {
    marginRight: "auto",
    maxWidth: 1040,
  },
})) as typeof Box;

export default MaterialBodyContainer;
