import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useState, createContext, useEffect } from "react";
import { useRef } from "react";
import { auth, db } from "./firebase.service";
import { loginRequest } from "./firebase.service";
import { registerRequest } from "./firebase.service";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDataIsLoading, setUserDataIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [user, setUser] = useState(null);

  const userAvailableRef = useRef(false);

  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const taxRate = 20;

  let cartTotal = 0;
  let numOfCartItems = 0;

  if (cartItems.length > 0) {
    cartItems.forEach((item) => {
      const itemPricePlusTax = item.price + item.price / taxRate;
      cartTotal += itemPricePlusTax * item.qty;
    });
  }

  if (cartItems.length > 0) {
    cartItems.map((item) => {
      numOfCartItems += item.qty;
    });
  } else {
    numOfCartItems = 0;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);

        getUserData(user);
        handleCartData();

        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
        setIsLoggedOut(true);
      }
    });
  }, [auth]);

  useEffect(() => {});

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setIsLoggedIn(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setLoginError(e.message);
      });
  };

  const onLogout = () => {
    setIsLoggedOut(true);
    setUser(null);
    signOut(auth);
  };

  const onRegister = async (email, password, repeatedPasswprd, username) => {
    if (password !== repeatedPasswprd) {
      setRegisterError("Password doesn't match repeated password");
    }
    registerRequest(email, password)
      .then((res) => {
        const userInfo = {
          displayName: username,
          photoURL:
            "https://www.pngplay.com/wp-content/uploads/9/Mclaren-P1-PNG-Images-HD.png",
          cart: [],
          orders: [],
        };
        // Add user account information in Firestore to be retrieved later.
        setDoc(doc(db, "users", res.user.uid), userInfo);
        // addDoc(doc(db, "carts", res.user.uid), []);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleCartData = async () => {
    if (user) {
      // const userData = await getDoc(doc(db, "users", user.uid)).then(
      //   (userData) => {
      //     setUser({ ...user, cart: userData.data().cart });
      //   }
      // );

      // const userData = onSnapshot(doc(db, "users", user.uid), (userData) => {
      //   console.log(userData.data().cart);
      // });

      try {
        await updateDoc(doc(db, "users", user.uid), {
          cart: cartItems,
        });
        console.log("cart object updated successfully");
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    handleCartData();
  }, [cartItems]);

  const getUserData = async (user) => {
    setUserDataIsLoading(true);

    const userData = await getDoc(doc(db, "users", user.uid))
      .then((userData) => {
        setUser({ ...user, ...userData.data() });
        setCartItems(userData.data().cart);
        setUserDataIsLoading(false);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products")).then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setProducts((arr) => [...arr, doc.data()]);
          });
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
        userDataIsLoading,
        isLoading,
        isLoggedOut,
        loginError,
        registerError,
        onLogin,
        onRegister,
        onLogout,
        products,
        cartItems,
        setCartItems,
        cartTotal,
        numOfCartItems,
        taxRate,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
