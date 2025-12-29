import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiFetch } from "../api/client";

export const LogingPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);

        try {
            const response = await apiFetch('/Athentication/Login', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            login(response.token);
            navigate('/dashboard');
        } catch (error) {
            alert("incorrect credentials")
        }
        finally { setLoading(false) }
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type='email' {...register("username", { required: true })} placeholder="Email" />
            {errors.username?.message && <span>{errors.username.message as string}</span>}

            <input type='password'{...register("password", { required: true })} placeholder="password" />
            {errors.password?.message && <span>{errors.password.message as string}</span>}

            <button type="submit" disabled={loading}>
                {loading ? 'Loading ...' : 'Enter'}
            </button>
        </form>
    )
}