import stylesSidebar from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={stylesSidebar.sidebar}>
      <img
        className={stylesSidebar.cover}
        src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={stylesSidebar.profile}>
        <Avatar src="https://github.com/matmagamb.png" />

        <strong>Matheus Ambrosio</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
