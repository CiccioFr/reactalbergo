import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Wellcome from './Wellcome'
import NavBar from './NavBar';
import ChiSiamo from './ChiSiamo'
import Camere from './Camere'
import Contattaci from './Contattaci'
import DoveSiamo from './DoveSiamo'

function Home() {
    return (
        // <div> Benvenuto </div>
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/wellcome" element={<Wellcome />} />
                <Route path="/chiSiamo" element={<ChiSiamo />} />
                <Route path="/camere" element={<Camere />} />
                <Route path="/contattaci" element={<Contattaci />} />
                <Route path="/doveSiamo" element={<DoveSiamo />} />
            </Routes>
        </React.Fragment>
    )
}

export default Home