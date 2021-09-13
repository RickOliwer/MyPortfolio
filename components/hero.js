const Hero = (props) => {
    const hasImg = props.featuredImage && props.featuredImage.node ? true : false
    if(hasImg){
        return (
            <div className="flex flex-col items-center justify-center hero">
                <style jsx>{`
                    .hero {
                        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${hasImg && props.featuredImage.node.sourceUrl});
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                    }
                
                `}</style>
                {props.title && (<h1 className="text-3xl lg:text-9xl med:text-7xl sm:text-5xl mb-14 white">{props.title}</h1>)}
            </div>
        );
    } else {
        return(

            <div className="">
                {props.title && (<h1 className="text-3xl lg:text-9xl med:text-7xl sm:text-5xl mb-14">{props.title}</h1>)}
            </div>
        )
    }
}
 
export default Hero;