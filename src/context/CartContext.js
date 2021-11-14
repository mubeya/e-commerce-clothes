import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [show, setShow] = useState(false); //state for cart tooltips
  const [cart, setCart] = useState(defaultCart); //state for cart items

  useEffect(() => {
    //items her değiştiğinde localde basket keyine items değerini yaz
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (data, findCartItem) => {
    //ana sayfada ve ürün detay sayfasında ürün ekle ve çıkar işlemini birlikte yapar toggle olarak çalışır
    setShow(true);
    if (!findCartItem) {
      return setCart((items) => [data, ...items]); //eğer tıkladığım ürün sepette yoksa sepete ekliyoruz
    }
    const filtered = cart.filter((item) => item.id !== findCartItem.id); //eğer sepette varsa butona tıklanınca sepetten çıkarıyoruz ve onun haricindekileri filtreleyip altta kalanları set ediyoruz
    setCart(filtered);
  };

  const removeFromCart = (item_id) => {
    //sepet sayfasından ürünleri sepetten çıkarmak için tıkladığımız ürünün idsini bütün listeden filtreleyip kalanları listelemek için kullanıyoruz
    const filtered = cart.filter((item) => item.id !== item_id);
    setCart(filtered);
  };

  const emptyCart = () => setCart([]); //sipariş verildiğinde sepeti boşaltıp boş bir array atıyoruz

  const values = {
    cart,
    setCart,
    show,
    setShow,
    addToCart,
    removeFromCart,
    emptyCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
