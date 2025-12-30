import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiFetch } from "../api/client";
import styles from "../styles/login.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { PiLock } from "react-icons/pi";
import { RiEyeOffLine } from "react-icons/ri";


export const Loging = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);

        try {
            const response = await apiFetch('/Authentication/Login', {
                method: 'POST',
                body: JSON.stringify(data)
            }, 'auth');

            const token = typeof response === 'string' ? response : response.token;

            if (token) {
                login(token);
                navigate('/dashboard')
            } else {
                console.error("Token no found");
            }

        } catch (error) {
            console.error("Login error:", error);
            alert("incorrect credentials")
        }
        finally { setLoading(false) }
    }

    return (
        <div className={styles.container}>

            <img src="public/logo_bekind.webp"
                className={styles.login_logo}
                alt="logo-brand"
            />


            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.content_main}>

                    <span className={styles.cta}>¡Empieza a conectar tu comunidad ante buenas acciones!</span>

                    <div className={styles.filds}>

                        <div className={styles.input_container}>
                            <label htmlFor="username">Correo Electrónico*</label>
                            <div className={styles.input_content}>
                                <MdOutlineEmail />
                                <input id="username" className={styles.input_email} type='email' {...register("username", { required: true })} placeholder="Ingresar correo" />
                            </div>
                            {errors.username?.message && <span>{errors.username.message as string}</span>}
                        </div>

                        <div className={styles.input_container}>
                            <label className={styles.label_login} htmlFor="password">Contraseña*</label>
                            <div className={styles.input_content}>
                                <PiLock />
                                <input id="password" className={styles.input_pass} type='password'{...register("password", { required: true })} placeholder="Ingresa tu contraseña" />
                                <RiEyeOffLine />
                            </div>
                            {errors.password?.message && <span>{errors.password.message as string}</span>}
                        </div>

                        <a href="#" className={styles.rec_pass}> Recuperar contraseña</a>
                    </div>
                </div>


                <button className={styles.btn_submit} type="submit" disabled={loading}>
                    Ingresar
                </button>
            </form>

        </div>
    )
}