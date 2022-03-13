import React from "react";
import { useState } from "react";

const HookForm = () => {

    let [firstname, setFirstName] = useState("")
    let [lastname, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmpassword, setConfirmPassword] = useState("")

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstname.length <4 &&firstname.length >0? <p className="text-danger">Name must be at least 4 characters </p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setLastName(e.target.value)}/>
                    {
                        lastname.length <4 &&lastname.length >0? <p className="text-danger">Name must be at least 4 characters </p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                    {
                        email.length <4 &&email.length >0? <p className="text-danger">Name must be at least 4 characters </p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                    {
                        password.length <4 &&password.length >0? <p className="text-danger">Name must be at least 4 characters </p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {
                        confirmpassword.length <4 &&confirmpassword.length >0? <p className="text-danger">Name must be at least 4 characters </p> : null
                    }
                </div>
                <input type="submit" value="Submit" className="btn btn-primary mt-3" />
            </form>
            <p> First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>ConfirmPassword: {confirmpassword}</p>
        </>
    )
}

export default HookForm