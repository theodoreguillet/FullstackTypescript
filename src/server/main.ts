import * as express from 'express';
import * as path from 'path';
import { SERVER_PORT } from '@/config';
import { apiRouter } from '@/routes/api-router';
import { pagesRouter } from '@/routes/pages-router';
import { staticsRouter } from '@/routes/statics-router';
import * as config from '@/config';

console.log(`*******************************************`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`config: ${JSON.stringify(config, null, 2)}`);
console.log(`*******************************************`);

const app = express.default();
app.set('views', config.viewPath);
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(config.assetsPath, 'public')));
app.use(apiRouter());
app.use(staticsRouter());
app.use(pagesRouter());

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}!`);
});
