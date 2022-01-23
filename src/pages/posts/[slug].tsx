import Layout from '../../components/layout'
import {Post} from '../../types/type'

export default function Post(props) {
    return (
        <Layout />
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps({params}) {
    
}