import Navbar from "../components/Principal/Navbar";

export const Layout= (props) => {
    const {children} = props;
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
}