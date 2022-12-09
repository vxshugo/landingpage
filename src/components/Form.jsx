import { useState } from 'react'
import emailjs from "emailjs-com";
import {useTranslation} from "react-i18next";

const initialState = {
    user_name: '',
    user_bin:'',
    email: '',
    user_ceo: '',
}

const Form = () => {
    const {t} = useTranslation()
    const [{ user_name, user_bin, email, user_ceo}, setState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_mco11ic', 'template_rmi66rn', e.target, 'WAzHwQYPilnn7fQUN'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    clearState()
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
  return(
      <div className="col-md-10">
          <form name='sentMessage' validate onSubmit={handleSubmit}>
              <div className='row'>
                  <div className='col-md-6'>
                      <div className='form-group'>
                          <input
                              type='text'
                              id='name'
                              name='user_name'
                              className='form-control'
                              placeholder={t("form.value1")}
                              required
                              onChange={handleChange}
                          />
                          <p className='help-block text-danger'></p>
                      </div>
                  </div>
                  <div className='col-md-6'>
                      <div className='form-group'>
                          <input
                              type='text'
                              id='bin'
                              name='user_bin'
                              className='form-control'
                              placeholder={t("form.value2")}
                              required
                              onChange={handleChange}
                          />
                          <p className='help-block text-danger'></p>
                      </div>
                  </div>
                  <div className='col-md-6'>
                      <div className='form-group'>
                          <input
                              type='email'
                              id='email'
                              name='email'
                              className='form-control'
                              placeholder={t("form.value3")}
                              required
                              onChange={handleChange}
                          />
                          <p className='help-block text-danger'></p>
                      </div>
                  </div>
                  <div className='col-md-6'>
                      <div className='form-group'>
                          <input
                              type='text'
                              id='ceo'
                              name='user_ceo'
                              className='form-control'
                              placeholder={t("form.value4")}
                              required
                              onChange={handleChange}
                          />
                          <p className='help-block text-danger'></p>
                      </div>
                  </div>
              </div>
              <div id='success'></div>
              <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
              </button>
          </form>
      </div>
  )
}

export default Form;