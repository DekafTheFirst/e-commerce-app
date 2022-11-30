import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, createContext, useEffect } from "react";
import { auth, db } from "./firebase.service";
import { loginRequest } from "./firebase.service";
import { registerRequest } from "./firebase.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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
        console.log(e);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  const onRegister = (email, password, repeatedPassword, username) => {
    setIsLoading(true);

    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }

    registerRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u.user);
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated successfuly...");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const querySnapshot = await getDocs(collection(db, "products")).then(
        (querySnapshot) =>
          querySnapshot.forEach((doc) => {
            setProducts((arr) => [...arr, doc.data()]);
            setIsLoading(false);
          })
      );
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AuthenticationContext.Provider
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
