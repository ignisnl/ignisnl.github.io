import { Box, styled } from "@mui/material";

const MaterialBodyContainer = styled(Box)(({ theme }) => ({
  margin: `0 ${theme.spacing(2)}`,
  width: `calc(100% - ${theme.spacing(4)})`,
  [theme.containerQueries.up("sm")]: {
    margin: `0 ${theme.spacing(4)}`,
    width: `calc(100% - ${theme.spacing(8)})`,
  },
  [theme.containerQueries.up("md")]: {
    margin: "0 auto",
    width: 840,
  },
  [theme.containerQueries.up("lg")]: {
    margin: `0 ${theme.spacing(25)}`,
    width: `calc(100% - ${theme.spacing(50)})`,
  },
  [theme.containerQueries.up("xl")]: {
    margin: "0 auto",
    width: 1040,
  },
})) as typeof Box;

export default MaterialBodyContainer;
