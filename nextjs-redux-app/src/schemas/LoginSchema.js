import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Kullanıcı adı girin'),
    password: Yup.string().required('Şifre girin')
})