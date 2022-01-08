import React from 'react'
import { Formik, Form, Field } from 'formik'
import './formulario.css'

const Formulario = () => {

    const handleSubmit = (values) => {
        console.log(values)
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

                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >

                {() => (
                <Form>
                    <div class="field">
                        <label htmlFor='name'>Name:</label>
                        <Field 
                            id="name"
                            type="text"
                            placeholder="client name..."
                            name="name"
                        />
                    </div>

                    <div class="field">
                        <label htmlFor='business'>Business Name:</label>
                        <Field 
                            id="business"
                            type="text"
                            placeholder="business name..."
                            name="business"
                        />
                    </div>

                    <div class="field">
                        <label htmlFor='email'>Email:</label>
                        <Field 
                            id="email"
                            type="email"
                            placeholder="write the email..."
                            name="email"
                        />
                    </div>

                    <div class="field">
                        <label htmlFor='telephone'>Telephone:</label>
                        <Field 
                            id="telephone"
                            type="tel"
                            placeholder="write the telephone..."
                            name="telephone"
                        />
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
                    </div>

                    <input 
                        type="submit"
                        value="Add client" 
                    />
                </Form>
                )}
            </Formik>
        </div>
        
    )
}

export default Formulario