import { Box} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FONT_COLOR, MAIN_COLOR } from "../../utils/const";
import Footer from "../Footer";
import Header from "../Header";
import Wrapper from "../Wrapper";


type Props = ({
    children: ReactNode
})

const Layout: React.FC<Props> = ({
    children
}) => {
   return(
        <>
            <Box background={MAIN_COLOR} color={FONT_COLOR}>
                <Header />
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
