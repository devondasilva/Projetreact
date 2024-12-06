import React from 'react';

interface ModifProps {
  all: {
    titre: string;
    lien: string;
    img: string;
    texte: string;
  };
}

const Modif: React.FC<ModifProps> = (props) => {
  return (
    <div className="col-6  mb-6 pe-2" >
            <h5 className="card-title fw-bold">
            <a href="#" className="text-decoration-none text-dark fs-4">
              {props.all.titre}
            </a>
          </h5>
          <p className=" small mt-2" style={{color:"red", fontSize:"10px"}}>{props.all.lien}</p>
          <div className="col-10 mt-4">
            <img
              src={props.all.img}
              alt="cuisine"
              className="card-img img-fluid "
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body border-bottom">
              <p className="card-text mt-4 mb-4" style={{fontSize:"15px"}}>{props.all.texte}</p>
            </div>
          </div>
    </div>
  );
};

const Contenants: React.FC = () => {
  const contenants = [
    {
      titre: "Taciti hendrerit dis odit incidunt",
      img: "img2.jpg",
      lien: "November 21, 2017 / Kitchen, Lifestyle",
      texte:
        "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem",
    },
    {
      titre: "Sunt doloremque blandit inven",
      img: "img5.jpg",
      lien: "November 20, 2017 / Living Room",
      texte:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
    },
    {
      titre: "Fugit quaerat vulputate! Irure.",
      img: "img2.jpg",
      lien: "November 20, 2017 / Living Room",
      texte:
        "Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates",
    },
    {
      titre: "Litora aptent magnam laoreet!",
      img: "img6.jpg",
      lien: "November 7, 2017 / Living Room",
      texte:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu",
    },
  ];

  return (
    <div className="container col-8 pb-4" >
      <div className="row ">
        {contenants.map((contenant, index) => (
          <Modif key={index} all={contenant} />
        ))}
      </div>
    </div>
  );
};

export default Contenants;
