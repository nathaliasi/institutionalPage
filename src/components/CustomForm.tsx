import React from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import FormSchema from '../schema/FormSchema';
import {Theme} from '../../src/componentTheme/Theme'

import "./CustomForm.css";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  nascimento: string;
  telefone: string,
  instagram: string,
}

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  nascimento: "",
  telefone: "",
  instagram: "",
};
const CustomForm = () => {
  const handleFormikSubmit = (values:IFormikValues) => {
    console.log(values);
  };
  return (

    <Theme>
       <div className='form-wrapper'>
      <Formik 
      onSubmit={handleFormikSubmit} 
      initialValues={initialValues} 
      validationSchema={FormSchema}
      >
      
      {({errors, touched}) => (
        <Form >
        <h2>PREENCHA O FORMULÁRIO</h2>
        <div className='form-col'>
          <label htmlFor="">Digite seu nome</label>
          <Field id="name" placeholder="nome"name="name" className={errors.name && touched.name && "invalid"}/>
          <ErrorMessage component="span" name='name' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">Digite seu email</label>
          <Field id="email" placeholder="seu e-mail" name="email" className={errors.email && touched.email && "invalid"}/>
          <ErrorMessage component="span" name='email' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">cpf</label>
          <Field id="cpf" placeholder="000.000.000-00" name="cpf" className={errors.cpf && touched.cpf && "invalid"}/>
          <ErrorMessage component="span" name='cpf' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">Data de Nascimento</label>
          <Field id="nascimento" placeholder="00.00.0000" name="nascimento" className={errors.nascimento && touched.nascimento && "invalid"}/>
          <ErrorMessage component="span" name='nascimento' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">Telefone</label>
          <Field id="telefone" placeholder="(+00)00000-0000" name="telefone" className={errors.telefone && touched.telefone && "invalid"}/>
          <ErrorMessage component="span" name='telefone' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">Instagram</label>
          <Field id="instagram" placeholder="@seuuser" name="instagram" className={errors.instagram && touched.instagram && "invalid"}/>
          <ErrorMessage component="span" name='instagram' className='form-invalid-feedback'/>
        </div>
        <label className='termos' htmlFor="termos">Declaro que li e aceito</label>
        <input type="checkbox"/>
        <button type='submit'>CADASTRE-SE</button>
      </Form>
      )}  
    </Formik>
    </div>
  </Theme>
     );
    };
   
export {CustomForm};