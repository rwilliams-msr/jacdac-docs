import React, { lazy, useContext } from "react"
import clsx from "clsx"
import {
    makeStyles,
    Container,
    Hidden,
    Box,
    useMediaQuery,
} from "@material-ui/core"
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
import AppBar from "@material-ui/core/AppBar"
// tslint:disable-next-line: no-submodule-imports
import Toolbar from "@material-ui/core/Toolbar"
// tslint:disable-next-line: no-submodule-imports
import Typography from "@material-ui/core/Typography"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import MoreIcon from "@material-ui/icons/MoreVert"
// tslint:disable-next-line: no-import-side-effect
import "./layout.css"
import SEO from "./seo"
import FlashButton from "./FlashButton"
// tslint:disable-next-line: no-submodule-imports
import {
    createMuiTheme,
    responsiveFontSizes,
    createStyles,
    useTheme,
    ThemeOptions,
} from "@material-ui/core/styles"
import AppContext, { DrawerType } from "./AppContext"
import useFirmwareBlobs from "./firmware/useFirmwareBlobs"
import { MDXProvider } from "@mdx-js/react"
import DarkModeProvider from "./ui/DarkModeProvider"
import DarkModeContext from "./ui/DarkModeContext"
import Alert from "./ui/Alert"
import GitHubButton from "./GitHubButton"
import useMdxComponents from "./useMdxComponents"
import Footer from "./ui/Footer"
import DrawerToolsButtonGroup from "./DrawerToolsButtonGroup"
import IconButtonWithTooltip from "./ui/IconButtonWithTooltip"
import Flags from "../../jacdac-ts/src/jdom/flags"
import ThemedLayout from "./ui/ThemedLayout"
import OpenDashboardButton from "./buttons/OpenDashboardButton"
import PacketStats from "./PacketStats"

import Suspense from "./ui/Suspense"
const WebDiagnostics = lazy(() => import("./WebDiagnostics"));
const AppDrawer = lazy(() => import("./AppDrawer"));
const ToolsDrawer = lazy(() => import("./ToolsDrawer"))

