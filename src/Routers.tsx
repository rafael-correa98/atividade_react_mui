import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    )
}