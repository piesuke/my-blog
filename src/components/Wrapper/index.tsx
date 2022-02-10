import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";


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
