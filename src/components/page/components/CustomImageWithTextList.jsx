import classes from "./CustomImageWithTextList.module.css";

export function CustomImageWithTextList(props) {
  return (
    <div className={`image-text-block flex items-center ${props.position}`}>
      <div className="w-1/2">
        <div className="w-full block">
          <img  src={props.image} alt={props.image.alt} />
        </div>
      </div>

      <div className="w-1/2">
        <div className={`relative ${props.id % 2 == 1 ? 'max-w-md ml-auto' : 'max-w-xl m-auto' }`}>
          {props.count && <p className="badge">0{props.count}</p>}
          <h3 className="text-3xl text-[#000000]">{props.title}</h3>
          <p className="text-xl text-[#999999]">{props.description}</p>
        </div> 
      </div>
    </div>
  )
}