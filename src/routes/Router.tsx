interface RouterProps {
  children: React.ReactNode[];
}

function Router({ children }: RouterProps) {
  return <>{children}</>;
}

export default Router;
