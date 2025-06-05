const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Directory = require('../models/directoryModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const directories = await Directory.find({ slug: { $exists: false } });

  for (const dir of directories) {
    dir.slug = dir.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    await dir.save();
    console.log(`Slug added for: ${dir.name}`);
  }

  console.log('✅ Slug update complete.');
  process.exit();
}).catch(err => {
  console.error('❌ Failed to connect:', err);
});
