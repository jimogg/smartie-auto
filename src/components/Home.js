import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./NavCard"

const Home = () => {
    return (
        <div>
            <h2>This is the HOME component.</h2>
            <div style={{ width: "70vw", height: "30vh", backgroundColor: "#4CAF50" }}>This div</div>
            <p>Officia proident ea fugiat magna veniam magna deserunt irure. Aliqua anim non duis sunt dolor nulla tempor id ad. Culpa ea nulla adipisicing irure proident magna aute. Qui nisi aliqua non sint labore Lorem deserunt deserunt eiusmod laborum. In consectetur enim exercitation velit elit ad excepteur ex. </p>
            <p>Do ad commodo sint reprehenderit incididunt cupidatat reprehenderit reprehenderit ut est. Commodo sunt dolore deserunt voluptate. Id tempor aliqua nisi qui labore sunt quis anim. Nisi ullamco veniam exercitation incididunt sit laboris. Reprehenderit veniam aute voluptate minim.</p>
        </div>
    );
};

export default Home;