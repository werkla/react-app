import { Route, Routes } from "react-router-dom";

export default function StartPage(){
    return <div>
        <h1>Start Page</h1>

        <Routes>
            <Route path='one' element={<h1>ONE</h1>}></Route>
            <Route path='two' element={<h1>TWO</h1>}></Route>
        </Routes>
    </div>
}