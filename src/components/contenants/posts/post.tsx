export interface Post {
    image: string;
    title: string;
    descibe: string;
  }
  
  export function Item(pop: Post) {
    return (
      <div>
        <div className="relative flex">
          <img src={pop.image} alt="" className={`w-20 h-20 m-3`}/>
          <div className="m-1 p-1">
            <div className="text-red-500 font-semibold mb-2">{pop.title}</div>
            <div className="">{pop.descibe} </div>
          </div>
        </div>
      </div>
    );
  }