export const TOC_DRAWER_WIDTH = 18
export const DRAWER_WIDTH = 40
export const TOOLS_DRAWER_WIDTH = 22
export const MOBILE_DRAWER_WIDTH = 20
export const MOBILE_TOOLS_DRAWER_WIDTH = 18
export const MOBILE_BREAKPOINT = "sm"
export const MEDIUM_BREAKPOINT = "md"

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: "flex",
            flexGrow: 1,
        },
        grow: {
            flexGrow: 1,
        },
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${DRAWER_WIDTH}rem)`,
            marginLeft: `${DRAWER_WIDTH}rem`,
            [theme.breakpoints.down(MOBILE_BREAKPOINT)]: {
                width: `calc(100% - ${MOBILE_DRAWER_WIDTH}rem)`,
                marginLeft: `${MOBILE_DRAWER_WIDTH}rem`,
            },
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        tocBarShift: {
            width: `calc(100% - ${TOC_DRAWER_WIDTH}rem)`,
            marginLeft: `${TOC_DRAWER_WIDTH}rem`,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolBarShift: {
            width: `calc(100% - ${TOOLS_DRAWER_WIDTH}rem)`,
            marginRight: `${TOOLS_DRAWER_WIDTH}rem`,
            [theme.breakpoints.down(MOBILE_BREAKPOINT)]: {
                width: `calc(100% - ${MOBILE_TOOLS_DRAWER_WIDTH}rem)`,
                marginRight: `${MOBILE_TOOLS_DRAWER_WIDTH}rem`,
            },
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
        hideMobile: {
            [theme.breakpoints.down("md")]: {
                display: "none",
            },
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        content: {
            display: "flex",
            minHeight: "100vh",
            minWidth: "10rem",
            flexDirection: "column",
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            flexGrow: 1,
        },
        mainContent: {
            flexGrow: 1,
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolsContentShift: {
            width: `calc(100% - 0.5rem)`,
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `-${TOOLS_DRAWER_WIDTH}rem`,
            [theme.breakpoints.down(MOBILE_BREAKPOINT)]: {
                marginLeft: `-${MOBILE_TOOLS_DRAWER_WIDTH}rem`,
            },
        },
        fab: {
            position: "fixed",
            bottom: theme.spacing(3),
            right: theme.spacing(3),
            "& > *": {
                margin: theme.spacing(1),
            },
        },
    })
)

export interface LayoutProps {
    element?: JSX.Element
    props: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pageContext?: any
        path?: string
        uri?: string
    }
}

export default function Layout(props: LayoutProps) {
    return (
        <DarkModeProvider>
            <LayoutWithDarkMode {...props} />
        </DarkModeProvider>
    )
}

function LayoutWithDarkMode(props: LayoutProps) {
    const { element, props: pageProps } = props
    const { pageContext, path } = pageProps
    const { frontmatter } = pageContext || {}
    const makeCodeTool = /tools\/makecode-/.test(path);
    const { fullScreen } = frontmatter || {
        fullScreen: makeCodeTool
    }
    const { darkMode, darkModeMounted } = useContext(DarkModeContext)
    const isDark = darkMode === "dark"
    const themeDef: ThemeOptions = {
        palette: {
            primary: {
                main: isDark ? "#56d364" : "#2e7d32",
            },
            secondary: {
                main: "#ffc400",
            },
            contrastThreshold: isDark ? 5.1 : 3.1,
            type: darkMode,
        },
    }
    const rawTheme = createMuiTheme(themeDef)
    const theme = responsiveFontSizes(rawTheme)
    const mdxComponents = useMdxComponents()

    if (!darkModeMounted) return <div />

    if (fullScreen)
        return <MDXProvider components={mdxComponents}>{element}</MDXProvider>

    return (
        <ThemedLayout theme={theme}>
            <MDXProvider components={mdxComponents}>
                <LayoutWithContext {...props} />
            </MDXProvider>
        </ThemedLayout>
    )
}

function MainAppBar(props: LayoutProps) {
    const { props: pageProps } = props
    const { pageContext } = pageProps
    const { frontmatter } = pageContext || {}
    const { pageTitle } = frontmatter || {}

    const classes = useStyles()
    const { drawerType, widgetMode, toolsMenu, setToolsMenu } = useContext(
        AppContext
    )
    const { darkMode } = useContext(DarkModeContext)
    const drawerOpen = drawerType !== DrawerType.None
    const appBarColor =
        darkMode === "dark" ? "inherit" : widgetMode ? "default" : undefined

    const toggleToolsMenu = () => setToolsMenu(!toolsMenu)

    return (
        <Box displayPrint="none">
            <AppBar
                position="fixed"
                color={appBarColor}
                className={clsx(classes.appBar, {
                    [classes.tocBarShift]: drawerType === DrawerType.Toc,
                    [classes.appBarShift]:
                        drawerOpen && drawerType !== DrawerType.Toc,
                    [classes.toolBarShift]: toolsMenu,
                })}
            >
                <Toolbar>
                    <DrawerToolsButtonGroup
                        className={clsx(
                            classes.menuButton,
                            drawerOpen && classes.hideMobile
                        )}
                        showToc={true}
                        showCurrent={true}
                    />
                    <Hidden implementation="css" xsDown={true}>
                        <Typography component="h1" variant="h6">
                            Jacdac{" "}
                            {pageTitle &&
                                pageTitle !== "Jacdac" &&
                                `/ ${pageTitle}`}
                        </Typography>
                    </Hidden>
                    <div className={classes.grow} />
                    <PacketStats />
                    <OpenDashboardButton className={clsx(classes.menuButton)} />
                    <GitHubButton
                        className={clsx(
                            classes.menuButton,
                            drawerOpen && classes.hideMobile
                        )}
                        repo={"/github"}
                    />
                    <FlashButton
                        className={clsx(
                            classes.menuButton,
                            drawerOpen && classes.hideMobile
                        )}
                    />
                    <IconButtonWithTooltip
                        className={clsx(
                            classes.menuButton,
                            drawerOpen && classes.hideMobile
                        )}
                        aria-label="More tools"
                        title="More"
                        edge="start"
                        color="inherit"
                        onClick={toggleToolsMenu}
                    >
                        <MoreIcon />
                    </IconButtonWithTooltip>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

function LayoutWithContext(props: LayoutProps) {
    const { element, props: pageProps } = props
    const { pageContext, path } = pageProps
    const { frontmatter } = pageContext || {}
    const makeCodeTool = /tools\/makecode-/.test(path);
    const { hideMainMenu = false, hideUnderConstruction = false } =
        frontmatter || {
            hideMainMenu: makeCodeTool,
            hideUnderConstruction: makeCodeTool
        }

    const classes = useStyles()

    const { darkMode } = useContext(DarkModeContext)
    const { drawerType, toolsMenu } = useContext(AppContext)
    useFirmwareBlobs()
    const drawerOpen = drawerType !== DrawerType.None
    const theme = useTheme()
    const medium = useMediaQuery(theme.breakpoints.down(MEDIUM_BREAKPOINT))
    const container = !medium && !/^\/(tools\/|dashboard)/.test(path)

    const mainClasses = clsx(classes.content, {
        [classes.contentShift]: drawerOpen,
        [classes.toolsContentShift]: toolsMenu,
    })
    const MainSection = () => (
        <>
            <main className={classes.mainContent}>
                <div className={classes.drawerHeader} />
                {!hideUnderConstruction && (
                    <Alert closeable={true} severity="warning">
                        UNDER CONSTRUCTION - We are still working and changing
                        the Jacdac specification. Do not build devices using
                        Jacdac.
                    </Alert>
                )}
                {Flags.diagnostics && <Suspense><WebDiagnostics /></Suspense>}
                <Typography className={"markdown"} component="span">
                    {container ? <Container>{element}</Container> : element}
                </Typography>
            </main>
            <Footer />
        </>
    )

    return (
        <div className={clsx(darkMode, classes.root)}>
            <header>
                <SEO lang="en" />
            </header>
            {!hideMainMenu && (
                <nav>
                    <MainAppBar {...props} />
                    {drawerType !== DrawerType.None && <Suspense><AppDrawer pagePath={path} /></Suspense>}
                    {toolsMenu && <Suspense><ToolsDrawer /></Suspense>}
                </nav>
            )}
            {container ? (
                <Container
                    maxWidth={"xl"}
                    disableGutters={true}
                    className={mainClasses}
                >
                    <MainSection />
                </Container>
            ) : (
                <div className={mainClasses}>
                    <MainSection />
                </div>
            )}
        </div>
    )
}