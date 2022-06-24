import { Router } from "./router.js";

const router = new Router();

router.add("/", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "./pages/exploration.html");
router.add(404, "./pages/404.html");

router.addPageBackground("/","./images/mountains-universe-1.png");
router.addPageBackground("/universe", "./images/mountains-universe-2.png");
router.addPageBackground("/exploration", "./images/mountains-universe-3.png");

router.handle();

window.route = () => router.route();
window.handle = () => router.handle();