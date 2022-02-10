import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FONT_COLOR, MAIN_COLOR } from "../../utils/const";
import Footer from "../Footer";
import Wrapper from "../Wrapper";
import Header from "../Header";


type Props = ({
    children: ReactNode
})

const Layout: React.FC<Props> = ({
    children
}) => {
   return(
        <>
            <Header />
            <Box background={MAIN_COLOR} color={FONT_COLOR} px={[4,2]} pt={["50px"]}>
                <main className="main">
                    <Wrapper>
                        {children}
                    </Wrapper>
                </main>
                <Footer />
            </Box>
        </>
    )
}

export default Layout;
