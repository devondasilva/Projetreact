import {Titem,iTag} from './tagCompo'

export default function Tags() {
  const tab2: iTag[] = [
    {name:"appliances"},{name:"architecture"},{name:"area"},
    {name:"bed"},{name:"bedroom"},{name:"chair"},
    {name:"chairs"},{name:"corners"},{name:"decor"},
    {name:"design"},{name:"exhaust"},{name:"fire place"},
    {name:"frames"},{name:"furniture"},{name:"garden"},
    {name:"home"},{name:"interior"},{name:"kitchen"},
    {name:"lifestyle"},{name:"lights"},{name:"living room"},
    {name:"modern"},{name:"outdoor"},{name:"plants"},
    {name:"Shopping"},{name:"sitout"},{name:"table"},
    {name:"table top"},{name:"wall"},
  ];

  return (
      <div className="border-4 mx-auto max-w-xl py-4 px-2 ms-4">
        <p className="ml-3 font-bold text-2xl">Tags</p>
        <div className='flex flex-wrap' >
          {tab2.map((tag, i) => (
              <Titem key={i} name={tag.name}/>
          ))}
        </div>
      </div>
  );
}
