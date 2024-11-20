import React, { useState, useEffect } from 'react';
import WishlistCard from './WishlistCard';
import { parseCsv } from '../utils/parseCsv';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadWishlist = async () => {
      const data = await parseCsv('/x-mas-list.csv');
      setWishlist(data);
    };

    loadWishlist();
  }, []);

  return (
    <main>
      <script async src="//cdn.embedly.com/widgets/platform.js"></script>
      <div className="wishlist">
        {wishlist.map((item, index) => (
          <WishlistCard
            key={index}
            embedUrl={item.embed_url}
            embedLabel={item.embed_label}
            header={item.header}
            description={item.description}
            buttonUrl={item.button_url}
            buttonLabel={item.button_label}
            price={item.price}
          />
        ))}
      </div>
    </main>
  );
};

export default Wishlist;
