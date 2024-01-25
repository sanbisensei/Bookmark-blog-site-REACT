
import { PropTypes } from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 rounded-md text-center ml-4 mt-2">
            <div className=' bg-purple-400'>
                <h3 className='text-xl'>Reading Time:{readingTime} minutes</h3>
            </div>
            <h2 className='text-lg font-semibold '>Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.ID} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;