import { useState, useEffect } from "react";

interface RouterProps {
  children: JSX.Element[];
}

function Router({ children }: RouterProps) {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = () => {
    setPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", changePath);

    return () => {
      window.removeEventListener("popstate", changePath);
    };
  }, [path]);

  return (
    <>
      {children.find((element) => element.props.path === path) || (
        <div>Not Found</div>
      )}
    </>
  );
}

export default Router;
