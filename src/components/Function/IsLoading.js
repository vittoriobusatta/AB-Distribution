import { useEffect, useState } from "react";

export default function IsLoading({ isLoaded, setIsLoaded }) {

  useEffect(() => {
    const checkIsLoad = () => {
        setIsLoaded(true);
        console.log(isLoaded);
    };

    window.addEventListener("load", checkIsLoad);
    return () => window.removeEventListener("load", checkIsLoad);
  }, [isLoaded]);


  return null;
}
