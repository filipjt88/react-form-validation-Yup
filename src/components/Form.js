import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
    const schema = yup.object().shape({
        fullname: yup.string().required("Your first name is required!"),
        email: yup.string().email().required("Your email is required!"),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(8).max(20).required("Your password is required!"),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null],"Passwords Don't Match").required("Confirm password is required!"),
    })

    const {register,handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

        const onSubmit = (data) => {
            console.log(data);
        }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                       <div className="row">
                       <h1 className="text-center mb-4">React form validation</h1>
                        <div className="col-md-8 offset-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Fullname . . ." className="form-control fa-solid fa-user" {...register("fullname")}/><br />
                        <p className="text-danger">{errors.fullname?.message}</p>
                        <input type="email" placeholder="Email . . ." className="form-control" {...register("email")}/><br />
                        <p className="text-danger">{errors.email?.message}</p>
                        <input type="number" placeholder="Age . . ." className="form-control" {...register("age")}/><br />
                        <p className="text-danger">{errors.age?.message}</p>
                        <input type="password" placeholder="Password . . ." className="form-control" {...register("password")}/><br />
                        <p className="text-danger">{errors.password?.message}</p>
                        <input type="password" placeholder="Confirm password . . ." className="form-control" {...register("confirmPassword")}/><br />
                        <p className="text-danger">{errors.confirmPassword?.message}</p>
                        <button type="submit" className="btn btn-outline-light form-control">Send</button>
                        </form>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}