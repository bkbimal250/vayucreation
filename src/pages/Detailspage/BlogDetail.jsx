import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogsData } from '../../data/blogsData';
import { FaArrowLeft, FaClock, FaUser, FaTag, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';
import { useContactModal } from '../../common/ContactModalContext';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useContactModal();
  const blog = blogsData.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blogs" className="btn-primary">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogsData
    .filter(b => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = blog.title;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-primary transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Back to Blogs</span>
          </button>
          
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <FaUser className="text-primary" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag className="text-primary" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 bg-white">
        <div className="container-custom">
          <div className="relative -mt-16 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              {/* Excerpt */}
              <div className="mb-8">
                <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6">
                  {blog.excerpt}
                </p>
              </div>

              {/* Main Content */}
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-secondary mb-6">Introduction</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  In today's competitive business landscape, effective signage plays a crucial role in 
                  attracting customers and building brand recognition. This comprehensive guide explores 
                  the key aspects of {blog.title.toLowerCase()} and how it can benefit your business.
                </p>

                <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Understanding the Basics</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Signage is more than just a nameplate or advertisement—it's a powerful marketing tool 
                  that works 24/7 to promote your business. Quality signage can significantly impact your 
                  brand visibility and customer perception.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  When designed and installed correctly, professional signage can:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                  <li>Increase brand visibility and recognition</li>
                  <li>Attract more foot traffic to your business</li>
                  <li>Communicate your brand message effectively</li>
                  <li>Differentiate you from competitors</li>
                  <li>Provide consistent brand experience</li>
                </ul>

                <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Key Considerations</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Before investing in signage, it's important to consider several factors that will 
                  influence the effectiveness of your investment:
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Location & Visibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The placement of your signage is critical. It should be easily visible from the street 
                    or main access points, with clear sightlines and appropriate height. Consider factors 
                    like traffic flow, viewing angles, and potential obstructions.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Design & Branding</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your signage should align with your overall brand identity, using consistent colors, 
                    fonts, and messaging. The design should be clean, readable, and professional, reflecting 
                    the quality of your business.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Material Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Investing in high-quality materials ensures durability and long-term value. Weather-resistant 
                    materials, quality LEDs, and proper construction methods all contribute to a signage solution 
                    that will serve your business for years to come.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Best Practices</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To maximize the impact of your signage investment, follow these proven best practices:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-2 border-primary rounded-lg p-6">
                    <h4 className="font-bold text-secondary mb-3 text-xl">Keep It Simple</h4>
                    <p className="text-gray-600">
                      Less is more when it comes to signage. Use clear, concise messaging that can be 
                      read and understood quickly.
                    </p>
                  </div>

                  <div className="border-2 border-primary rounded-lg p-6">
                    <h4 className="font-bold text-secondary mb-3 text-xl">Choose Right Colors</h4>
                    <p className="text-gray-600">
                      Colors should provide good contrast and align with your brand. Consider visibility 
                      both day and night.
                    </p>
                  </div>

                  <div className="border-2 border-primary rounded-lg p-6">
                    <h4 className="font-bold text-secondary mb-3 text-xl">Regular Maintenance</h4>
                    <p className="text-gray-600">
                      Keep your signage clean and well-maintained to ensure it continues to represent 
                      your business professionally.
                    </p>
                  </div>

                  <div className="border-2 border-primary rounded-lg p-6">
                    <h4 className="font-bold text-secondary mb-3 text-xl">Professional Installation</h4>
                    <p className="text-gray-600">
                      Proper installation ensures safety, longevity, and optimal viewing angles for 
                      maximum impact.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Conclusion</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Investing in quality signage is an investment in your business's future. By choosing the 
                  right type of signage, working with experienced professionals, and maintaining your signs 
                  properly, you can ensure maximum return on your investment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Vardan Signs, we specialize in creating custom signage solutions that help businesses 
                  stand out and succeed. Contact us today to discuss your signage needs and discover how we 
                  can help elevate your brand visibility.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="font-bold text-secondary mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Signage', blog.category, 'Business', 'Marketing', 'Branding', 'LED Signs'].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                  <FaShare /> Share this article:
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaFacebook /> Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaTwitter /> Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Card */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 sticky top-24">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    {blog.author.charAt(0)}
                  </div>
                  <h3 className="font-bold text-secondary text-lg">{blog.author}</h3>
                  <p className="text-sm text-gray-600">Content Writer</p>
                </div>
                <p className="text-gray-600 text-sm text-center mb-4">
                  Expert in signage industry with years of experience helping businesses improve their visibility.
                </p>
                <Link
                  to="/blogs"
                  className="block text-center text-primary hover:text-orange-600 font-semibold text-sm"
                >
                  View All Articles →
                </Link>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary to-orange-600 rounded-xl p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest articles and signage tips delivered to your inbox.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button type="submit" className="w-full bg-white text-primary font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-secondary mb-4">Categories</h3>
                <div className="space-y-2">
                  {[...new Set(blogsData.map(b => b.category))].map((category, index) => {
                    const count = blogsData.filter(b => b.category === category).length;
                    return (
                      <Link
                        key={index}
                        to="/blogs"
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-gray-700 group-hover:text-primary transition-colors">{category}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{count}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Related Articles</h2>
              <p className="section-subtitle">You might also be interested in</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blogs/${relatedBlog.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-semibold">{relatedBlog.category}</span>
                    <h3 className="text-xl font-bold text-secondary mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Signage?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how we can help enhance your brand visibility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="btn-primary">
                Get a Free Quote
              </button>
              <Link to="/services" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

