import { useState } from "react";

function Login(){

    //for the inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameChangeHandler(event){
        setUsername(event.target.value);
    };

    function passwordChangeHandler(event){
        setPassword(event.target.value);
    };

    function submitFormHandler(event){
        event.preventDefault();
        setUsername(username);
        setPassword(password);
    }

    return (
        <div>
            <form onSubmit={submitFormHandler} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    className="input-username"
                    onChange={usernameChangeHandler}
                ></input>
                <input
                    type="text"
                    placeholder="Password"
                    className="input-password"
                    onChange={passwordChangeHandler}
                ></input>
                <button>LOGIN</button>
            </form>
        </div>
    );
}

export default Login;