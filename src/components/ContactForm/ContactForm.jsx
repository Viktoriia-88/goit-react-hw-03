import css from './ContactForm.module.css'
import { Formik, Form, Field } from 'formik';

export default function ContactForm() {
    const initialValues = {
        name: '',
    };

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
        
    }
    return (
        <div>
            <h1 className={css.title}>Phonebook</h1>
            
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({}) => (
                <Form className={css.form}>
                    <label className={css.label} htmlFor="">Name</label>
                    <Field className={css.input} name="name" type="text" />
                    <label className={css.label} htmlFor="">Number</label>
                    <Field className={css.input} name="number" type="phone" />
                    <button className={css.btn} type='submit'>Add contact</button>
                </Form>
                )}
            </Formik>    
        </div>
    );
};