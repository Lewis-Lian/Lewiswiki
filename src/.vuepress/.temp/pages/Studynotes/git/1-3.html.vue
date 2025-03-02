<template><div><h2 id="git-介绍" tabindex="-1"><a class="header-anchor" href="#git-介绍"><span>Git 介绍</span></a></h2>
<p>Git 的三个区域：</p>
<ul>
<li><strong>工作区</strong>： 处理工作的区域</li>
<li><strong>暂存区</strong>： 临时存放的区域</li>
<li><strong>本地git仓库</strong>： 最终的存放区域</li>
</ul>
<p>在文件夹的体现如下：</p>
<ul>
<li><strong>工作区</strong>： 在你电脑里看到的目录</li>
<li><strong>暂存区</strong>： 在.git文件夹内的index中 (二进制记录)</li>
<li><strong>版本库</strong>： 指的整个.git文件夹 (也认为是本地仓库)</li>
</ul>
<h3 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置"><span>Git配置</span></a></h3>
<p>安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。因为每一个 Git 提交都会使用这些信息</p>
<p>命令格式如下：中文自己看情况换</p>
<ul>
<li><strong>git config</strong>： 固定命令，设置git相关配置</li>
<li><strong>–global</strong>： 全局配置；一次配置，整机在使用git时都生效</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --global user.name "你的用户名"</span></span>
<span class="line"><span>git config --global user.email "你的邮箱地址"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令效果如下图：</p>
<figure><img src="@source/Studynotes/git/assets/20250221_100222_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>配置后，可以运行如下命令查看是否成功</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --list  </span></span>
<span class="line"><span>#如果信息太多，可以输入 q 退出</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令效果如下图：</p>
<figure><img src="@source/Studynotes/git/assets/20250221_100429_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>出现以上内容即为注册成功。如果后续想要修改，只需要重新执行一下命令即可</p>
<h3 id="文件右侧标记" tabindex="-1"><a class="header-anchor" href="#文件右侧标记"><span>文件右侧标记</span></a></h3>
<p>右侧没有标记的时候为未修改 或 此文件/文件夹，被git忽略不跟踪变化</p>
<ul>
<li><strong>M：已修改（Modified）</strong> - 文件已被修改但还没有被添加到暂存区</li>
<li><strong>A：已添加（Added）</strong> - 文件已经被添加到暂存区，但还没有被提交</li>
<li><strong>D：已删除（Deleted）</strong> - 文件已经被删除，并且已经被标记为删除，但还没有提交</li>
<li><strong>R：已重命名（Renamed）</strong> - 文件已经被重命名，这也算作是一种修改，需要被添加到暂存区</li>
<li><strong>C：已复制（Copied）</strong> - 文件已经被复制，这也算作是一种修改，需要被添加到暂存区</li>
<li><strong>U：已更新但未融合（Updated but Unmerged）</strong> - 这表示一个文件已经被更新了，但在合并时发生了冲突，需要手动解决冲突后再标记为已解决</li>
</ul>
<h2 id="git基础命令" tabindex="-1"><a class="header-anchor" href="#git基础命令"><span>Git基础命令</span></a></h2>
<h3 id="初始化空的git仓库" tabindex="-1"><a class="header-anchor" href="#初始化空的git仓库"><span>初始化空的Git仓库</span></a></h3>
<p>新建一个文件夹或现有的文件夹并不是 git 仓库，因为文件夹内不包含 <code v-pre>.git</code> 文件夹，没有被 git 管理</p>
<p>可以在新文件夹或现有文件夹，运行如下命令得到 <code v-pre>.git</code> 文件夹，初始化成功则可让 git 开始准备管理</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 初始化 git 仓库, 产物: .git 文件夹 (所在文件夹"内"被管理)  </span></span>
<span class="line"><span>git init</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/Studynotes/git/assets/20250221_101136_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>初始化空的 git 仓库成功后，在项目文件夹中，开启显示隐藏文件，即可查看 <code v-pre>.git</code> 文件夹</p>
<ul>
<li>对于 <code v-pre>Windows</code> 系统，在查看里面勾选隐藏的项目选项</li>
<li>对于 <code v-pre>macOS</code> 系统，使用快捷键<code v-pre>Command + Shift + .</code>切换隐藏文件显示</li>
</ul>
<h3 id="记录更新到git仓库" tabindex="-1"><a class="header-anchor" href="#记录更新到git仓库"><span>记录更新到Git仓库</span></a></h3>
<p>每当完成了一个阶段的目标，想要记录下它时，就将它提交到仓库</p>
<p>核心操作：<code v-pre>工作区开发</code>—&gt;<code v-pre>将修改后的文件添加到暂存区</code>—&gt;<code v-pre>将暂存区的文件记录到版本库</code></p>
<p>把工作区变化放到暂存区中，执行如下命令</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 将 index.html 添加到暂存区  </span></span>
<span class="line"><span>git add index.html  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 将css目录下一切添加到暂存区  </span></span>
<span class="line"><span>git add css</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下命令，可以一次性把所有变化文件放入暂存区</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># .的意思是当前目录下所有变化都暂存  </span></span>
<span class="line"><span>git add .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>把暂存区内容，提交到版本库，命令如下（此处文字说明可以不加引号）</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git commit -m '提交的内容说明'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>以上命令相当于存档了一次，在版本库中产生一次提交记录并生成版本号</p>
<p>本次存档，不耽误我们在工作区 (项目文件夹) 下继续编写项目</p>
<h3 id="git日志及状态查看" tabindex="-1"><a class="header-anchor" href="#git日志及状态查看"><span>Git日志及状态查看</span></a></h3>
<p>查看所有提交的日志记录，命令如下</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git log</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


