 import React from "react"
 import { Formik, useFormik } from "formik"

const validate = values =>{
  const errors = {}
  if(!values.firstName) errors.firstName = "Required!"
  else if(values.firstName.length > 15 && values.firstName.length < 3)
    errors.firstName = "Must be of length from 3 to 15"

  if(!values.lastName) errors.lastName = "Required!"
  else if(values.lastName.length > 15 && values.lastName.length < 3)
    errors.lastName = "Must be of length frmo 3 to 15"

  if(!values.email) errors.email = "Required!!"
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid Email Address."

  return errors
}

const Refer = () =>{
  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 4))
    },
    validate
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input 
      name="firstName"
      id="firstName"
      type="text"
      value={formik.values.firstName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       />
       { formik.touched.firstName && formik.errors.firstName ? <div class="err">{formik.errors.firstName}</div> : null
       }
      <label htmlFor="lastName">Last Name</label>
      <input 
      id="lastName"
      name="lastName"
      type="text"
      value={formik.values.lastName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       />
       { formik.touched.lastName && formik.errors.lastName ? <div class="err">{formik.errors.lastName}</div> : null
      }

       <label htmlFor="email">Email</label>
       <input 
       id="email"
       name="email"
       type="text"
       value={formik.values.email}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
        />
        {
          formik.touched.email && formik.errors.email ? <div class="err">{formik.errors.email}</div>:null
        }
    <button onSubmit={formik.handleSubmit} class="submit">Submit</button>
    </form>
  )
}
export  default Refer;