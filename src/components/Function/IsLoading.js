import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function IsLoading({ isLoaded, setIsLoaded }) {

  useEffect(() => {
    const checkIsLoad = () => {
      setIsLoaded(true);
      console.log(isLoaded);
    };

    window.addEventListener("load", checkIsLoad);
    return () => window.removeEventListener("load", checkIsLoad);
  }, [isLoaded]);


  return null
}
