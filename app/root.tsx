import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type React from "react";
import MaterialBodyContainer from "~/components/MaterialBodyContainer";
import materialTheme from "~/theme";
import { useState } from "react";

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  },
];

function Document({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const mdAndAbove = useMediaQuery((theme) => theme.breakpoints.up("md"), {
    noSsr: true,
  });

  const drawer = (
    <>
      {mdAndAbove && (
        <>
          <Toolbar>
            <Typography variant="h5" component="h1">
              Lorenzo Grillo
            </Typography>
          </Toolbar>
          <Divider />
        </>
      )}
      <List>
        <ListItem>
          <ListItemButton component={NavLink} to="/">
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={NavLink} to="/marks">
            <ListItemText>Marks</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
  const drawerWidth = 256;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* TODO: Remove below script and related files once migrated from GitHub Pages */}
        <script src="/spa_redirect.js" />
      </head>
      <body>
        <Box
          sx={{
            display: "flex",
            containerType: "inline-size",
            containerName: "viewport",
          }}
        >
          <AppBar
            position="fixed"
            sx={{
              width: { md: `calc(100% - ${drawerWidth}px)` },
              ml: { md: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              {!mdAndAbove && (
                <>
                  <IconButton
                    color="inherit"
                    aria-label="open menu"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    {/* TODO: replace with SVG icon once migrated from GitHub Pages */}
                    <Icon>menu</Icon>
                  </IconButton>
                  <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
                    Lorenzo Grillo
                  </Typography>
                </>
              )}
            </Toolbar>
          </AppBar>

          {mdAndAbove ? (
            <Box component="nav">
              <Drawer
                variant="permanent"
                open
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                PaperProps={{ sx: { width: drawerWidth } }}
              >
                {drawer}
              </Drawer>
            </Box>
          ) : (
            <Drawer
              component="nav"
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerClose}
              onTransitionEnd={handleDrawerTransitionEnd}
              sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
              ModalProps={{ keepMounted: true }}
              PaperProps={{ sx: { width: drawerWidth } }}
            >
              {drawer}
            </Drawer>
          )}

          <Box
            sx={{
              flex: 1,
              width: { md: `calc(100% - ${drawerWidth}px)` },
              mx: "auto",
              maxWidth: 1392,
            }}
          >
            <Toolbar />
            <MaterialBodyContainer component="main">
              {children}
            </MaterialBodyContainer>
          </Box>
        </Box>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline enableColorScheme />
      <Document>{children}</Document>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
