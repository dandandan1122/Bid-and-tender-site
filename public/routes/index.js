import express from 'express';
import db from '../database/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const tenders = await db.all('SELECT * FROM tenders');
  res.render('index', { tenders });
});

router.post('/add-tender', async (req, res) => {
  const { title, description, deadline } = req.body;
  await db.run(
    'INSERT INTO tenders (title, description, deadline) VALUES (?, ?, ?)',
    [title, description, deadline]
  );
  res.redirect('/');
});

export default router;
