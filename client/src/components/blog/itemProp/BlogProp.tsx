import { useState } from 'react';
import BlogClassicData from '../../../data/blog/BlogList.json';
import BlogList from './BlogList';

const alldataBLog = BlogClassicData;
const BlogProp = ({ column, StyleVarProp }: any) => {
  const [visibleItems, setVisibleItems] = useState(alldataBLog.slice(0, 3));

  const handleLoadmorebl = () => {};

  return (
    <>
      <div className="col-lg-12">
        <div className="row row--15">
          {visibleItems.map((item) => (
            <div key={item.id} className={column}>
              <BlogList StyleVar={StyleVarProp} data={item} />
            </div>
          ))}
        </div>
      </div>
      {visibleItems.length === 6 || (
        <div className="col-lg-12 text-center">
          <div className="rwt-load-more text-center mt--60">
            <button className="btn btn-default btn-icon" onClick={() => setVisibleItems(alldataBLog.slice(0, 6))}>
              <span>Zobraziť viac článkov</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogProp;
