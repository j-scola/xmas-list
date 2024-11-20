import React, { useEffect } from 'react';
import './WishlistCard.css';

const WishlistCard = ({
  embedUrl,
  embedLabel,
  header,
  description,
  buttonUrl,
  buttonLabel,
  price,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.embedly.com/widgets/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.Embedly) {
      window.Embedly.init();
    }
  }, [embedUrl]);

  return (
    <div className="card">
      <a
        href={embedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="embedly-card"
      >
        {embedLabel}
      </a>
      <div className="card-content">
        <h3>{header}</h3>
        <p>{description}</p>
        <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
          {buttonLabel}
        </a>
      </div>
      <p className="price-rating">{price}</p>
    </div>
  );
};

export default WishlistCard;
