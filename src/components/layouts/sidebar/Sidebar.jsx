function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}

export default Sidebar;
/* import SidebarItem from "./SidebarItem"
import items from "./data.json"
import './sidebar.css'

export default function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
} */
