import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import styles from "./index.module.scss"



const Introduction: React.FC = () => {
   return(
        <>
            <Box>
                <h2 className={styles.heading}>基本情報</h2>
                <UnorderedList className={styles.text}>
                    <ListItem mb={"2"}>出身: 愛媛県</ListItem>
                    <ListItem mb={"2"}><a href="https://twitter.com/piesuke727" className={styles.twitter} rel="noreferrer" target="_blank">Twitter</a><span>(お気軽にDMください)</span></ListItem>
                    <ListItem mb={"2"}><a href="https://github.com/piesuke" className={styles.github} rel="noreferrer" target="_blank">Github</a></ListItem>
                </UnorderedList>
            </Box>
        </>
    )
}

export default Introduction;
