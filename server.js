const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Helper function to format timestamp to YYYY-MM-DD
const dayKey = ts => { 
  const d = new Date(ts); 
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; 
};

app.get('/', (req, res) => {
  res.send('Toko Aksesoris API is running!');
});

app.get('/api/date-check', (req, res) => {
  const now = Date.now();
  res.json({
    timestamp: now,
    formattedDate: dayKey(now)
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
