import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  //全部自动生成
  //sidebar: "structure",
    "/Studynotes/": "structure",
    "/demo/": "structure",
  "/": [
   "",
    "about",
    
    //{
    //  text: "Python",
    //  icon: "lineicons:python",
    //  prefix: "Python/",
    //  link: "Python/",
    //  children: "structure",
    //},
    
     //   {
    //  text: "案例",
    //  icon: "laptop-code",
    //  prefix: "demo/",
    //  children: "structure",
    //  collapsible: true,
    //  expanded: false,
    //},
    //{
    //  text: "文档",
    //  icon: "book",
    //  prefix: "guide/",
    //  children: "structure",
    //},
    //{
    //  text: "幻灯片",
    //  icon: "person-chalkboard",
    //  link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    //},
  ],
});
