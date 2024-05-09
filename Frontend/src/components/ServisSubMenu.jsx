import React from "react";
import { Link } from "react-router-dom";

const ServisSubMenu = () => {
  return (
    <div className="dropdow_menu absolute">
      <ul className="servis_list">
        <Link to={""}>
          <li>Yeni kart yarat</li>
        </Link>
        <Link>
          <li>Statistika</li>
        </Link>
        <Link>
          <li>Işçilərin faizi</li>
        </Link>
        <Link>
          <li>Işçilərin zəhmət haqqısı</li>
        </Link>
        <Link>
          <li>İşin effektivliyi</li>
        </Link>
        <Link>
          <li>Yeni servis melumatı</li>
        </Link>
        <Link>
          <li>AV kataloq</li>
        </Link>
      </ul>
    </div>
  );
};

export default ServisSubMenu;
