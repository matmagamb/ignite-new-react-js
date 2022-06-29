import { Header } from "./components/Header";
import { Post } from "./Post";
import styleAppmodule from './App.module.css'
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styleAppmodule.wrapper}>
        <Sidebar/>
        <main>

          <Post
            author="Matheuss Ambrosio"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime, blanditiis minima quae eius necessitatibus praesentium est reiciendis accusantium voluptate enim officiis cupiditate neque saepe, laudantium rem. Excepturi, fugit aut?"
          />
          <Post
            author="Matheuss Magalhães"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime, blanditiis minima quae eius necessitatibus praesentium est reiciendis accusantium voluptate enim officiis cupiditate neque saepe, laudantium rem. Excepturi, fugit aut?"
          />

        </main>
      </div>

    </div>
  )
}

