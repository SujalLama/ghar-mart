import React, {useState, useEffect} from 'react'
import Card from '../../components/Card/Card';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader'
import './property-screen.css'
import {Modal, Button, Container, Spinner, Pagination} from 'react-bootstrap'
import FormComponent from '../../components/Form/Form';
import { API_URL, GET_PROPERTIES } from '../../utilities/urlConstants';
import CardLayout from '../../layout/card/CardLayout';
import {FormControl} from 'react-bootstrap';
import useQueryData from '../../utilities/queryData';
import axios from 'axios';

const PropertyScreen = () => {
    const [category, setCategory] = useState('bangalow');
    const [properties, setProperties] = useState([]);
    const [form, setForm] = useState(false);
    const [search, setSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const {isLoading, error, data} = useQueryData(GET_PROPERTIES + `?category=${category}&pageNumber=${pageNumber}`);

    async function searchProperty(e) {
        setSearch(e.target.value);
        
    }

    useEffect(() => {
        if(search) {
            getSearchData();
        }

        if(data) {
            setProperties(data.properties);
        }

        if(pageNumber) {
            getPaginatedData();
        }

    }, [search, data, pageNumber]);
    
    async function getSearchData() {
        const {data:{data:newData}} = await axios.get(`${API_URL + GET_PROPERTIES + '/search?name=' + search }`)
        setProperties(newData.properties);
    }

    async function getPaginatedData() {
        const {data:{data:newData}} = await axios.get(API_URL + GET_PROPERTIES + `?category=${category}&pageNumber=${pageNumber}`)
        console.log(newData);
        setProperties(newData.properties);
    }
    
    function showPages(pages) {
        let items = [];
        for (let number = 1; number <= pages; number++) {
                 items.push(
                     <Pagination.Item key={number} active={number === pageNumber} onClick={() => setPageNumber(number)}>
                     {number}
                     </Pagination.Item>,
                 );
        }
        return items;
    }



    return (
        <>
        <Modal
        show={form} 
        onHide={() => setForm(false)}
        backdrop="static"
        keyboard={false}>
                <FormComponent setForm={setForm} />
        </Modal>
        <div className='property-wrapper'>
            <CategoryHeader category={category} setCategory={setCategory} setForm={setForm} setPageNumber={setPageNumber} />
            <div className='property-sub-header'>
                <Button variant="outline-success" onClick={() => setForm(true)}>Add Property</Button>
                <FormControl
                    type="search"
                    placeholder="Search Any Property"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={searchProperty}
                />
            </div>
            <CardLayout>
                {
                    isLoading ? <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    : error ? <Container className="mx-auto">
                                            <h3 style={{color: 'red'}}>{error.message}</h3>
                                        </Container>
                                        : properties.length > 0 
                                            ? properties.map(property => <Card property={property} key={property.id} />) 
                                            : <Container className="mx-auto">
                                                    <h3>No Data Available</h3>
                                                </Container>
            }
            </CardLayout>
            {
                    isLoading ? <Container></Container>
                                    : error ? <Container className="mx-auto">
                                            <h3 style={{color: 'red'}}>{error.message}</h3>
                                        </Container>
                                        : <Container className="d-flex justify-content-center align-items-center mb-2">
                                            <Pagination size="md">{showPages(data.totalPages)}</Pagination>
                                        </Container>
            }
            
        </div>
        </>
    )
}

export default PropertyScreen;
