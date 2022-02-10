import { Box } from "@chakra-ui/react";
import Link from "next/link"
import { MAIN_COLOR, TITLE } from "../../utils/const";

const Header: React.FC = () => {
    return (
        <Box mx={"auto"} w={"100%"} h="50px" display="flex" alignItems="center" 
            justifyContent="space-between" background={MAIN_COLOR} py={"4"} position={"fixed"} zIndex={1000} color={"gray.200"}
            borderBottom={"1px solid #CBD5E0"} px={[4,8]}
        >
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