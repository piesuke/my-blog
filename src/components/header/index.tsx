import { Box } from "@chakra-ui/react";
import Link from "next/link"
import { MAIN_COLOR, TITLE } from "../../utils/const";

const Header: React.FC = () => {
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