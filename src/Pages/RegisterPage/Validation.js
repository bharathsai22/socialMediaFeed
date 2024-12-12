export default function validation(data){
    const error ={}



    if(data.fullname === ""){
        error.fullname="* Name is Required!"
    }

    if(data.email === ""){
        error.email ="* Email is Required"
    }
    else if(!emailPattern.test(data.email)){
        error.email="* Email did not match"
    }



    if(data.password === ""){
        error.password = "* Password is Required"
    }
    else if(!passwordPattern.test(data.password)){
        error.password="* Password not valid"
    }
    

    if(data.confirmpassword === ""){
        error.confirmpassword="* Confirm password is Required"
    }
    else if(data.password !== data.confirmpassword){
        error.confirmpassword ="* Confirm password did'nt match"
    }

    return error
}