export interface iTag {
    name: string;
  }

  export function Titem(pop: iTag) {
    return (
        <div className="relative m-1 p-1 ">
            <div className="relative px-4 py-2 text-sm border
             text-red-400 hover:bg-red-500 hover:text-white">
                  {pop.name}
              </div>
        </div>
    );
  }