import { useRouter } from "../hooks/useRouter";
import { ROUTE } from "../constants";

function Root() {
  const { push } = useRouter();

  return (
    <div>
      <h1>Root Page!</h1>
      <button onClick={() => push(ROUTE.ABOUT)}>Go to About Page</button>
    </div>
  );
}

export default Root;
