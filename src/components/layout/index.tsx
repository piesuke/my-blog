import Header from '../header'

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout;