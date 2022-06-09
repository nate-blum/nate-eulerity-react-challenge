import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { About } from './routes/about/components/about/About';
import { Home } from './routes/home/components/home/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
