import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data) // {email: '33suborna@gmail.com', password: 'asdfg'}
    }



    return (
        <div className="bg-base-200">
<h1 className="text-5xl font-bold">Login now!</h1>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">

        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />


            {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength: 6})} className="input" placeholder="Password" />


          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>

    );
};

export default Login;