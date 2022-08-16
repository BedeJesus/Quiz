import React from "react";
import { Routes,Route } from "react-router";
import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import Register from "./Register/Register";
import Result from "./Result/Result";

export default function Content(){
    return(
        <div>
            <Routes>
            <Route path="/" caseSensitive={false} element={<Home/>} />
            <Route path="/quiz" caseSensitive={false} element={<Quiz/>} />
            <Route path="/register" caseSensitive={false} element={<Register/>} />
            <Route path="/quiz/result" caseSensitive={false} element={<Result/>} />
            <Route path="/result" caseSensitive={false} element={<Result/>} />


            </Routes>
        </div>
    )
}