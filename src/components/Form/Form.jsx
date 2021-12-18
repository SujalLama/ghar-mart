import React, {useState} from 'react'
import './Form.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Dropzone from "react-dropzone"
import { GET_PROPERTIES } from '../../utilities/urlConstants';
import useMutateData from '../../utilities/mutateData';
import { Container } from 'react-bootstrap';

const FormComponent = ({setForm}) => {
    const [disable, setDisable] = useState(false);
    const [sale, setSale] = useState(false);
    const [verified, setVerified] = useState(false);
    const [files, setFiles] = useState([]);
    const {isLoading, error, data:createData, mutate} = useMutateData(GET_PROPERTIES);

    const initialValues = { 
        title: '', 
        address: '', 
        bed: 0, 
        bath: 0, 
        area: 0, 
        price: 0, 
        road: '',
        direction: '',
        category: 'bangalow'
    };

    function validation (values) { 
        const { 
        title, 
        address, 
        price, 
        category, 
        } = values

         const errors = {};
         if (!title) {
           errors.title = 'Required';
         }

         if(category === 'land') {
            setDisable(true);
         } else {
             setDisable(false);
         }

         if(!price) {
             errors.price = 'Required'
         }

         if(!address) {
             errors.address = 'Required'
         }
         return errors;
    }

    async function submitForm(values, setSubmitting) {
        let data = new FormData();
        const { 
            title, 
            address, 
            bed, 
            bath, 
            area, 
            price, 
            category,
            road,
            direction
        } = values

        for (let i = 0; i < files.length; i++) {
          data.append('property', files[i], files[i].name);
        }
        data.append('title', title);
        data.append('address', address);
        data.append('bed', bed);
        data.append('bath', bath);
        data.append('area', area);
        data.append('price', price);
        data.append('category', category);
        data.append('road', road);
        data.append('direction', direction);
        data.append('onSale', sale);
        data.append('isVerrified', verified);

        await mutate(data);

        if(!isLoading) {
            setSubmitting(false);
            setForm(false);
            window.location.reload(false);
        }
    }

    function onDrop(files) {
        if (files.length > 0) {
            setFiles(files);
        }
    }

    return (
            <div className='form-container'>
       <Formik
            initialValues={initialValues}
            disabled={isLoading}
            validate={validation}
            onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}
            >
       {({ isSubmitting }) => (
         <Form className='gharmart-form'>
             <div className='form-header'>
                <h3>Add Property</h3>  
                <h4 onClick={() => setForm(false)}>x</h4>
             </div>
            {
              error 
              ? <Container className="mx-auto">
                    <h3 style={{color: 'red'}}>{error.message}</h3>
                </Container>
            : <><div className='form-field'>
                <div>
                    <div className='label'>Property Title</div>
                    <Field type="title" name="title" />
                </div>
                <ErrorMessage name="title" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Property Address</div>
                    <Field type="address" name="address" />
                </div>
                <ErrorMessage name="address" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Property Category</div>
                    <Field as="select" name="category" >
                        <option value="bangalow">Bangalow</option>
                        <option value="land">Land</option>
                        <option value="flats">Flats</option>
                        <option value="office">Office</option>
                    </Field>
                </div>
                <ErrorMessage name="address" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
               <div>
                <div className='label'>Upload Photos</div>
                    <Dropzone onDrop={onDrop}>
                        {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {files &&
                            Array.isArray(files) &&
                            files.length ? (
                                <div className="selected-file">
                                {files.length > 3
                                    ? `${files.length} files`
                                    : files.map((file, i) => `file-${i + 1}`).join(", ")}
                                </div>
                            ) : (
                                `Drag and drop files, or click here`
                            )}
                            </div>
                        </section>
                        )}
                    </Dropzone>
                </div>
          </div>
           <div className='form-field'>
                <div>
                    <div className='label'>No of Bed</div>
                    <Field type="number" name="bed" disabled={disable} />
                </div>
                <ErrorMessage name="bed" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label' >No of Bath</div>
                    <Field type="number" name="bath" disabled={disable} />
                </div>
                <ErrorMessage name="bath" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Area</div>
                    <Field type="area" name="area" />
                </div>
                <ErrorMessage name="area" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Road from property</div>
                    <Field type="road" name="road" />
                </div>
                <ErrorMessage name="road" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Direction (Facing)</div>
                    <Field type="direction" name="direction" />
                </div>
                <ErrorMessage name="direction" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Price</div>
                    <Field type="price" name="price" />
                </div>
                <ErrorMessage name="price" component="div" className='error-message'/>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Sale</div>
                    <label className="switch">
                        <input type="checkbox" checked={sale} onChange={() => setSale(!sale)} />
                        <span className="slider round"></span>
                    </label>
                </div>
           </div>
           <div className='form-field'>
                <div>
                    <div className='label'>Verified</div>
                    <label className="switch">
                        <input type="checkbox" checked={verified} onChange={() => setVerified(!verified)}/>
                        <span className="slider round" ></span>
                    </label>
                </div>
           </div>
           <button type="submit" disabled={isSubmitting} className='primary-btn btn-margin'>
             Submit
           </button></>}
         </Form>
       )}
     </Formik>
            </div>
        
    )
}

export default FormComponent
