import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { useState, createContext, useEffect } from "react";
import { auth, db } from "./firebase.service";
import { loginRequest } from "./firebase.service";
import { registerRequest } from "./firebase.service";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState(
    "Deca Homes, Cebu, 6000, Philippines"
  );
  const [cartTotal, setCartTotal] = useState(0);

  let sum = 0;

  cartItems.forEach((item) => {
    sum += item.price * item.qty;
  });
  useEffect(() => {
    setCartTotal(sum);
  }, [cartItems]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsLoggedOut(true);
      }
    });
  }, [auth]);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  const onRegister = async (email, password, repeatedPasswprd, username) => {
    if (password !== repeatedPasswprd) {
      setError("Password doesn't match repeated password");
    }
    try {
      return await registerRequest(email, password).then(async (res) => {
        console.log(res);
        const userInfo = {
          displayName: username,
          photoURL:
            "https://www.pngplay.com/wp-content/uploads/9/Mclaren-P1-PNG-Images-HD.png",
        };
        // Add user account information in Firestore to be retrieved later.
        await setDoc(doc(db, "users", res.user.id), userInfo);
        console.log("saved successfully");
      });
    } catch (e) {
      setError(e.message);
    }
  };

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products")).then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setProducts((arr) => [...arr, doc.data()]);
          });
          setIsLoading(false);
        }
      );
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);
  return (
    <FirebaseContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        isLoggedOut,
        error,
        onLogin,
        onRegister,
        onLogout,
        products,
        cartItems,
        setCartItems,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
