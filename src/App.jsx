import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Posts, PostsDetails} from './pages';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Posts/>} />
                    <Route path='/posts/:id' element={<PostsDetails/>} />
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
