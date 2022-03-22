import React from "react";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div>
      <ul>
        <li>
          <Link
            to={{ pathname: "/user/detail" }}
            state={{ id: 999, name: "i love merlin" }}
          >
            用户1
          </Link>
        </li>
        <Link
          to={{ pathname: "/user/detail" }}
          state={{ id: 2, name: "i love merlin" }}
        >
          用户2
        </Link>
      </ul>
    </div>
  );
}
