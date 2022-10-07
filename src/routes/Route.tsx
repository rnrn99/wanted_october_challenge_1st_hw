interface RouteProps {
  path: string;
  element: React.ReactNode;
}

function Route({ path, element }: RouteProps) {
  return <>{element}</>;
}

export default Route;
