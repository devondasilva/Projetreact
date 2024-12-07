import i2 from "../../assets/assets/i2.jpg"
import{Container,CItem} from "./container"
import liv from '../../assets/assets/liv.jpg';

export default function Containers() {
    const tab: Container[] = [
        {title: "Taciti hendrerit dis odit incidunt",date:"November 21, 2017 / ",address: "Kitchen, Living Room, Reading Room",image: liv,descibe: "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem […]",},
    ];  

    return (
        <div className="mx-auto mb-10 max-w-xl py-5 px-2 ms-4 me-4">
              {tab.map((cont, i) => (
                <div className={i !== tab.length-1? "border-b " : ""}>
                  <CItem key={i} image={cont.image} date={cont.date} address={cont.address} title={cont.title} descibe={cont.descibe}/>
                </div>
              ))}
          </div>
      );
}