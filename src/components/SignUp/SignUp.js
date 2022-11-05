import React ,{useState , useEffect} from 'react';
import {useSelector} from 'react-redux'
import { useForm } from 'react-hook-form';
import { Link , useNavigate } from 'react-router-dom';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { registerInitiate } from '../../redux/action';

const schema = yup.object().shape({
  firstName: yup.string().required('Please insert your First Name'),
  lastName: yup.string().required('Please insert your Last Name'),
  email: yup
    .string()
    .email('Should be a valid email')
    .required('Please insert your Email'),
  password: yup
    .string()
    .min(6, 'Should be at least 6 characters')
    .max(15, "Shouldn't be more than 15 characters")
    .required('Please insert your Password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Please Confirm Password'),
});

function SignUp() {

  const [state,setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const {currentUser} = useSelector(state.user)

  const navigate = useNavigate();

  useEffect(()=>{
    if (currentUser){
      navigate.push("/")
    }
  },[currentUser,navigate])

  // const dispatch = useDispatch();

  const {firstName,lastName,email,password,confirmPassword} = state

  const handleChange = (e) => {
    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   if(password !== confirmPassword){
  //     return
  //   }
  //   dispatch(registerInitiate(firstName,lastName,email,password))
  //   setState({firstName:"" , lastName:"" , email:"" , password:"" , confirmPassword:""})
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="bg-background bg-signin-background bg-cover bg-no-repeat w-full min-h-[100vh] h-full flex flex-col justify-center items-center content-center" data-testid='sign-up'>
      <h1 className="text-5xl font-bold mb-10 text-primary pt-9">SIGN UP</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
      >
        <label htmlFor="firstName" className="mt-3">
          <span className="text-primary font-semibold">First Name</span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={firstName}
            {...register('firstName')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.firstName?.message}
          </p>
        </label>
        <label htmlFor="lastName" className="mt-3">
          <span className="text-primary font-semibold">Last Name</span>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={lastName}
            {...register('lastName')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.lastName?.message}
          </p>
        </label>
        <label htmlFor="email" className="mt-3">
          <span className="text-primary font-semibold">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            {...register('email')}
            className="sm:w-96 w-80 shadow-lg text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.email?.message}
          </p>
        </label>
        <label htmlFor="password" className="mt-3">
          <span className="text-primary font-semibold">Password</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            {...register('password')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.password?.message}
          </p>
        </label>
        <label htmlFor="confirmPassword" className="mt-3">
          <span className="text-primary font-semibold">Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={confirmPassword}
            {...register('confirmPassword')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold mt-1 mb-3">
            {errors?.confirmPassword?.message && 'Passwords should match'}
          </p>
        </label>
        <button
          type="submit"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign Up
        </button>
        <p className="text-lg text-primary self-center mt-2">
          Already Have an Account?
          <Link
            to="/signin"
            className="underline hover:text-secondary duration-300"
          >
            Sign In
          </Link>
        </p>
        <p className="text-lg text-primary font-bold self-center my-4">
          OR
        </p>
        <p className="text-xl text-primary font-semibold self-center mb-6">
          Sign Up With
          <button type="button">
            <BsFacebook className="inline pb-1 h-9 w-9 hover:text-secondary mx-1 duration-200" />
            or
          </button>
          <button type="button">
            <BsGoogle className="inline pb-1 h-9 w-9 hover:text-secondary mx-1 duration-200" />
            .
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
