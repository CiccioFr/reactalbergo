import React from 'react'
import { Route, Routes } from 'react-router-dom';

import NavBar from './NavBar';

import Wellcome from './albergo/Wellcome';
import ChiSiamo from './albergo/ChiSiamo';
import Camere from './albergo/Camere';
import Contattaci from './albergo/Contattaci';
import DoveSiamo from './albergo/DoveSiamo';

import Cinema from './cinema/Cinema';
import Locandine from './cinema/Locandine';

import Ccc from './Ccc';

import './home.css';


function Home() {
    return (
        // <div> Benvenuto </div>
        <React.Fragment>
            <NavBar />
            <div> <p className='homepage'> Sei nella Home Page </p> </div>
            <Routes>

                <Route path="./wellcome" element={<Wellcome />} />
                <Route path="./albergo/chiSiamo" element={<ChiSiamo />} />
                <Route path="./albergo/camere" element={<Camere />} />
                <Route path="./albergo/contattaci" element={<Contattaci />} />
                <Route path="./albergo/doveSiamo" element={<DoveSiamo />} />

                <Route path="./cinema" element={<Cinema />} />
                <Route path="./cinema/locandine" element={<Locandine />} />

                <Route path="./percorsoUrlCcc" element={<Ccc />} />

            </Routes>

        </React.Fragment>
    )
}

export default Home