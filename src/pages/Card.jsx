import React from 'react';
import './card.css';

const Card = ({cardData}) => {
  return (
    <div className="trending-card">
      <div className="card position-relative">
        <a
          href="https://www.guvi.in/blog/full-stack-development-project-ideas/"
          className="card-img-top"
        >
          <img
            width="1500"
            height="1001"
            src={cardData.image_url}
            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt="Best Full Stack Development Project Ideas"
            decoding="async"
            sizes="(max-width: 1500px) 100vw, 1500px"
          />
        </a>
        <div className="card-body" id="card-details">
          <a
            href="https://www.guvi.in/blog/full-stack-development-project-ideas/"
            className="card-title text-decoration-none text-dark fs-5 fw-semibold"
          >
            {cardData.title}
          </a>
          <p className="card-author mt-2 mb-0">
            <span id="by">By</span>&nbsp;
            <a
              className="text-decoration-none"
              href="https://www.guvi.in/blog/author/isha/"
            >
              {cardData.author}
            </a>
          </p>
          <div
            className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
            id="card-footer"
          >
            <p className="mb-0 card-text">{cardData.publicationDate}</p>
            <p className="mb-0 card-text">{cardData.readTime}</p>
          </div>
        </div>
        <div className="position-absolute" id="views-section">
          
            {cardData?.views ? (
              <>
              <div className="card-views d-flex px-2 py-1 align-items-center bg-white rounded-pill">
                <img
                  loading="lazy"
                  src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg"
                  height="auto"
                  width="auto"
                  alt="eye-icon"
                />
                &nbsp;
                <p className="m-0">{cardData.views}</p>
                </div>
              </>
            ) : (
              <p class="newly-pub fw-medium rounded-pill px-2 py-1 mb-0">
                Latest
              </p>
            )}
          
        </div>
      </div>
    </div>
  );
};

export default Card;
