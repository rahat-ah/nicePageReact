import * as Yup from 'yup'

export const formSchema = Yup.object({
    username:Yup.string().min(2).max(20).required("please enter your name"),
    email:Yup.string().email().required("please enter an email"),
    message:Yup.string().max(1000).required("please enter some text message"),
    checkbox:Yup.boolean().oneOf([true],"have to agree with tarms and condition"),
})