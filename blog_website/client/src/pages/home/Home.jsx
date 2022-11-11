import "./home.css";
import React from "react";
import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";



export default function Home() {


    const [posts, SetPosts] = useState([]);

    const {search} = useLocation();
    



    useEffect(() => {

        const fetchPosts = async () => {

            const res = await axios.get("/posts"+search);
            SetPosts(res.data);

        }

        fetchPosts();

    }, [search])



    return (

        <>

            <Header />
            <div className="home">

                <Posts posts={posts} />
                <Sidebar />

            </div>

        </>

    )
}
