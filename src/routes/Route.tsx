interface RouteProps {
  path: string;
  element: JSX.Element;
}

function Route({ element }: RouteProps) {
  return <>{element}</>;
}

export default Route;
