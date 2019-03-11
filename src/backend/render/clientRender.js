// HTML
import html from './html';

export default function clientRender() {
  return (req, res, next) => {
    res.send(html({
      title: 'DEV Education'
    }));
  };
}
