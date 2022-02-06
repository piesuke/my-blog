import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";


type Props = ({
    children: ReactNode
})

const Wrapper: React.FC<Props> = ({
    children
}) => {
   return(
        <>
            <Box maxW={"700px"} mx="auto" py="8">
                {children}
            </Box>
        </>
    )
}

export default Wrapper;
