import React from "react";

export default function Gallery() {
  return (
    <div className="gallery">
      <section className="gallery-heading">
        <h1 className="primary-heading">Latest Works</h1>
        <h2 className="secondary-heading">My latest photo projects</h2>
        <hr className="heading-divider" />
      </section>
      <section className="gallery-content">
        <div className="content-item">
          <img src="//unsplash.it/370/261" />
        </div>
        <div className="content-item">
          <img src="//unsplash.it/371/260" />
        </div>
        <div className="content-item">
          <img src="//unsplash.it/368/260" />
        </div>
        <div className="content-item">
          <img src="//unsplash.it/370/258" />
        </div>
        <div className="content-item">
          <img src="//unsplash.it/369/259" />
        </div>
        <div className="content-item">
          <img src="//unsplash.it/371/259" />
        </div>

        <div className="content-item">
          <img src="//unsplash.it/371/261" />
        </div>

        <div className="content-item">
          <img src="//unsplash.it/372/261" />
        </div>
      </section>
    </div>
  );
}
