import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const {register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data) // {email: '33suborna@gmail.com', password: 'asdfg'}
    }



    return (
        <div className="bg-base-200 text-center">
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

            {errors.password?.type === "required" && (
        <p className='text-red-500'>Password is required</p>
      )}
      {
        errors.password?.type==='minLength' && (
            <p className='text-red-500'>Password must be 6 characters or longer</p>
        )
      }



          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
         <p><small>New to this website? <Link className="btn btn-link" to="/register">Register</Link></small></p>

         <SocialLogin/>
      </div>
    </div>
  </div>

    );
};

export default Login;