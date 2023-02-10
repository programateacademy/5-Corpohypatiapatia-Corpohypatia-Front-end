<<<<<<< HEAD
function Sidebar() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

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
>>>>>>> 0b8fe5f8e27d33904bea8dfa5c5fa7561b546e17
