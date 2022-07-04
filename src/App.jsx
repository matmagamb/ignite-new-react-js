import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styleAppmodule from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styleAppmodule.wrapper}>
        <Sidebar />
        <main>
          <Post />

        </main>
      </div>

    </div>
  )
}

