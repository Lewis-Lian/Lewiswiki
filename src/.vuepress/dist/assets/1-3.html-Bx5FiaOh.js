import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as s,o as a}from"./app-DGFXroai.js";const n="/assets/20250221_100222_1-Xl7QT4xV.png",l="/assets/20250221_100429_2-COuXZbNN.png",d="/assets/20250221_101136_3-DHZFYZDm.png",r={};function g(o,i){return a(),t("div",null,i[0]||(i[0]=[s(`<h2 id="git-介绍" tabindex="-1"><a class="header-anchor" href="#git-介绍"><span>Git 介绍</span></a></h2><p>Git 的三个区域：</p><ul><li><strong>工作区</strong>： 处理工作的区域</li><li><strong>暂存区</strong>： 临时存放的区域</li><li><strong>本地git仓库</strong>： 最终的存放区域</li></ul><p>在文件夹的体现如下：</p><ul><li><strong>工作区</strong>： 在你电脑里看到的目录</li><li><strong>暂存区</strong>： 在.git文件夹内的index中 (二进制记录)</li><li><strong>版本库</strong>： 指的整个.git文件夹 (也认为是本地仓库)</li></ul><h3 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置"><span>Git配置</span></a></h3><p>安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。因为每一个 Git 提交都会使用这些信息</p><p>命令格式如下：中文自己看情况换</p><ul><li><strong>git config</strong>： 固定命令，设置git相关配置</li><li><strong>–global</strong>： 全局配置；一次配置，整机在使用git时都生效</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --global user.name &quot;你的用户名&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;你的邮箱地址&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令效果如下图：</p><figure><img src="`+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>配置后，可以运行如下命令查看是否成功</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --list  </span></span>
<span class="line"><span>#如果信息太多，可以输入 q 退出</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令效果如下图：</p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>出现以上内容即为注册成功。如果后续想要修改，只需要重新执行一下命令即可</p><h3 id="文件右侧标记" tabindex="-1"><a class="header-anchor" href="#文件右侧标记"><span>文件右侧标记</span></a></h3><p>右侧没有标记的时候为未修改 或 此文件/文件夹，被git忽略不跟踪变化</p><ul><li><strong>M：已修改（Modified）</strong> - 文件已被修改但还没有被添加到暂存区</li><li><strong>A：已添加（Added）</strong> - 文件已经被添加到暂存区，但还没有被提交</li><li><strong>D：已删除（Deleted）</strong> - 文件已经被删除，并且已经被标记为删除，但还没有提交</li><li><strong>R：已重命名（Renamed）</strong> - 文件已经被重命名，这也算作是一种修改，需要被添加到暂存区</li><li><strong>C：已复制（Copied）</strong> - 文件已经被复制，这也算作是一种修改，需要被添加到暂存区</li><li><strong>U：已更新但未融合（Updated but Unmerged）</strong> - 这表示一个文件已经被更新了，但在合并时发生了冲突，需要手动解决冲突后再标记为已解决</li></ul><h2 id="git基础命令" tabindex="-1"><a class="header-anchor" href="#git基础命令"><span>Git基础命令</span></a></h2><h3 id="初始化空的git仓库" tabindex="-1"><a class="header-anchor" href="#初始化空的git仓库"><span>初始化空的Git仓库</span></a></h3><p>新建一个文件夹或现有的文件夹并不是 git 仓库，因为文件夹内不包含 <code>.git</code> 文件夹，没有被 git 管理</p><p>可以在新文件夹或现有文件夹，运行如下命令得到 <code>.git</code> 文件夹，初始化成功则可让 git 开始准备管理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 初始化 git 仓库, 产物: .git 文件夹 (所在文件夹&quot;内&quot;被管理)  </span></span>
<span class="line"><span>git init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>初始化空的 git 仓库成功后，在项目文件夹中，开启显示隐藏文件，即可查看 <code>.git</code> 文件夹</p><ul><li>对于 <code>Windows</code> 系统，在查看里面勾选隐藏的项目选项</li><li>对于 <code>macOS</code> 系统，使用快捷键<code>Command + Shift + .</code>切换隐藏文件显示</li></ul><h3 id="记录更新到git仓库" tabindex="-1"><a class="header-anchor" href="#记录更新到git仓库"><span>记录更新到Git仓库</span></a></h3><p>每当完成了一个阶段的目标，想要记录下它时，就将它提交到仓库</p><p>核心操作：<code>工作区开发</code>—&gt;<code>将修改后的文件添加到暂存区</code>—&gt;<code>将暂存区的文件记录到版本库</code></p><p>把工作区变化放到暂存区中，执行如下命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 将 index.html 添加到暂存区  </span></span>
<span class="line"><span>git add index.html  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 将css目录下一切添加到暂存区  </span></span>
<span class="line"><span>git add css</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下命令，可以一次性把所有变化文件放入暂存区</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># .的意思是当前目录下所有变化都暂存  </span></span>
<span class="line"><span>git add .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>把暂存区内容，提交到版本库，命令如下（此处文字说明可以不加引号）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git commit -m &#39;提交的内容说明&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以上命令相当于存档了一次，在版本库中产生一次提交记录并生成版本号</p><p>本次存档，不耽误我们在工作区 (项目文件夹) 下继续编写项目</p><h3 id="git日志及状态查看" tabindex="-1"><a class="header-anchor" href="#git日志及状态查看"><span>Git日志及状态查看</span></a></h3><p>查看所有提交的日志记录，命令如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git log</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,42)]))}const h=e(r,[["render",g],["__file","1-3.html.vue"]]),u=JSON.parse('{"path":"/Studynotes/git/1-3.html","title":"Git 图文教程","lang":"zh-CN","frontmatter":{"title":"Git 图文教程","icon":"solar:document-bold","order":3,"category":["git","教程"],"tag":["Markdown"],"description":"Git 介绍 Git 的三个区域： 工作区： 处理工作的区域 暂存区： 临时存放的区域 本地git仓库： 最终的存放区域 在文件夹的体现如下： 工作区： 在你电脑里看到的目录 暂存区： 在.git文件夹内的index中 (二进制记录) 版本库： 指的整个.git文件夹 (也认为是本地仓库) Git配置 安装完 Git 之后，要做的第一件事就是设置你的用...","head":[["meta",{"property":"og:url","content":"https://i615.cn/Studynotes/git/1-3.html"}],["meta",{"property":"og:site_name","content":"Lewis知识库"}],["meta",{"property":"og:title","content":"Git 图文教程"}],["meta",{"property":"og:description","content":"Git 介绍 Git 的三个区域： 工作区： 处理工作的区域 暂存区： 临时存放的区域 本地git仓库： 最终的存放区域 在文件夹的体现如下： 工作区： 在你电脑里看到的目录 暂存区： 在.git文件夹内的index中 (二进制记录) 版本库： 指的整个.git文件夹 (也认为是本地仓库) Git配置 安装完 Git 之后，要做的第一件事就是设置你的用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Markdown"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 图文教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lewis\\",\\"url\\":\\"https://i615.cn/\\"}]}"]]},"headers":[{"level":2,"title":"Git 介绍","slug":"git-介绍","link":"#git-介绍","children":[{"level":3,"title":"Git配置","slug":"git配置","link":"#git配置","children":[]},{"level":3,"title":"文件右侧标记","slug":"文件右侧标记","link":"#文件右侧标记","children":[]}]},{"level":2,"title":"Git基础命令","slug":"git基础命令","link":"#git基础命令","children":[{"level":3,"title":"初始化空的Git仓库","slug":"初始化空的git仓库","link":"#初始化空的git仓库","children":[]},{"level":3,"title":"记录更新到Git仓库","slug":"记录更新到git仓库","link":"#记录更新到git仓库","children":[]},{"level":3,"title":"Git日志及状态查看","slug":"git日志及状态查看","link":"#git日志及状态查看","children":[]}]}],"git":{},"readingTime":{"minutes":3.33,"words":1000},"filePathRelative":"Studynotes/git/1-3.md","autoDesc":true}');export{h as comp,u as data};
