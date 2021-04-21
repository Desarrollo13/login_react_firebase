import React,{useState} from 'react'
import {auth} from '../firebaseconfig'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const historial = useHistory()

    const[email , setEmail] =useState('')
    const[password , setPassword] =useState('')
    const[msgerror,setMsgError] =useState(null)

    // Viculo esta funcion con el boton asi puedo registrar el usuario
    const RegistrarUsuario=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(r=> {
                historial.push('/')

            })   
            .catch(e=>{
                if (e.code == 'auth/invalid-email'){
                setMsgError('Formato Email incorrecto')
                }
                if (e.code == 'auth/weak-password'){
                setMsgError('La password debe tener  6 caracteres o mas')                }

        }) 
    }
    // Iniciar Sesion logica y error
    const LoginUsuario=(e)=> {
        auth.signInWithEmailAndPassword(email, password)
        .then((r)=>{
            historial.push('/')
        })
        .catch((err)=>{
            // ""
            if (err.code == 'auth/wrong-password'){
                setMsgError('password Incorrecto')
            }
        })

    } 
    return (
        <div className="row mt-5" >
            <div className="col"></div>
             <div className="col">
                 <form onSubmit={RegistrarUsuario} className="form-group" action="">
                     <input onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Introduce el Email" type="email"/>
                      <input onChange={(e)=>{setPassword(e.target.value)}} className="form-control mt-4" placeholder="Introduce la Password" type="password"/>
                      <input className="btn btn-dark btn-block mt-4"type="submit" value="Registrar Usuario"/>
                 </form>
                 <button onClick={LoginUsuario} className="btn btn-success btn-block">
                     Iniciar Sesion

                 </button>
                 {/* operador termario */}

                 {
                     msgerror != null ?
                     (
                         <div className="alert alert-danger">
                             {msgerror}
                         </div>
                     )
                     :
                     (
                         <span></span>
                     ) 
                 }
             </div>
              <div className="col"></div>
            
        </div>
    )
}

export default Login
