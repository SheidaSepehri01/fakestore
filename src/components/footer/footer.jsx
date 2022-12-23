import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footerContent">
        <ul>
          <li>
            <FontAwesomeIcon icon={brands("instagram")} />
            @shoping
          </li>
          <li>
            <FontAwesomeIcon icon={solid("envelope")} />
            shoping@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={solid("phone")} />
            999-685-834
          </li>
          <li>
            <FontAwesomeIcon icon={solid("location-dot")} />
            lksfj-ahflj-lk
          </li>
        </ul>
      </div>
    </div>
  );
};
