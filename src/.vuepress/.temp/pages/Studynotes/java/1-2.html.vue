<template><div><h2 id="window系统安装java" tabindex="-1"><a class="header-anchor" href="#window系统安装java"><span>window系统安装java</span></a></h2>
<h3 id="下载jdk" tabindex="-1"><a class="header-anchor" href="#下载jdk"><span>下载JDK</span></a></h3>
<p>首先我们需要下载 java 开发工具包 JDK，下载地址：<a href="https://www.oracle.com/cn/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">Java Downloads | Oracle 中国</a>，在下载页面中根据自己的系统选择对应的版本，本文以 Window 64位系统为例：</p>
<figure><img src="@source/Studynotes/java/assets/20250224_115338_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下载后 JDK 的安装根据提示进行，还有安装 JDK 的时候也会安装 JRE，一并安装就可以了。</p>
<p>安装JDK，安装过程中可以自定义安装目录等信息</p>
<h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3>
<p>安装完成后，右击&quot;我的电脑&quot;，点击&quot;属性&quot;，选择&quot;高级系统设置&quot;</p>
<figure><img src="@source/Studynotes/java/assets/20250304_105426_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择&quot;高级&quot;选项卡，点击&quot;环境变量&quot;；</p>
<figure><img src="@source/Studynotes/java/assets/20250304_141006_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在 &quot;系统变量&quot; 中设置 3 项属性，JAVA_HOME、PATH、CLASSPATH(大小写无所谓),若已存在则点击&quot;编辑&quot;，不存在则点击&quot;新建&quot;。</p>
<div class="hint-container tip">
<p class="hint-container-title">注意</p>
<p>如果使用 1.5 以上版本的 JDK，不用设置 CLASSPATH 环境变量，也可以正常编译和运行 Java 程序。</p>
</div>
<p>变量设置参数如下：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>变量名：JAVA_HOME</span></span>
<span class="line"><span>变量值：C:\Program Files (x86)\Java\jdk1.8.0_91</span></span>
<span class="line"><span>// 要根据自己的实际路径配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>变量名：CLASSPATH</span></span>
<span class="line"><span>变量值：</span></span>
<span class="line"><span>.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;</span></span>
<span class="line"><span>//记得前面有个"."</span></span>
<span class="line"><span>变量名：Path</span></span>
<span class="line"><span>变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-home-设置" tabindex="-1"><a class="header-anchor" href="#java-home-设置"><span>JAVA_HOME 设置</span></a></h3>
<figure><img src="@source/Studynotes/java/assets/20250304_141519_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Studynotes/java/assets/20250304_141524_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="path设置" tabindex="-1"><a class="header-anchor" href="#path设置"><span>PATH设置</span></a></h3>
<figure><img src="@source/Studynotes/java/assets/20250304_141545_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Studynotes/java/assets/20250304_141552_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">注意</p>
<p>在 Windows10 中，Path 变量里是分条显示的，我们需要将 %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin; 分开添加，否则无法识别:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>%JAVA_HOME%\bin;</span></span>
<span class="line"><span>%JAVA_HOME%\jre\bin;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/Studynotes/java/assets/20250304_142807_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<h3 id="classpath-设置" tabindex="-1"><a class="header-anchor" href="#classpath-设置"><span>CLASSPATH 设置</span></a></h3>
<figure><img src="@source/Studynotes/java/assets/20250304_142838_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这是 Java 的环境配置，配置完成后，你可以启动 Eclipse 来编写代码，它会自动完成java环境的配置。</p>
<h3 id="测试jdk是否安装成功" tabindex="-1"><a class="header-anchor" href="#测试jdk是否安装成功"><span>测试JDK是否安装成功</span></a></h3>
<ol>
<li>&quot;开始&quot;-&gt;&quot;运行&quot;，键入&quot;cmd&quot;；</li>
<li>键入命令: <code v-pre>java -version</code> 、<code v-pre>java</code> 、<code v-pre>javac</code> 几个命令，出现以下信息，说明环境变量配置成功；</li>
</ol>
<figure><img src="@source/Studynotes/java/assets/20250304_143127_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="linux-unix-solaris-freebsd环境变量设置" tabindex="-1"><a class="header-anchor" href="#linux-unix-solaris-freebsd环境变量设置"><span>Linux，UNIX，Solaris，FreeBSD环境变量设置</span></a></h2>
<p>环境变量PATH应该设定为指向Java二进制文件安装的位置。如果设置遇到困难，请参考shell文档。</p>
<p>例如，假设你使用bash作为shell，你可以把下面的内容添加到你的 .bashrc文件结尾: <code v-pre>export PATH=/path/to/java:$PATH</code></p>
<h2 id="流行-java-开发工具" tabindex="-1"><a class="header-anchor" href="#流行-java-开发工具"><span>流行 Java 开发工具</span></a></h2>
<p>正所谓工欲善其事必先利其器，我们在开发 Java 语言过程中同样需要一款不错的开发工具，目前市场上的 IDE 很多，本文为大家推荐以下下几款 Java 开发工具：</p>
<ul>
<li><strong>JetBrains</strong> 的 IDEA， 现在很多人开始使用了，功能很强大,下载地址：<a href="https://www.jetbrains.com/idea/download/" target="_blank" rel="noopener noreferrer">https://www.jetbrains.com/idea/download/</a></li>
</ul>
<figure><img src="@source/Studynotes/java/assets/20250304_143439_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li><strong>VSCode</strong> : <code v-pre>VSCode</code>（全称：<code v-pre>Visual Studio Code</code>）是一款由微软开发且跨平台的免费源代码编辑器。下载地址：<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a></li>
</ul>
<figure><img src="@source/Studynotes/java/assets/20250304_143709_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li><strong>Eclipse:</strong> 另一个免费开源的 Java IDE，下载地址： <a href="https://www.eclipse.org/downloads/packages/" target="_blank" rel="noopener noreferrer">https://www.eclipse.org/downloads/packages/</a></li>
</ul>
<p>选择 <code v-pre>Eclipse IDE for Java Developers</code>：</p>
<figure><img src="@source/Studynotes/java/assets/20250304_143900_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


