import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FONT_COLOR, MAIN_COLOR } from "../../utils/const";
import Footer from "../Footer";
import Header from "../Header";
import Wrapper from "../Wrapper";
import styles from "./index.module.scss"



const Introduction: React.FC = () => {
   return(
        <>
            <Box>
                <h2 className={styles.heading}>基本情報</h2>
                <UnorderedList className={styles.text}>
                    <ListItem mb={"2"}>名前: 青野凌介</ListItem>
                    <ListItem mb={"2"}>出身: 愛媛県</ListItem>
                    <ListItem mb={"2"}><a href="https://twitter.com/piesuke727" className={styles.twitter} rel="noreferrer" target="_blank">Twitter</a></ListItem>
                    <ListItem mb={"2"}><a href="https://github.com/piesuke" className={styles.github} rel="noreferrer" target="_blank">Github</a></ListItem>
                </UnorderedList>
            </Box>
        </>
    )
}

export default Introduction;
