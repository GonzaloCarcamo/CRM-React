import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './formulario.css'
import Alerts from './Alerts'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {

    const navigate = useNavigate()

    const newClientSchema = Yup.object().shape({
        name: Yup.string()
                 .required('Name is required')
                 .max(20,'Name must have 20 letters max')
                 .min(3, 'Name must have 3 letters min'),
        business: Yup.string()
                 .required('Business is required'),
        email: Yup.string()
                 .email('Email not valid')
                 .required('Email is required'),
        telephone: Yup.number()
                 .integer('Telephone not valid')
                 .positive('Telephone not valid')
                 .typeError('Telephone not valid'),
    })

    const handleSubmit = async (values) => {
        try {
            const url = 'http://localhost:4000/clients'

            const res = await fetch(url, {
                method:"POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const result = await res.json()

            navigate('/clients')

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div class="formulario">
            <h2>Register Client</h2>

            <Formik
                initialValues={{
                    name:'',
                    business: '',
                    email: '',
                    telephone: '',
                    notes: ''
                }}

                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values)

                    resetForm()
                }}

                validationSchema={newClientSchema}
            >

                {({errors, touched}) => {
                    return(
                
                <Form>
                    <div class="field">
                        <label htmlFor='name'>Name:</label>
                        <Field 
                            id="name"
                            type="text"
                            placeholder="client name..."
                            name="name"
                        />

                        {errors.name && touched.name ? (
                            <Alerts>{errors.name}</Alerts>
                        ) : null }
                    </div>

                    <div class="field">
                        <label htmlFor='business'>Business Name:</label>
                        <Field 
                            id="business"
                            type="text"
                            placeholder="business name..."
                            name="business"
                        />

                        {errors.business && touched.business ? (
                            <Alerts>{errors.business}</Alerts>
                        ) : null }
                    </div>

                    <div class="field">
                        <label htmlFor='email'>Email:</label>
                        <Field 
                            id="email"
                            type="email"
                            placeholder="write the email..."
                            name="email"
                        />


                        {errors.email && touched.email ? (
                            <Alerts>{errors.email}</Alerts>
                        ) : null }
                    </div>

                    <div class="field">
                        <label htmlFor='telephone'>Telephone:</label>
                        <Field 
                            id="telephone"
                            type="tel"
                            placeholder="write the telephone..."
                            name="telephone"
                        />


                        {errors.telephone && touched.telephone ? (
                            <Alerts>{errors.telephone}</Alerts>
                        ) : null }
                    </div>

                    <div class="field">
                        <label htmlFor='notes'>Notes:</label>
                        <Field 
                            as="textarea"
                            id="notes"
                            type="text"
                            placeholder="write the notes..."
                            name="notes"
                        />


                        {errors.notes && touched.notes ? (
                            <Alerts>{errors.notes}</Alerts>
                        ) : null }
                    </div>

                    <input 
                        type="submit"
                        value="Add client" 
                    />
                </Form>
                )}}
            </Formik>
        </div>
        
    )
}

export default Formulario