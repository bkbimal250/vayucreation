import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogsData } from '../data/blogsData';
import { FaSearch } from 'react-icons/fa';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogsData.map(blog => blog.category))];

  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogsData[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights, tips, and trends in the world of signage. Stay updated with our latest articles.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Featured Article
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64 md:h-full">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {featuredBlog.category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-sm text-gray-500 mb-4">
                {featuredBlog.date} • {featuredBlog.readTime}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                {featuredBlog.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              <div>
                <a href={`#blog-${featuredBlog.id}`} className="btn-primary inline-block">
                  Read Full Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Filters */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-600">
              Showing {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Get the latest articles and signage trends delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle">
              Explore articles organized by topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat !== 'All').map((category, index) => {
              const count = blogsData.filter(blog => blog.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-gray-50 hover:bg-primary hover:text-white rounded-xl p-6 text-left transition-all duration-300 group shadow-md hover:shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-secondary group-hover:text-white mb-2">
                    {category}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90">
                    {count} article{count !== 1 ? 's' : ''}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

