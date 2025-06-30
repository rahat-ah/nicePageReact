import { useFormik } from "formik"
import { formSchema } from "../../schemas"

function SetionSevenForm() {
    const {handleSubmit,values,errors,touched,handleChange,handleBlur} = useFormik({
        initialValues: {
            username:'',
            email: '',
            message:'',
            checkbox:false
        },
        validationSchema:formSchema,
        onSubmit:(val , action)=>{
            console.log(val)
            action.resetForm()
        }
    })
  return (
    <form 
    onSubmit={handleSubmit}
    className='mb-26'>
        <div className='text-left mb-6 '>
            <label htmlFor="username" className='text-lg tracking-tighter'>Name</label>
            <input 
            type="text" 
            name="username" 
            id="username"
            autoComplete="off" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            placeholder='Enter your Name'
            className='block w-full text-lg p-3 border-b-2 border-gray-500 outline-none'
            />
            {errors.username && touched.username ?( <p className="text-red-500">{errors.username}</p>) : null}
        </div>
        <div className='text-left mb-6'>
            <label htmlFor="email" className='text-lg tracking-tighter'>Email</label>
            <input 
            type="email"
            name="email" 
            id="email"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email} 
            placeholder='Enter a valid email address'
            className='block w-full text-lg p-3 border-b-2 border-gray-500 outline-none'
            />
            {errors.email && touched.email ?( <p className="text-red-500">{errors.email}</p>) : null}
        </div>
        <div className='text-left  mb-6'>
            <label htmlFor="message" className='text-lg tracking-tighter'>Message</label>
            <textarea 
            id='message'
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder="Enter message under 1000 charecters"
            className='block w-full text-lg p-3 border-b-2 border-gray-500 outline-none h-32'
            />
            {errors.message && touched.message ?( <p className="text-red-500">{errors.message}</p>) : null}
        </div>
        <div className='text-left mb-5'>
            <input 
            type="checkbox" 
            name="checkbox" 
            id="checkbox"
            value={values.checkbox}
            checked={values.checkbox}
            onChange={handleChange}
            onBlur={handleBlur}
            className='mr-2.5' 
            />
            <label 
            htmlFor="checkbox" 
            className='  text-lg'>
                I accept the 
                <span className='text-[#4753F0]'>
                    Terms of Service
                </span>
                <span>
                    {errors.checkbox && touched.checkbox ?( <p className="text-red-500 inline ml-4">{errors.checkbox}</p>) : null}
                </span>
            </label>
        </div>
        <button 
        type="submit"
        className='bg-[#4753F0] p-5 w-full text-lg text-white font-semibold uppercase rounded-2xl'
        >
        submit
        </button>
    </form>
  )
}

export default SetionSevenForm