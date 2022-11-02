import React from "react";

function SignIn(){
    return (
        <div className="bg-background h-screen flex justify-center items-center">
            <div>
                <form action="" >
                    <div>
                        <p>LOGIN</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" placeholder='Email' required />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" placeholder='Password' required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn