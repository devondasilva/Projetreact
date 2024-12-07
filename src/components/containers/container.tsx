export interface Container {
    title: string;
    date: string;
    address: string;
    image: string;
    descibe: string;
  }
  export function CItem(pop: Container) {
    return (
      <div>
        <div className="relative ">
            <a href="">
                <div className="font-semibold mb-2">{pop.title}</div>
            </a>
            <p className="text-red-500">
                {pop.date}
                <a href="">{pop.address}</a>
            </p>
            <a href="">
                <img src={pop.image} alt="" className=""/>
            </a>
            <div className="">{pop.descibe} </div>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Read more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    );
  }