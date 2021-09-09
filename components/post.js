import Image from 'next/image'
import parse from 'html-react-parser'


const Post = (props) => {
    console.log(props);
    const hasImg = props.featuredImage && props.featuredImage.node ? true : false
    console.log(hasImg);
    return (

                
        <div className="py-4 pr-4 sm:w-1/2 lg:w-1/3 ">
            <div className="h-full overflow-hidden transition duration-300 ease-in border-2 border-gray-200 rounded-lg border-opacity-60 hover:shadow">
                {hasImg && <div className="relative aspect-w-16 aspect-h-10"><Image src={props.featuredImage.node.mediaItemUrl} layout="fill" objectFit="cover" objectPosition="center"/></div>}
                <div className="h-full p-6">
                    {props.title && (<h2 className="mb-4 text-base font-medium"> {props.title}</h2>)}
                    <div className="mb-3 leading-relaxed ">{parse(props.excerpt)}</div>
                    <div className="flex flex-wrap items-center">
                        <a className="inline-flex items-center mb-3 transition duration-300 ease-in cursor-pointer md:mb-2 lg:mb-0 hover:font-bold">Read More</a>
                    
                    </div>
                </div>
                
            </div>
        </div>


        
    );
}
 
export default Post;