<template><div><div class="hint-container info">
<p class="hint-container-title">前言</p>
<p>本篇为手把手教学的 Github 代码管理教程，属于新手入门级别的难度。教程简单易操作，能够基本满足读者朋友日常项目寄托于 Github 平台上进行代码管理的需求。Git 与 Github 是一名合格程序员 coder 必定会接触到的工具与平台，GitHub 作为世界上最大的代码开源与分享平台，读者朋友可以在 Github 得到或上传各种各样的代码资源。希望这篇博文能给读者朋友的 Git 与 Github 使用带来些许帮助，Respect！</p>
</div>
<blockquote>
<p>Github官网地址：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></p>
</blockquote>
<h2 id="github概述" tabindex="-1"><a class="header-anchor" href="#github概述"><span>Github概述</span></a></h2>
<h3 id="git的诞生" tabindex="-1"><a class="header-anchor" href="#git的诞生"><span>Git的诞生</span></a></h3>
<p>GitHub 是一个基于web的服务平台，主要用于版本控制和协作，让开发者和项目团队能够更好地一起工作。它提供了一个 Git 代码仓库的托管服务，Git 是一个开源的分布式版本控制系统，由 Linus Torvalds 为更好地管理 Linux 内核开发而设计。</p>
<p>在 GitHub 上，用户可以创建自己的项目仓库来管理代码，同时也可以参与到其他人的项目中。 GitHub 提供了许多协作特性，比如问题跟踪、<strong>项目管理</strong>、代码审查、团队讨论等，这些都极大地促进了开源项目的合作和发展。</p>
<blockquote>
<p>Git 诞生八卦：<br>
Linus 在 1991 年创建了开源的 Linux，从此，Linux 系统不断发展，已经成为最大的服务器系统软件了。<br>
Linus 虽然创建了 Linux，但 Linux 的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为 Linux 编写代码，那 Linux 的代码是如何管理的呢？<br>
在 2002 年以前，世界各地的志愿者把源代码文件通过 diff 的方式发给 Linus，然后由 Linus 本人通过手工方式合并代码！<br>
直到 2002 年，Linux 系统已经发展了十年了，代码库之大让 Linus 很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统 BitKeeper，BitKeeper 的东家 BitMover 公司出于人道主义精神，授权 Linux 社区免费使用这个版本控制系统。<br>
但在 2005 年这样的美好被打破了，于是 Linus 花了两周时间自己用 C 写了一个分布式版本控制系统，这就是 Git！一个月之内，Linux 系统的源码已经由 Git 管理了！<br>
Git 迅速成为最流行的分布式版本控制系统，尤其是 <em><strong>2008 年，GitHub 网站上线了，它为开源项目免费提供 Git 存储，无数开源项目开始迁移至 GitHub，包括 jQuery，PHP，Ruby 等等。</strong></em></p>
</blockquote>
<h3 id="git与github的联系" tabindex="-1"><a class="header-anchor" href="#git与github的联系"><span>Git与Github的联系</span></a></h3>
<p>Git 和 GitHub 是两个紧密相关的事物：</p>
<ol>
<li><strong>Git</strong>: <code v-pre>Git</code> 是一个开源的分布式版本控制系统，由 <code v-pre>Linus Torvalds</code> 创建于 2005 年。它允许开发者跟踪和管理源代码历史，支持多人协作开发。Git 的核心功能包括版本控制、分支管理、合并和冲突解决等。它是基于命令行的工具，可以在本地计算机上完全离线工作。</li>
<li><strong>GitHub</strong>: <code v-pre>GitHub</code> 是一个基于 <code v-pre>Git</code> 的在线托管平台，提供 <code v-pre>Git</code> 仓库的托管服务。它为开源项目和个人开发者提供了一系列协作工具，如代码审查、问题跟踪、项目管理、<code v-pre>Wiki</code> 页面等。<code v-pre>GitHub</code> 还提供了图形用户界面，使得用户可以更容易地使用<code v-pre>Git</code>的功能。此外，<code v-pre>GitHub </code>还提供了一些社交网络特性，如关注其他用户、星标项目（<code v-pre>star</code>）、对项目代码提出改进建议（<code v-pre>fork</code>）和提交拉取请求（<code v-pre>pull request</code>）。</li>
</ol>
<p>综上所述，<code v-pre>Git</code> 是一个版本控制系统，而 <code v-pre>GitHub</code> 是一个使用 <code v-pre>Git</code> 的工具和服务提供者。开发者可以在本地使用 <code v-pre>Git</code> 进行版本控制，然后将代码推送到 <code v-pre>GitHub</code> 上进行共享和协作。</p>
<h2 id="github的使用" tabindex="-1"><a class="header-anchor" href="#github的使用"><span>Github的使用</span></a></h2>
<h3 id="github注册登录" tabindex="-1"><a class="header-anchor" href="#github注册登录"><span>Github注册登录</span></a></h3>
<ol>
<li>登入 GitHub 的官网，点击 sign up（注册）</li>
</ol>
<figure><img src="@source/Studynotes/github/assets/20250221_105541_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>填入相关的注册 GitHub 账号信息</li>
</ol>
<figure><img src="@source/Studynotes/github/assets/20250221_105929_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>登入自己刚刚注册的 Github 账号</li>
</ol>
<figure><img src="@source/Studynotes/github/assets/20250221_110434_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="github项目库创建" tabindex="-1"><a class="header-anchor" href="#github项目库创建"><span>Github项目库创建</span></a></h3>
<ol>
<li>登入自己的 Github，点击 <mark>new</mark> 进入创建项目页面</li>
</ol>
<figure><img src="@source/Studynotes/github/assets/20250221_111133_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>按下图创建一个项目</li>
</ol>
<figure><img src="@source/Studynotes/github/assets/20250221_112046_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">注意：</p>
<p>库分为两种，分别是：公有（<code v-pre>Public</code>）和私有（<code v-pre>Private</code>），大家自行选择即可</p>
</div>
<p>在创建完成自己的库之后，下面就要让自己的电脑克隆一个自己所创建的库，方面自己电脑上的代码同步到 <strong>GitHub <strong>你所创建的库当中。为了实现，就需要安装一个软件</strong> Git Bash</strong>。接下来让我们安装 <strong>Git Bash</strong>。</p>
<h2 id="安装git-bash" tabindex="-1"><a class="header-anchor" href="#安装git-bash"><span>安装Git Bash</span></a></h2>
<p>点击下方链接进入安装git教程</p>
<ul>
<li><a href="https://wiki.i615.cn/Studynotes/git/1-1.html" target="_blank" rel="noopener noreferrer">Windows</a></li>
</ul>
<h2 id="git和github的绑定" tabindex="-1"><a class="header-anchor" href="#git和github的绑定"><span>Git和Github的绑定</span></a></h2>
<h3 id="得到ssh-keys" tabindex="-1"><a class="header-anchor" href="#得到ssh-keys"><span><strong>得到ssh keys</strong></span></a></h3>
<p>输入</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd ~/.ssh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>返回 &quot;<code v-pre>no such file or directory</code>&quot; 表明电脑没有<code v-pre>ssh key</code>，需要创建<code v-pre>ssh key</code></p>
<p>在终端输入</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh-keygen -t rsa -C “git账号”；</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>连续进行 3 次回车Enter（确认），得到如下截图中的信息即可；</p>
<figure><img src="@source/Studynotes/github/assets/20250221_125858_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>按路径进入 .ssh，里面存储的是两个 <strong>ssh key</strong> 的秘钥，<strong>id_rsa.pub</strong> 文件里面存储的是公钥，<strong>id_rsa</strong> 文件里存储的是私钥， <mark>不能告诉别人。</mark>  <strong>打开id_rsa.pub文件，复制里面的内容。</strong></p>
<figure><img src="@source/Studynotes/github/assets/20250221_130029_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="绑定ssh密钥" tabindex="-1"><a class="header-anchor" href="#绑定ssh密钥"><span>绑定ssh密钥</span></a></h3>
<p>接下需要登录到自己的 GitHub 上边添加这个密匙</p>
<p><img src="@source/Studynotes/github/assets/20250221_130404_8.png" alt="" loading="lazy"><br>
<img src="@source/Studynotes/github/assets/20250221_130454_9.png" alt="" loading="lazy"></p>
<p>填写名字并且填写复制的公钥（id_rsa.pub内容），添加后配置完成</p>
<figure><img src="@source/Studynotes/github/assets/20250221_130620_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成后如下图</p>
<figure><img src="@source/Studynotes/github/assets/20250221_130825_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们回到 <strong>Git bash</strong> 上边，输入：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -T git@github.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>来检查是否成功绑定。如果输入代码之后再选择 yes 出来是这样说明就成功啦！！！</p>
<figure><img src="@source/Studynotes/github/assets/20250221_131339_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="剩余配置内容" tabindex="-1"><a class="header-anchor" href="#剩余配置内容"><span>剩余配置内容</span></a></h3>
<p>将 name 最好和 GitHub 上边的一样，email 是一定要是注册 GitHub 的那个邮箱地址</p>
<p>这两个的顺序可以颠倒，没有固定的顺序。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --global user.name “gitname”</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --global user.email “git邮箱”</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/Studynotes/github/assets/20250221_133616_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>截止到这里的操作，已经完成本地 Git 与远程的 Github 绑定，这意味着我们已经可以通过 Git 向 GitHub 提交代码啦！</p>
</div></template>


