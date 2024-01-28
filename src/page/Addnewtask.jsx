import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToTask } from '../redux/Slice/Taskslice';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast" ;


const Addnewtask = () => {
    const taskState = useSelector((state) => state.task);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: taskState.task.length, title: "", description: "", date: "", status: false
    })


    function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.title === "" || formData.description === "" || formData.date === "") {

            toast.error("All fields required");
          } else {
            dispatch(addToTask(formData));
            navigate('/');
          }

    }



    return (

        <div className="flex flex-col justify-between items-center w-full h-[100vh]">
            <form onSubmit={submitHandler} className="flex flex-col   justify-center items-center my-auto gap-5 bg-slate-200 w-[45%] ">
                <div className="">
                    <label htmlFor="title">Title</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="React"
                        value={formData.title}
                        onChange={changeHandler}
                        className="outline"
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Babbar"
                        value={formData.description}
                        onChange={changeHandler}
                        className="outline"
                    />

                </div>



                <div>
                    <label htmlFor="date">Date</label>
                    <br />
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => {
                            const formattedDate = new Date(e.target.value).toLocaleDateString();
                            const formattedDateWithSlash = formattedDate.replace(/-/g, '/');
                            setFormData({ ...formData, date: formattedDateWithSlash });
                        }}
                        className="outline"
                    />
                </div>


                <button
                    className="bg-blue-500 text-white font-bold rounded py-2 px-4"
                >Save</button>
            </form>
        </div>

    )
}

export default Addnewtask;









