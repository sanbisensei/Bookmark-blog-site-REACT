import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {Title, Cover, Reading_Time, Author_Image, Author, Posted_Date, Hashtag} = blog;
    console.log(blog)
    return (
        <div className='mb-20'>
            

            <img className='w-full' src={Cover} alt={`Cover picture of the title ${Title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2 p-2'>
                <img className='w-14' src={Author_Image} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{Author}</h3>
                    <p>{Posted_Date}</p>
                </div>
                
                </div>
                <div className='flex justify-end items-center text-center gap-2'>
                    <p className='bg-red-200'>{Reading_Time} min read</p>
                    <button
                    onClick={() => handleAddToBookmark(blog)} 
                    className='text-2xl  hover:text-sky-800 '><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{Title}</h2>
            <p className=''>
                {Hashtag}
            </p>
            <p className='font-medium italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam voluptates necessitatibus debitis ducimus nisi obcaecati, numquam quos exercitationem corporis quibusdam, optio quae quo voluptatibus veniam quis doloribus, laboriosam esse sapiente aliquam. Labore eveniet, ad quasi nesciunt, inventore sapiente ipsam id provident cupiditate magnam eum similique neque esse. Vero, molestiae mollitia iste aut veniam aliquid reiciendis delectus, voluptate eum consequuntur, tempora iusto omnis reprehenderit cupiditate fuga officia magni. Adipisci expedita inventore quos alias voluptatibus tempore doloremque. Nisi tempora ducimus repellat explicabo ab reprehenderit commodi omnis nobis reiciendis praesentium iste laboriosam nostrum, totam placeat suscipit quis illum quod et excepturi. Dolor?</p>
            <button onClick={()=>handleMarkAsRead(Reading_Time)} className='py-3 bg-purple-500 rounded-md text-white font-semibold hover:bg-purple-400 hover:text-black'>MARK AS READ</button>
        </div>
    );
    
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
    
}

export default Blog;