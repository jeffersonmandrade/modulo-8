import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                mt: "auto",
                py: 2,
                px: 3,
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? theme.palette.grey[800] : theme.palette.grey[200],
            }}
        >
            <Typography variant="body2" align="center">
                © 2025 My Website. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
