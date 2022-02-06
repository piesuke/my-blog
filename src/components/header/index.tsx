import { Box } from "@chakra-ui/react";
import Link from "next/link"
import { MAIN_COLOR, MAX_WIDTH, TITLE } from "../../utils/const";

function Header(): JSX.Element {
    return (
        <Box maxW={"700px"} mx={"auto"} h="100px" display="flex" alignItems="center" justifyContent="space-between" background={MAIN_COLOR} py={"4"}>
            <Link href="/">
                <a>{TITLE}</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </Box>
    )
}

export default Header;