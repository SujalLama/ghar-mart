import { Container, Spinner } from "react-bootstrap";
import useQueryData from "./queryData";

const withDataFetched = (Component, param) => () => {
    const {isLoading, error, data} = useQueryData(param);
    if(isLoading) {
        return <Container className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
    }

    if(error) {
        return <Container className="mx-auto">
                    <h3 style={{color: 'red'}}>{error.message}</h3>
                </Container>
    }
    return <Component data={data} />
}

export default withDataFetched;