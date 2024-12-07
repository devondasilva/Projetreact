import React from 'react';
import "../aboutus/about.css"
const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image" style={{backgroundImage:"url('')"}}>
            <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/pic14-free-img.png" alt="" />
                  
                    </div>
        <div className="about-text">
          <h2>Working Since 1995</h2>
          <p>
            Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus
            dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet,
            placeat maxime Suspendisse. Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.
          </p>
          <p className="italic-text">
            <em>Design is a funny word</em>
          </p>
          <p>
            Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus
            dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet,
            placeat maxime Suspendisse. Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
