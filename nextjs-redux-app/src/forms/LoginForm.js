import {useState} from 'react'
import {useRouter} from 'next/router'
import {authService} from 'services'
import style from './Form.module.css'

import {Icon} from 'components'
import {useFormik} from 'formik'
import { LoginSchema } from 'schemas'


export default function LoginForm({children, csrfToken}){

    const [formState, setFormState] = useState({
        error: false,
        isSending: false
    })
    const router = useRouter()

    const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: LoginSchema,
        onSubmit: () => {
    
            setFormState({
                ...formState,
                isSending: true,
                error: false
            })

            
            authService.login({username: values.username, password: values.password})
            .then(resp=>{
                if (resp.error){
                    setFormState({
                        ...formState,
                        isSending: false,
                        error: resp.error
                    })
                } else {
                    setFormState({
                        ...formState,
                        isSending: false,
                        error: null
                    })
                }

                if (resp.url) router.push(resp.url)
            })
            
            
        }
    })


    return <div className={style.formWrapper}>


        <Icon name={'logo'} />

        <form className={style.formContainer} method={'post'} onSubmit={handleSubmit} >
        
        {formState.error && <div>{formState.error}</div>}

        <input type={'hidden'} name={'csrfToken'} defaultValue={csrfToken} />
        

        {errors.username && <div className={style.error}>{errors.username}</div>}
        <input 
        type={'text'} 
        name={'username'} 
        value={values.username}
        onChange={handleChange}
        placeholder={'Kullanıcı adı'} />       

        {errors.password && <div className={style.error}>{errors.password}</div>}
        <input 
        type={'password'} 
        name={'password'} 
        value={values.password}
        onChange={handleChange}
        placeholder={'Parola'} />

        {formState.isSending === true && <button type={'submit'} disabled>...</button> }
        {formState.isSending !== true && <button type={'submit'}>Giriş Yap</button> }
        

    </form>
    </div>

}