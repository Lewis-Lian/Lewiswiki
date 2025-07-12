<template><div><h2 id="windows-系统安装-python" tabindex="-1"><a class="header-anchor" href="#windows-系统安装-python"><span>Windows 系统安装 Python</span></a></h2>
<h3 id="_1-下载-python" tabindex="-1"><a class="header-anchor" href="#_1-下载-python"><span>1. 下载 Python</span></a></h3>
<ul>
<li>访问 Python 官网：<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Download Python | Python.org</a></li>
<li>点击下载最新版本（默认会下载适合你系统的版本）</li>
<li>如需特定版本，可在 Downloads 中选择 Windows 版本</li>
</ul>
<figure><img src="@source/Studynotes/python/1/assets/20250708_155225_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-安装-python" tabindex="-1"><a class="header-anchor" href="#_2-安装-python"><span>2. 安装 Python</span></a></h3>
<p><strong>推荐安装方式：</strong></p>
<ol>
<li>运行下载的安装包</li>
<li>勾选以下两项：
<ul>
<li>&quot;Install launcher for all users (recommended)&quot;</li>
<li>&quot;<strong>Add Python to PATH</strong>&quot;（非常重要）</li>
</ul>
</li>
<li>点击 &quot;Install Now&quot; 进行默认安装</li>
</ol>
<figure><img src="@source/Studynotes/python/1/assets/20250708_155235_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>自定义安装选项：</strong></p>
<ul>
<li>Documentation：Python 文档和帮助文件</li>
<li>pip：Python 包管理工具（必选）</li>
<li>tcl/tk and IDLE：图形界面和 Python 自带 IDE</li>
<li>Python test suite：测试套件（新手可不选）</li>
<li>py launcher：为所有用户安装 Python 启动器</li>
</ul>
<h3 id="_3-环境配置" tabindex="-1"><a class="header-anchor" href="#_3-环境配置"><span>3. 环境配置</span></a></h3>
<p>如果安装时<strong>勾选</strong>了 &quot;Add Python to PATH&quot;，则无需额外配置。否则需要：</p>
<ol>
<li>打开系统属性 → 高级系统设置 → 环境变量</li>
<li>在系统变量的 Path 中添加 Python 安装路径（如：<code v-pre>C:\Users\用户名\AppData\Local\Programs\Python\Python312\</code>）</li>
</ol>
<h3 id="_4-测试安装" tabindex="-1"><a class="header-anchor" href="#_4-测试安装"><span>4. 测试安装</span></a></h3>
<p>打开命令行(cmd)，输入：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">python </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>应显示安装的 Python 版本号。</p>
<figure><img src="@source/Studynotes/python/1/assets/20250708_155253_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="mac-系统安装-python" tabindex="-1"><a class="header-anchor" href="#mac-系统安装-python"><span>Mac 系统安装 Python</span></a></h2>
<p>Mac 系统通常自带 Python 2.x，建议安装最新版本：</p>
<ol>
<li>打开终端(Terminal)</li>
<li>输入 <code v-pre>python3</code> 检查是否已安装 Python 3.x</li>
<li>如需安装，可访问 <a href="https://www.python.org/downloads/mac-osx/" target="_blank" rel="noopener noreferrer">Python for Mac</a> 下载安装包</li>
</ol>
<h2 id="ide-安装与使用-pycharm" tabindex="-1"><a class="header-anchor" href="#ide-安装与使用-pycharm"><span>IDE 安装与使用（PyCharm）</span></a></h2>
<h3 id="_1-下载-pycharm" tabindex="-1"><a class="header-anchor" href="#_1-下载-pycharm"><span>1. 下载 PyCharm</span></a></h3>
<ul>
<li>官网：<a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">PyCharm</a></li>
<li>推荐下载 Professional 版（学生可免费使用）</li>
</ul>
<h3 id="_2-安装-pycharm" tabindex="-1"><a class="header-anchor" href="#_2-安装-pycharm"><span>2. 安装 PyCharm</span></a></h3>
<ol>
<li>运行安装程序</li>
<li>选择安装路径</li>
<li>建议勾选：
<ul>
<li>创建桌面快捷方式</li>
<li>更新 PATH 变量</li>
<li>创建文件关联</li>
</ul>
</li>
</ol>
<figure><img src="@source/Studynotes/python/1/assets/20250708_155304_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-使用-pycharm" tabindex="-1"><a class="header-anchor" href="#_3-使用-pycharm"><span>3. 使用 PyCharm</span></a></h3>
<ol>
<li>创建新项目</li>
<li>新建 Python 文件</li>
<li>编写简单代码测试：</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello World"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>点击运行按钮执行程序</li>
</ol>
<figure><img src="@source/Studynotes/python/1/assets/20250708_160310_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<ol>
<li>
<p><strong>用户变量 vs 系统变量</strong>：</p>
<ul>
<li>用户变量：仅对当前用户有效</li>
<li>系统变量：对所有用户有效</li>
</ul>
</li>
<li>
<p><strong>PyCharm 社区版 vs 专业版</strong>：</p>
<ul>
<li>社区版：免费，基础功能</li>
<li>专业版：收费，支持更多高级功能（如科学计算、Web 开发等）</li>
</ul>
</li>
<li>
<p><strong>Python 版本选择</strong>：</p>
<ul>
<li>新手建议安装最新稳定版</li>
<li>特定项目可能需要特定版本</li>
</ul>
</li>
</ol>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ol>
<li><a href="https://blog.csdn.net/sensen_kiss/article/details/141940274" target="_blank" rel="noopener noreferrer">Python安装与环境配置全程详细教学（包含Windows版和Mac版）_python环境-CSDN博客</a></li>
<li><a href="https://www.runoob.com/python/python-install.html" target="_blank" rel="noopener noreferrer">Python 环境搭建 | 菜鸟教程</a></li>
</ol>
</div></template>


