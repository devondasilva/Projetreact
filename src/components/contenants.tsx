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
    <div className="col-md-6 mb-4 border-bottom">
            <h5 className="card-title">
            <a href="#" className="text-decoration-none text-dark">
              {props.all.titre}
            </a>
          </h5>
          <p className="text-muted small">{props.all.lien}</p>
      <div className="col ">
        <img
          src={props.all.img}
          alt="cuisine"
          className="card-img img-fluid"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">

  
          <p className="card-text">{props.all.texte}</p>
        </div>
      </div>
    </div>
  );
};

const Contenants: React.FC = () => {
  const contenants = [
    {
      titre: "Consectetuer vehicula ab",
      img: "img2.jpg",
      lien: "November 21, 2017 / Kitchen, Lifestyle",
      texte:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat.",
    },
    {
      titre: "Consectetuer vehicula ab",
      img: "img2.jpg",
      lien: "November 21, 2017 / Kitchen, Lifestyle",
      texte:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat.",
    },
    {
      titre: "Consectetuer vehicula ab",
      img: "img2.jpg",
      lien: "November 21, 2017 / Kitchen, Lifestyle",
      texte:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat.",
    },
  ];

  return (
    <div className="container py-4">
      <div className="row ">
        {contenants.map((contenant, index) => (
          <Modif key={index} all={contenant} />
        ))}
      </div>
    </div>
  );
};

export default Contenants;
