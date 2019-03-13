// Environment
const isProduction = process.env.NODE_ENV === 'production';

export default function html(options) {
  const {
    title = 'Dev Education',
    markup = ''
  } = options;

  let path = '/';
  let link = '';

  if (isProduction) {
    path = '/app/';
    link = '<link rel="stylesheet" href="/css/main.css" />';
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        ${link}
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="${path}vendor.bundle.js"></script>
        <script src="${path}main.bundle.js"></script>
      </body>
    </html>
  `;
}
