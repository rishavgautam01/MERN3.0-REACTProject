import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate,useParams } from "react-router-dom"

function SingleBlog(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    const fetchSingleBlog = async() => {
        const response = await axios.get("http://localhost:3000/blog/" + id)
        setBlog(response.data.data)
    }
    useEffect(()=>{
        fetchSingleBlog()
    },[])
    const deleteBlog = () =>{
        const response = axios.delete('http://localhost:3000/blog/'+ id)
        
            alert("Deleted Successfully")
            navigate('/')

    }
    return(
        <>
        <Navbar/>
       <div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={`http://localhost:3000/${blog.image}`} alt="Product Image"/>
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deleteBlog}>Delete</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   {blog.subtitle}
                </p>
     
              
               
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {blog.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}
export default SingleBlog