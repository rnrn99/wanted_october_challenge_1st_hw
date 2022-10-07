import { useRouter } from "../hooks/useRouter";
import { ROUTE } from "../constants";

function About() {
  const { push } = useRouter();

  return (
    <div>
      <h1>About Page!</h1>
      <button onClick={() => push(ROUTE.ROOT)}>Go to Root Page</button>
    </div>
  );
}

export default About;
