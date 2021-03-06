import type { NextPage } from 'next'
import Introduction from '../components/Introduction'
import Layout from '../components/Layout'

const About: NextPage = () => {
    return(
        <>
            <Layout>
                <Introduction />
            </Layout>
        </>
    )
}

export default About