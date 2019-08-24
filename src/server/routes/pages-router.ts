import { Router } from 'express';
import { getManifest } from '@/routes/manifest-manager';
import { assetsPath } from '@/config';
import fs from 'fs';
import path from 'path';

export function pagesRouter() {
  const router = Router();

  router.get(`/**`, (_, res) => {
    fs.readFile(path.join(assetsPath, 'private', 'app.json'), async (err, data) => {
      const manifest = await getManifest();
      const app = JSON.parse(data.toString());
      res.render('page.ejs', { manifest, app });
    });
  });

  return router;
}
