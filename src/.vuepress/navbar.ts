import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
      {
        text: "学习笔记",
        icon: "material-symbols:book",
        children: ["/Studynotes/java/","/Studynotes/python/","/Studynotes/git/","/Studynotes/github/", "/demo/"],
      },
  //{
  //  text: "指南",
  //  icon: "lightbulb",
  //  prefix: "/guide/",
  //  children: [
  //    {
  //      text: "Bar",
  //      icon: "lightbulb",
  //      prefix: "bar/",
  //      children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //    },
  //    {
  //      text: "Foo",
  //      icon: "lightbulb",
  //      prefix: "foo/",
  //      children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //    },
  //  ],
  //},
  {
    text: "Blog",
    icon: "icomoon-free:blog",
    link: "https://i615.cn",
  },
]);
