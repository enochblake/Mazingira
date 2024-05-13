// import React from "react";

// function Home() {
//     return (
//         <div className="home-container">
//             <h1>Welcome to Mazingira</h1>
//             <p>Empowering Environmental Preservation</p>
//         </div>
//     );
// }

// export default Home;

import React from "react";
import "./home.css";

function Home() {
    // URL of the video
    const videoUrl = "https://videos.pexels.com/video-files/5147455/5147455-hd_1080_1920_30fps.mp4";

    return (
        <div className="home-container">
            <video autoPlay muted loop className="home-video">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="home-content">
                <h1>Welcome to Mazingira</h1>
                <p>Empowering Environmental Preservation</p>
            </div>
        </div>
    );
}

export default Home;
