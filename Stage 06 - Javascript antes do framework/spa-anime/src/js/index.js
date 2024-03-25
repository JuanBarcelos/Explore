import  {Router}  from "./router.js";

const router =  new Router();

router.add('/','./src/pages/home.html');
router.add('/bokunohero','./src/pages/bokunohero.html');
router.add('/jujutsukaisen','./src/pages/jujutsukaisen.html');
router.add('/kimetsu','./src/pages/kimetsu.html');

router.handle();

window.onpopstate = () => router.handle();
window.route = (url) => router.route(url);
