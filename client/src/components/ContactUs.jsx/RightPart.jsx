import React, { useRef,useState }  from 'react'
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'

const RightPart = () => {
    const form = useRef();
    const [error, seterror] = useState(false)
  const [success, setsuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_l6d24lq', 'template_54utkap', form.current, {
            publicKey: '9cMEy6IOMkTcic18Z',
          })
          .then(
            () => {
              setsuccess(true);
              setFormData({ name: '', email: '', message: '' });
              toast.success("Email sent successfully!");
            },
            (error) => {
              console.log(error)
              seterror(true);
              toast.warning("Email send failed!!");
            },
          );
      };
    return (
        <div className='md:w-[50%] w-full pt-[1vw]  h-full flex flex-col items-center justify-start'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-center gap-[1vw] w-full '>
                <input type="text" className='w-[80%] py-[0.5vw] px-[1vw] bg-transparent border-2 outline-none border-zinc-700 rounded-md text-white font-loaderend1' value={formData.name}
          onChange={handleChange} placeholder='Name' required name='name'/>
                <input type="email" className='w-[80%] py-[0.5vw] px-[1vw] bg-transparent border-2 outline-none border-zinc-700 rounded-md text-white font-loaderend1' value={formData.email}
          onChange={handleChange} placeholder='Email' required name='email' />
                <textarea rows={8} className='w-[80%] py-[0.5vw] px-[1vw] bg-transparent border-2 outline-none border-zinc-700 rounded-md text-white font-loaderend1'           value={formData.message}
          onChange={handleChange} placeholder='Message'  name='message'></textarea>
                <button className='w-[80%] py-[0.5vw] px-[1vw] bg-purple-500 border-2 outline-none border-zinc-700 rounded-md text-white font-loaderend1'>Submit</button>
               
            </form>
        </div>
    )
}

export default RightPart