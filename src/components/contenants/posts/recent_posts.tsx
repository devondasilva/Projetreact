import {Post,Item} from "./post"
import i2 from "../../../assets/assets/i2.jpg"
import i3 from "../../../assets/assets/i3.jpg"
import i4 from "../../../assets/assets/i4.jpg"
import i5 from "../../../assets/assets/i5.jpg"
import i6 from "../../../assets/assets/i6.jpg"
import Contact from "../../../pages/contact"

export default function Recent_posts() {
  const tab: Post[] = [
    {image: i2, title: "Consectetuer vehicula ab", descibe: "In Kitchen, Lifestyle", Link:"/contact"},
    {image: i3, title: "Taciti hendrerit dis odit incidunt", descibe: "In Kitchen, Living Room, Reading Room",Link:""},
    {image: i4, title: "Sunt doloremque blandit inven", descibe: "In Living Room",Link:""},
    {image: i5, title: "Fugit quaerat vulputate! Irure.", descibe: "In Living Room",Link:""},
    {image: i6, title: "Litora aptent magnam laoreet!", descibe: "In Living Room",Link:""},
  ];

  return (
      <div className="border-4 rounded mx-auto mb-10 max-w-xl py-5 px-2">
        <p className="ml-3 font-bold text-2xl">Recent Posts</p>
          {tab.map((post, i) => (
            <div className={i !== tab.length-1? "border-b " : ""}>
              <Item key={i} image={post.image} title={post.title} descibe={post.descibe} Link={post.Link}/>
            </div>
          ))}
      </div>
  );
}


