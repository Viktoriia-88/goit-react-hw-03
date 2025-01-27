import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css'

export default function ContactForm({ onAdd }) {
    const initialValues = {
        name: '',
        number: ''
    };

    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };

    const ContactSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Too short!")
            .max(50, "Too long!")
            .required("Required!"),
        number: Yup.string()
            .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid! Phone number must be: xxx-xx-xx")
            .required("Required!"),
    });

    return (
        <div className={css.contactForm}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
                <Form className={css.form}>
                    <label className={css.label} htmlFor={nameId}>Name</label>
                    <Field className={css.input} name="name" type="text" id={nameId} />
                    <ErrorMessage className={css.error} name="name" component="span" />
                    <label className={css.label} htmlFor={numberId}>Number</label>
                    <Field className={css.input} name="number" type="tel" id={numberId} />
                    <ErrorMessage className={css.error} name="number" component="span" />
                    <button className={css.btnAdd} type='submit'>Add contact</button>
                </Form>
            </Formik>    
        </div>
    );
};