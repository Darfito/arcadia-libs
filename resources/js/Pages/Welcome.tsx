import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Box, Container, Grid, Typography } from "@mui/material";
import ActionAreaCard from "@/Components/Card";
import { Key } from "react";

export default function Welcome({ books }: any) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Arcadia" />
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    className="rounded"
                    sx={{
                        display: "flex",
                        bgcolor: "primary.main",

                        width: 1,
                        height: "5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",

                            width: "50%",
                            height: "5rem",
                        }}
                    >
                        <Typography
                            className="text-white px-3 py-2"
                            variant="h5"
                        >
                            Arcadia Library
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",

                            width: "50%",
                            height: "5rem",
                        }}
                    >
                        <Link
                            className="text-white rounded-md px-3 py-2"
                            href="#"
                        >
                            Login
                        </Link>
                        <Link
                            className="text-white rounded-md px-3 py-2"
                            href="#"
                        >
                            Register
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: "10rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: "black",
                        }}
                    >
                        Welcome to Arcadia
                    </Typography>
                </Box>
                <Box className="rounded py-8">
                    <Grid
                        className="py-8"
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        container
                        spacing={2}
                    >
                        <Grid
                            className="py-8"
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            container
                            spacing={2}
                        >
                            {books.map(
                                (book: any, index: Key | null | undefined) => (
                                    <Grid
                                        item
                                        xs={4}
                                        lg={4}
                                        xl={4}
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ActionAreaCard books={book} />
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

{
    /* <nav className="-mx-3 flex flex-1 justify-end">
        {auth.user ? (
            <Link
                href={route('dashboard')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                Dashboard
            </Link>
        ) : (
            <>
                <Link
                    href={route('login')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Log in
                </Link>
                <Link
                    href={route('register')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Register
                </Link>
            </>
        )}
    </nav> */
}
