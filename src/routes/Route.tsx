import { useState } from "react";

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

function Route({ path, element }: RouteProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return <>{currentPath === path ? element : null}</>;
}

export default Route;
