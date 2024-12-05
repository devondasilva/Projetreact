export interface iTag {
    name: string;
  }

  export function Titem(pop: iTag) {
    return (
        <div className="relative m-1 p-1 ">
            <div className="relative px-2 py-2 text-sm border
             text-red-300 hover:bg-red-500 hover:text-white">
                  {pop.name}
              </div>
        </div>
    );
  }