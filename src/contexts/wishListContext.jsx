// wishlistContext.jsx
import { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);


  const toggleFavorite = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        alert("Remove from WishList")
        return prev.filter((p) => p.id !== product.id); // remove
      } else {
        alert("Added to WishList")
        return [...prev, product]; // add full object
      }
    });
  };

  const wishListCounts = wishlistItems.length

  // const addToWishlist = (product) => {
  //   setWishlistItems((prev) => {
  //     if (!prev.find(item => item.id === product.id)) {
  //       return [...prev, product];
  //     }
  //     setIsFavorite(true)
  //     return prev;
  //   });
  // };

  // const removeFromWishlist = (id) => {
  //   setWishlistItems((prev) => prev.filter(item => item.id !== id));
  //   setIsFavorite(false)
  // };
  const value = {
    // wishlistItems,
    // addToWishlist,
    // removeFromWishlist,
    // isFavorite,
    // wishListCounts
    toggleFavorite,
    wishlistItems,
    wishListCounts
  }
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
export const useWishlist = () => useContext(WishlistContext);
