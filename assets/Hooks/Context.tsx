import React, { createContext, useContext, useState } from "react";
import { BucketContext, BucketProvider } from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Bucket = createContext<BucketContext>({
  user: null,
  setUser: () => {},
  saveUser: () => {},
});

export const ContextProvider = ({ children }: BucketProvider) => {
  const [user, setUser] = useState<null>(null);

  function saveUser(user: any) {
    setUser(user);
  }

  return (
    <Bucket.Provider
      value={{
        user: user,
        saveUser: saveUser,
      }}
    >
      {children}
    </Bucket.Provider>
  );
};

export const useBucket = () => {
  const context = useContext(Bucket);
  if (!context) {
    throw new Error(
      "useTreatmentContext must be used within a TreatmentProvider"
    );
  }
  return context;
};
