import{Container,CItem} from "./container"
import c1 from '../../assets/assets/c1.jpg';
import c2 from '../../assets/assets/c2.jpg';
import c3 from '../../assets/assets/c3.jpg';
import c4 from '../../assets/assets/c4.jpg';

export default function Containers() {
    const tab: Container[] = [
        {title: "Sunt doloremque blandit inven",date:"November 20, 2017 / ",address: " Living Room",image: c1,descibe: "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",},
        {title: "Fugit quaerat vulputate! Irure.",date:"November 20, 2017 / ",address: " Living Room",image: c2,descibe: "Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates",},
        {title: "Litora aptent magnam laoreet!",date:"November 7, 2017 / ",address: " Living Room",image: c3,descibe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu",},
        {title: "Ex maxime quibusdam quam",date:"April 2, 2017 / ",address: "Fashion, Lifestyle, Living Room, Outdoors",image: c4,descibe: "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",},
    ];  

    return (
        <div className="flex flex-wrap mx-auto mb-10 max-w-sm py-5 px-2 ms-4 me-4">
              {tab.map((cont, i) => (
                <div className={i !== tab.length-1? "border-b " : ""}>
                  <CItem key={i} image={cont.image} date={cont.date} address={cont.address} title={cont.title} descibe={cont.descibe}/>
                </div>
              ))}
          </div>
      );
}