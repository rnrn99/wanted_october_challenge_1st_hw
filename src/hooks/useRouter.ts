import React from "react";

function useRouter() {
  const push = () => {
    console.log("push");
  };
  return { push };
}

export default useRouter;
