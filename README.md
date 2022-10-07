# wanted_october_challenge_1st_hw
## 과제
### React와 History API 사용하여 SPA Router 기능 구현하기
**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**
```ts
const { push } = useRouter();
```

## 해설
```
📂src
┣ 📂hooks
┃ ┗ 📃useRouter.ts
┣ 📂pages
┃ ┣ 📃Root.tsx
┃ ┗ 📃About.tsx 
┣ 📂routes
┃ ┣ 📃Router.tsx
┃ ┗ 📃Route.tsx
┣ 📃constants.ts
┣ 📃main.tsx
```
파일 구조는 위와 같이 작성하였습니다.  

**`Router.tsx`**  
Router.tsx에서는 현재 브라우저의 pathname을 확인하고 이를 path state에 저장합니다.  
또한 path가 변경될 때마다 popstate 이벤트 리스너에 따라 path state를 변경합니다.  
마지막으로 현재 path와 일치하는 children을 리턴합니다.  

**`Route.tsx`**  
Router.tsx에서 현재 path와 일치하는 children만을 리턴하고 있으므로 이곳에서는 해당하는 element만 리턴합니다.  

**`useRouter.ts`**  
url 이동을 위해 push 함수를 선언합니다.  
push 함수는 path를 인자로 받아 `history.pushState()`를 통해 url을 이동합니다.  
또한 path에 따라 해당하는 컴포넌트를 렌더링하기 위해 popstate event를 발생시킵니다.  

## 트러블슈팅
### 문제
`history.pushState()`를 사용하여 url을 변경해 주었으나 해당 path에서 렌더링하고 싶은 컴포넌트가 렌더링되지 않음.  

### 해결
mdn의 [popstate 문서](https://developer.mozilla.org/ko/docs/Web/API/Window/popstate_event)에서 힌트를 얻음.  
```
history.pushState() 또는 history.replaceState()는 popstate 이벤트를 발생시키지 않는 것에 유의합니다.
popstate 이벤트는 브라우저의 백 버튼이나 (history.back() 호출) 등을 통해서만 발생된다.
```
이에 따라 `history.pushState()` 호출 후 popstate 이벤트를 발생시켜 해결함.  
```ts
const push = (path: string) => {
    history.pushState(null, "", path);

    const navigate = new PopStateEvent("popstate");
    window.dispatchEvent(navigate);
  };
  ```
  
### 문제
Router 아래 Route에 prop으로 주어진 path를 가져와 `window.location.pathname`과 비교한 뒤 현재 path에 맞는 Route child를 리턴하고자 함.  
이때 child의 타입을 `React.ReactNode[]`로 설정했었는데 child의 props에 접근할 수 없었음.  

### 해결
child의 타입을 `JSX.Element[]`로 변경 후 child의 props에 접근함.
