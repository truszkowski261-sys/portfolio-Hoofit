import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGrid, FiList, FiFilter, FiX, FiChevronDown } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products, categories, getProductsByCategory } from '../data/products'
import './Products.css'

function Products() {
  const { category } = useParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 300])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedSizes, setSelectedSizes] = useState([])
  
  const allSizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
  
  useEffect(() => {
    let result = getProductsByCategory(category)
    
    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    
    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter(p => 
        selectedSizes.some(size => p.sizes.includes(size))
      )
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.badge === 'New Arrival' ? 1 : 0) - (a.badge === 'New Arrival' ? 1 : 0))
        break
      default:
        // Featured - keep original order
        break
    }
    
    setFilteredProducts(result)
  }, [category, sortBy, priceRange, selectedSizes])
  
  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }
  
  const clearFilters = () => {
    setPriceRange([0, 300])
    setSelectedSizes([])
    setSortBy('featured')
  }
  
  const currentCategory = categories.find(c => c.id === category)
  
  return (
    <motion.div 
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Banner */}
      <section className="products-hero">
        <motion.div 
          className="products-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{currentCategory ? currentCategory.name : 'All Products'}</span>
          </div>
          <h1>{currentCategory ? currentCategory.name : 'All Products'}</h1>
          <p>
            {currentCategory 
              ? currentCategory.description 
              : 'Discover our complete collection of premium footwear'
            }
          </p>
        </motion.div>
      </section>
      
      <div className="products-container">
        {/* Sidebar Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              className="filter-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
            />
          )}
        </AnimatePresence>
        
        <motion.aside 
          className={`products-sidebar ${isFilterOpen ? 'open' : ''}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button className="close-filters" onClick={() => setIsFilterOpen(false)}>
              <FiX />
            </button>
          </div>
          
          <div className="filter-section">
            <h4>Categories</h4>
            <ul className="category-list">
              <li>
                <Link 
                  to="/products" 
                  className={!category ? 'active' : ''}
                >
                  All Products
                  <span>({products.length})</span>
                </Link>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <Link 
                    to={`/products/${cat.id}`}
                    className={category === cat.id ? 'active' : ''}
                  >
                    {cat.name}
                    <span>({getProductsByCategory(cat.id).length})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-range">
              <input 
                type="range" 
                min="0" 
                max="300" 
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="price-slider"
              />
              <div className="price-labels">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
          
          <div className="filter-section">
            <h4>Size</h4>
            <div className="size-grid">
              {allSizes.map(size => (
                <button
                  key={size}
                  className={`size-option ${selectedSizes.includes(size) ? 'selected' : ''}`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <button className="clear-filters" onClick={clearFilters}>
            Clear All Filters
          </button>
        </motion.aside>
        
        {/* Products Grid */}
        <div className="products-main">
          <div className="products-toolbar">
            <div className="toolbar-left">
              <button 
                className="filter-toggle"
                onClick={() => setIsFilterOpen(true)}
              >
                <FiFilter />
                <span>Filters</span>
              </button>
              <span className="product-count">
                {filteredProducts.length} products
              </span>
            </div>
            
            <div className="toolbar-right">
              <div className="sort-dropdown">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <FiChevronDown />
              </div>
              
              <div className="view-toggle">
                <button 
                  className={viewMode === 'grid' ? 'active' : ''}
                  onClick={() => setViewMode('grid')}
                >
                  <FiGrid />
                </button>
                <button 
                  className={viewMode === 'list' ? 'active' : ''}
                  onClick={() => setViewMode('list')}
                >
                  <FiList />
                </button>
              </div>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <motion.div 
              className={`products-grid ${viewMode}`}
              layout
            >
              <AnimatePresence>
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              className="no-products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3>No products found</h3>
              <p>Try adjusting your filters to find what you're looking for.</p>
              <button onClick={clearFilters} className="btn-primary">
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Products
