import { CustomImageWithTextList } from "./CustomImageWithTextList"

export function CustomImageWithText(props) {
  return (
    <section className={`w-full gap-4 md:gap-16 grid p-6 md:p-8 lg:p-16 bg-[${ props.bg_color }]`}>
      {props.headingTitle && <h2 className="text-4xl text-center">Our Commitment <span className="italic">and</span> Promise</h2>}
      {props.ImageWithTextData.map((item) => {
        return(
          <CustomImageWithTextList 
            
            id={item.id}
            count={item.count}
            image={item.image}
            title={item.title}
            description={item.content}
            position={item.position}
          />
        )
      })}
    </section>
  )
}

CustomImageWithText.defaultProps = {
  headingTitle: true,
  bg_color: '#ffffff'
}