import React from 'react';
import DishDetail from './component/DishDetail';
import { dishData } from './dishData';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    dishData.map(dish => (
                        <div className="col col-12 col-md-4 mt-1" key={dish.id}>
                            <DishDetail title={dish.title} srcImage={dish.srcImage} description={dish.description} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default App;