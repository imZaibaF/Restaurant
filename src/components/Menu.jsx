import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">Latest Articles</h1>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro, optio quia vel dolores provident quis, totam fugiat
                  nihil veritatis vitae fugit qui necessitatibus nam doloribus
                  corporis, inventore aspernatur reiciendis repellendus.
                </p>
                <button>read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
