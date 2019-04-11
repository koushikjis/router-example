import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function PageOne(){
    return (
        <div>
            <h2>Content of Page One</h2>
            <hr />
            <Link to="/pageTwo">Page Two</Link>
        </div>
    )
}

function PageTwo(){
    return (
        <div>
            <h2>Content of Page Two</h2>
            <hr />
            <Link to="/">Page One</Link>
        </div>
    )
}

export default function App(){
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne}></Route>
                <Route path="/pageTwo" component={PageTwo}></Route>
            </div>
        </BrowserRouter>
    )
}