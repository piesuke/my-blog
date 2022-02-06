import { Box } from "@chakra-ui/react";
import {TITLE } from "../../utils/const";

function Footer(): JSX.Element {
    return (
        <Box maxW={"700px"} mx={"auto"} py={"16"} display={"flex"} alignItems="center" justifyContent="space-between">
            <p>© 2022 {TITLE}</p>
        </Box>
    )
}

export default Footer;