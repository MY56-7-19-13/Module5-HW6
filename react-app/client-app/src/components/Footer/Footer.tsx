import { Box, Container, Grid, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "background.light",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="white" variant="h5">
                            A-LEVEL CURSE
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="background.text" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default Footer;