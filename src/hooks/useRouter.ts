export const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, "", path);

    const navigate = new PopStateEvent("popstate");
    window.dispatchEvent(navigate);
  };
  return { push };
};
