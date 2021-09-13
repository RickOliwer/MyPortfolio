import Image from 'next/image'
import parse from 'html-react-parser'
import Link from 'next/link';


const Post = (props) => {
    const hasImg = props.postContent.projectImage && props.postContent.projectImage.mediaItemUrl ? true : false

    return (

        <Link href={`/post/${props.slug}`}>     
        <div className="py-4 pr-4 sm:w-1/2 lg:w-1/3 ">
            <div className="h-full overflow-hidden transition duration-300 ease-in border-2 border-gray-200 rounded-lg border-opacity-60 hover:shadow">
                {hasImg && <div className="relative aspect-w-16 aspect-h-10"><Image src={props.postContent.projectImage.mediaItemUrl} layout="fill" objectFit="cover" objectPosition="center"/></div>}
                <div className="h-full p-6">
                    {props.postContent.projectTitle && (<h2 className="mb-4 text-base font-medium">{props.postContent.projectTitle }</h2>)}
                    {props.postContent.projectText && (<p>{props.postContent.projectText}</p>)}
                    <div className="mb-3 leading-relaxed ">{parse(props.excerpt)}</div>
                    <div className="flex flex-wrap items-center">
                        <Link href={`/post/${props.slug}`}>
                            <a className="inline-flex items-center mb-3 transition duration-300 ease-in cursor-pointer md:mb-2 lg:mb-0 hover:font-bold">Read More</a>
                        </Link>
                    
                    </div>
                </div>

            </div>
        </div>
        </Link>  


        
    );
}
 
export default Post;