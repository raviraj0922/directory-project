const Search = require('../models/searchModel');
const Directory = require('../models/directoryModel');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');

// Perform search
exports.search = asyncHandler(async (req, res) => {
  const { query, category, location } = req.query;
  
  // Build search query
  const searchQuery = {};
  if (query) {
    searchQuery.$or = [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } }
    ];
  }
  if (category) searchQuery.category = category;
  if (location) searchQuery['address'] = { $regex: location, $options: 'i' };

  // Perform search
  const results = await Directory.find(searchQuery);

  // Save search query
  await Search.create({
    query,
    category,
    location,
    results: results.map(result => result._id)
  });

  res.status(200).json({
    success: true,
    count: results.length,
    data: results
  });
});

// Get search history
exports.getSearchHistory = asyncHandler(async (req, res) => {
  const searches = await Search.find()
    .sort({ timestamp: -1 })
    .limit(10)
    .populate('results');

  res.status(200).json({
    success: true,
    data: searches
  });
}); 