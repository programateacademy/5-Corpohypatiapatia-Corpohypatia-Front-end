<<<<<<< HEAD
function Sidebar() {
=======
/* function Sidebar() {
>>>>>>> 0cc1b59fd9c53a8a7a06d8780718ef9ac72ef124
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

<<<<<<< HEAD
    return (
        <div>
            <nav>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    );
}

export default Sidebar;
=======
  return (
    <div>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}

export default Sidebar; */
import SidebarItem from "./SidebarItem"
import items from "./data.json"
import './sidebar.css'

export default function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}
>>>>>>> 0cc1b59fd9c53a8a7a06d8780718ef9ac72ef124
