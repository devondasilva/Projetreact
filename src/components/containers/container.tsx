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
                <div className="font-bold text-2xl mb-1">{pop.title}</div>
            </a>
            <p className="text-red-400 text-xs mb-3">
                {pop.date}
                <a href="">{pop.address}</a>
            </p>
            <a href="">
                <img src={pop.image} alt="" className=""/>
            </a>
            <div className="my-4">{pop.descibe} </div>
            <a href="#" className="text-sm/6 text-red-400">Read more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    );
  }