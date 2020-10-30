import React from 'react';
import './post.css'
export default function Postss(){
    return(
    <div   className="newgab">
        <div>
        <input className="gt" placeholder="Gab Title"></input>
        </div>

        <div >
            <input className="ng " placeholder="New Gab" type="text"></input>
        </div>
        <div>
            <button className="bn">Post</button>
        </div>

    </div>
    );
}