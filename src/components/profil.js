import React from "react";
import "./profil.css";
import { LiaTagSolid } from "react-icons/lia";
import jean from "../images/jeanCul.jpeg";
import { useParams } from "react-router-dom";

export default function Profil() {

  let {id} = useParams()

  let data = require("../users.json")

  return (
    <div className="body">
      <div className="profil">
        
        <img src={jean} className="image" alt="profilPicture" />

        <div className="texts">
          <h2>{data[id].fullname}</h2>
          <p>{data[id].roles}</p>
        </div>
  
        <div className="tags">
          {
            data[id].tags.map((item) => {
              return (
                <div className="tag">
                  <LiaTagSolid />
                  {item}
                </div>
              )
            })
          }
          
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>

        <div className="bottom">
          <div>
            <p>{data[id].relations}</p>
            <p>Relations</p>
          </div>
          <div>
            <p>{data[id].pubs}</p>
            <p>Publications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
