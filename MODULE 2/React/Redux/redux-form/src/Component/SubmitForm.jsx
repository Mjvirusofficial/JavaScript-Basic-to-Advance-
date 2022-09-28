import React from 'react'
import {Field} from 'redux-form'
import {reduxForm} from 'redux-form';

function SubmitForm(mj) {
  return (
    <div>
       <Field component='input' placeholder='Username'/><br />
       <Field component='input' placeholder='Email' type='email'/><br />
       <Field component='input' type='checkbox' />Remember me <br />
       <button>Submit</button>
    </div>
  )
}

SubmitForm = reduxForm({
    form : 'SUBMIT'
})(SubmitForm)

export default SubmitForm;

































// import { Field } from 'redux-form';
// import {reduxForm} from 'redux-form';


// function SubmitForm(props) {
// const {handleSubmit} = props;

// return (
//  <form action="" onSubmit={handleSubmit}>
//     <Field className= 'input' component='input' name='name' type='text' placeholder='Enter your Name'/>
//     <button>Submit</button>
//  </form>
// )
// }

// SubmitForm = reduxForm({
//     form:'SUBMIT'
// })(SubmitForm)
// export default SubmitForm; 