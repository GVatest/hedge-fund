import { PropsWithChildren, useRef } from "react";
import "./styles.scss";

function Sidebar({ children }: PropsWithChildren) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const blackoutRef = useRef<HTMLDivElement>(null);

  const toogleNavbar = () => {
    const sidebar = sidebarRef.current;
    const blackout = blackoutRef.current;

    if (blackout) {
      sidebar?.classList.toggle("active");
      if (!sidebar?.classList.contains("active")) {
        setTimeout(() => {
          blackout.style.top = "-100vh";
        }, 300);
      } else {
        blackoutRef.current.style.top = "0";
      }
    }
  };

  return (
    <div ref={sidebarRef} className='sidebar_wrapper'>
      <aside className='sidebar'>{children}</aside>
      <div ref={blackoutRef} className='sidebar__blackout'></div>
      <div onClick={toogleNavbar} className='arrow-icon'>
        <span className='left-bar'></span>
        <span className='right-bar'></span>
      </div>
    </div>
  );
}

export default Sidebar;
