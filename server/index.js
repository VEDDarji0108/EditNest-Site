import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const portfolioItems = [
  {
    id: 1,
    title: 'Neon Feathers Campaign',
    imageUrl: 'https://via.placeholder.com/600x800.png?text=Parrot+Editorial',
    category: 'Video Editing',
  },
  {
    id: 2,
    title: 'Tropical Gradient Identity',
    imageUrl: 'https://via.placeholder.com/600x600.png?text=Gradient+Brand',
    category: 'Graphic Design',
  },
  {
    id: 3,
    title: 'Festival Motion Pack',
    imageUrl: 'https://via.placeholder.com/600x700.png?text=Motion+Suite',
    category: 'Animation',
  },
  {
    id: 4,
    title: 'Splash Frame Storyboard',
    imageUrl: 'https://via.placeholder.com/600x900.png?text=Storyboard',
    category: 'Video Editing',
  },
];

app.get('/api/portfolio', (_req, res) => {
  res.json({ items: portfolioItems });
});

app.post('/api/contact', (req, res) => {
  const { name, email, serviceType, message } = req.body || {};

  if (!name || !email || !serviceType || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('New contact submission:', {
    name,
    email,
    serviceType,
    message,
    receivedAt: new Date().toISOString(),
  });

  return res.status(200).json({ success: true, message: 'Message received.' });
});

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = join(__dirname, '../client/dist');
  app.use(express.static(clientBuildPath));
  
  // Serve React app for all non-API routes (must be last)
  app.get('*', (_req, res) => {
    res.sendFile(join(clientBuildPath, 'index.html'));
  });
} else {
  // In development, return 404 for non-API routes
  app.use((_req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });
}

app.listen(PORT, () => {
  console.log(`EditNest server running at http://localhost:${PORT}`);
});

