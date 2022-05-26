import React from 'react';
import styles from './App.scss'
import {Route, Routes} from "react-router-dom";
import {CategoriesPage} from './components/category/CategoriesPage'

function App() {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<CategoriesPage/>}/>
                <Route path="/categories" element={<CategoriesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
