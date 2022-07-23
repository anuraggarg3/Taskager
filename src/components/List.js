import React, { useEffect, useState ,useRef } from 'react'
import { collection, getDocs,deleteDoc,doc } from "firebase/firestore";
import "./list.css"
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import emailjs from "emailjs-com"

const List = () => {

    const[data,setData]=useState([])
    const { user } = UserAuth();
    const form=useRef();

    useEffect(() => {
        const fetchdata = async()=>{
            let list=[]
           try{
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    console.log(doc)
                    list.push({id:doc.id,...doc.data()})
                });
                setData(list)
           }catch(e){console.log(e)}
        }
        fetchdata()
    }, []);

    const sendEmail=()=>{
        emailjs.send("service_vpxq2qy","template_wufsm6f",{
            to_name: user.email,
            to_email: user.email,
        },'Fl0-LT4TY3sMTKWZz');
    }

    return (
        <div className='mai'>
            <form ref={form} to_name={user.email} to_email={user.email}></form>
            <ul>
                {data.map((x)=>{
                   if(x.email===user.email)
                   {
                        return (<li className='wrapper '>
                        <img className='image' src={x.img}/>
                        <p className='p'>{x.text}</p>
                        <button id={x.id} onClick={async ()=>{
                            try{
                                sendEmail()
                                await deleteDoc(doc(db,"users",x.id));
                                setData(data.filter((item)=>item.id!=x.id))
                            }catch(e){console.log(e)}
                        }} className='but'>Remove Todo</button>
                    </li>)
                   }
                })}
            </ul>
            <div>
                    <Link to='/account' className='underline'>
                    ADD a todo
                </Link>
            </div>
        </div>
    )
}

export default List