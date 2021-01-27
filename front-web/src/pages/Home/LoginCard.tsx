import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { saveSessionData } from "../../core/utils/auth";
import { makeLogin } from "../../core/utils/requests";
import { ReactComponent as Arrow } from '../../core/assets/images/arrow.svg';
import { ReactComponent as HidePassword } from '../../core/assets/images/hide-password.svg';
import { ReactComponent as VisibilityPassword } from '../../core/assets/images/visibility-password.svg';

type FormState = {
    username: string;
    password: string;
}

const LoginCard = () => {

    const { register, handleSubmit, errors } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const history = useHistory();

    const onSubmit = (data: FormState) => {
        setIsLoading(true);
        makeLogin(data)
            .then(res => {
                saveSessionData(res.data);
                history.push('/movies');
            })
            .catch(() => setHasError(true))
            .finally(() => setIsLoading(false));
    }

    return (
        <form className="home-login-content" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="home-login-title">LOGIN</h1>
            {hasError && (
                <div className="alert alert-danger" role="alert">
                    Usuário ou senha inválidos!
                </div>
            )}
            <div className="mb-5">
                <input
                    type="text"
                    className="home-input form-control"
                    placeholder="Email"
                    name="username"
                    ref={register({
                        required: "Campo obrigatório",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email inválido"
                        }
                    })}
                />
                {errors.username && <div className=" d-block invalid-input ">{errors.username.message}</div>}
            </div>
            <div className="home-input-password-content">
                <div className="d-flex">
                    <input
                        type={`${hidePassword ? 'password' : 'text'}`}
                        className="home-input-password form-control"
                        placeholder="Senha"
                        name="password"
                        ref={register({ required: true })}
                    />
                    <button
                        className="btn home-input-password-btn"
                        onClick={() => setHidePassword(!hidePassword)}
                        type="button"
                    >
                        {hidePassword ? <HidePassword /> : <VisibilityPassword />}
                    </button>
                </div>
                {errors.password && <div className="invalid-input d-block" >Campo obrigatório</div>}
            </div>
            <div className="d-flex">
                <button className="btn-home btn btn-warning">

                    {isLoading ?
                        <>
                            <h5 className="btn-home-text">LOADING...</h5>
                            <div className="spinner-border btn-home-spinner" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </>
                        : <h5 className="btn-home-text">LOGAR</h5>
                    }
                </button>
                <div className="btn-home-content">
                    <Arrow />
                </div>
            </div>
        </form>
    );
}

export default LoginCard;