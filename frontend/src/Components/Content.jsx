import React from "react";
import { Routes,Route } from "react-router";
import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import Register from "./Register/Register";

export default function Content(){
    return(
        <div>
            <Routes>
            <Route path="/" caseSensitive={false} element={<Home/>} />
            <Route path="/quiz" caseSensitive={false} element={<Quiz/>} />
            <Route path="/register" caseSensitive={false} element={<Register/>} />


            </Routes>
        </div>
    )
}