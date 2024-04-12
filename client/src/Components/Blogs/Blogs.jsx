import './Blogs.css';

function Blogs ()  {
  return (
    <section className="blog-section">
      <div className="blog-image">
        {/* Replace 'background-image-url' with your actual image URL */}
        <img src="./background.jpg" alt="Blog" />
        <div className="overlay">
          <h2 className="blog-title">Discover Our Latest News</h2>
          <p className="blog-description">Stay updated with our latest blog posts</p>
          <a href=""><button className="see-more-btn">See More</button></a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;