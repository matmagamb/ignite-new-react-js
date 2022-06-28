import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Matheuss Ambrosio"
        content="
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime, blanditiis minima quae eius necessitatibus praesentium est reiciendis accusantium voluptate enim officiis cupiditate neque saepe, laudantium rem. Excepturi, fugit aut?"
      />
    </div>
  )
}

