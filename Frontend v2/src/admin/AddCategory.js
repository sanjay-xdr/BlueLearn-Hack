import React,{useState} from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";





const AddCategory=()=>{

    const [name,setName]=useState("")
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)
    
    const {user,token}=isAutheticated();

    const goBack=()=>{
        return(
            <div className="mt-5">
                <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Go Back</Link>
            </div>
        )
    }

    const handleChange=(event)=>{
        //
        setError("");
        setName(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setError("")
        setSuccess(false)
        //backend request fired
        createCategory(user._id,token,{name})
        .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true)
                setName("");
            }
        })

    }

    const successMSG=()=>{
        if(success){
            return <h4 className="text-success">Category Created Successful</h4>
        }

    }


    const warningMSG=()=>{
        if(error){
            return <h4 className="text-danger">Category Created Failed</h4>
        }
        
    }

    const myCategoryForm=()=>(
        <form>
            <div className="form-group">
                <p className="lead"> Enter the Category</p>
                <input className="form-control my-3" onChange={handleChange} value={name} type="text" autoFocus required placeholder="For ex. Summer"/>
                <button className="btn btn-outline-info" onClick={onSubmit}>Create Category</button>
            </div>
        </form>
    )




    return (
        <Base title="Create a Category" description="Add a new Category for new Tshirts" className="container bg-info p-4">
            <div className="row bg-white rounded"> 
            <div className="col-md-8 offset-md-2">{successMSG()}{warningMSG()}{myCategoryForm()} {goBack()}</div>
            
              </div>
        </Base>
    )
}

export default AddCategory;