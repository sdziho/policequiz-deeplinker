import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBEHen8AJyXrG7gVcBAYnshIY-znKd6Ppo",
  authDomain: "policequiz-deeplinker-v2.firebaseapp.com",
  projectId: "policequiz-deeplinker-v2",
  storageBucket: "policequiz-deeplinker-v2.appspot.com",
  messagingSenderId: "853132044981",
  appId: "1:853132044981:web:2032a75fd1b07f6d5f2cfc",
};
function App() {
  const app = initializeApp(firebaseConfig);
  console.log(window.location.pathname);
  const url = new URL(window.location.href);
  /* const searchParams = new URLSearchParams(url.search);
  const category = searchParams.get("category");
  console.log(category);
  console.log(`app://police-quiz/payment-status/success${url.search}`); */
  if (window.location.pathname === "/success") {
    window.location.assign(
      `app://police-quiz/payment-status/success${url.search}`
    );
  }
  if (window.location.pathname === "/cancel") {
    window.location.assign("app://police-quiz/payment-status/cancel");
  }
  if (window.location.pathname === "/fail") {
    window.location.assign("app://police-quiz/payment-status/fail");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/fOJBsAM.png" />
      </header>
    </div>
  );
}

export default App;
