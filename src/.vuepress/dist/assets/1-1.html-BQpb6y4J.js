import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as s,o as e}from"./app-r3GmWoiF.js";const t={};function n(r,a){return e(),l("div",null,a[0]||(a[0]=[s(`<h2 id="java-简介" tabindex="-1"><a class="header-anchor" href="#java-简介"><span>Java 简介</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的 Java 面向对象程序设计语言和 Java 平台的总称。由 James Gosling和同事们共同研发，并在 1995 年正式推出。</p><p>后来 Sun 公司被 Oracle （甲骨文）公司收购，Java 也随之成为 Oracle 公司的产品。</p></div><p>Java分为三个体系：</p><ul><li>JavaSE（J2SE）（Java2 Platform Standard Edition，java平台标准版）</li><li>JavaEE(J2EE)(Java 2 Platform,Enterprise Edition，java平台企业版)</li><li>JavaME(J2ME)(Java 2 Platform Micro Edition，java平台微型版)。</li><li>2005 年 6 月，JavaOne 大会召开，SUN 公司公开 Java SE 6。此时，Java 的各种版本已经更名，以取消其中的数字 &quot;2&quot;：J2EE 更名为 Java EE，J2SE 更名为Java SE，J2ME 更名为 Java ME。</li></ul><h2 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性"><span>主要特性</span></a></h2><ul><li><strong>Java 语言是简单的：</strong><br> Java 语言的语法与 C 语言和 C++ 语言很接近，使得大多数程序员很容易学习和使用。另一方面，Java 丢弃了 C++ 中很少使用的、很难理解的、令人迷惑的那些特性，如操作符重载、多继承、自动的强制类型转换。特别地，Java 语言不使用指针，而是引用。并提供了自动分配和回收内存空间，使得程序员不必为内存管理而担忧。</li><li><strong>Java 语言是面向对象的：</strong><br> Java 语言提供类、接口和继承等面向对象的特性，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制（关键字为 implements）。Java 语言全面支持动态绑定，而 C++语言只对虚函数使用动态绑定。总之，Java语言是一个纯的面向对象程序设计语言。</li><li><strong>Java语言是分布式的：</strong><br> Java 语言支持 Internet 应用的开发，在基本的 Java 应用编程接口中有一个网络应用编程接口（java net），它提供了用于网络应用编程的类库，包括 URL、URLConnection、Socket、ServerSocket 等。Java 的 RMI（远程方法激活）机制也是开发分布式应用的重要手段。</li><li><strong>Java 语言是健壮的：</strong> Java 的强类型机制、异常处理、垃圾的自动收集等是 Java 程序健壮性的重要保证。对指针的丢弃是 Java 的明智选择。Java 的安全检查机制使得 Java 更具健壮性。</li><li><strong>Java语言是安全的：</strong><br> Java通常被用在网络环境中，为此，Java 提供了一个安全机制以防恶意代码的攻击。除了Java 语言具有的许多安全特性以外，Java 对通过网络下载的类具有一个安全防范机制（类 ClassLoader），如分配不同的名字空间以防替代本地的同名类、字节代码检查，并提供安全管理机制（类 SecurityManager）让 Java 应用设置安全哨兵。</li><li><strong>Java 语言是体系结构中立的：</strong><br> Java 程序（后缀为 java 的文件）在 Java 平台上被编译为体系结构中立的字节码格式（后缀为 class 的文件），然后可以在实现这个 Java 平台的任何系统中运行。这种途径适合于异构的网络环境和软件的分发。</li><li><strong>Java 语言是可移植的：</strong><br> 这种可移植性来源于体系结构中立性，另外，Java 还严格规定了各个基本数据类型的长度。Java 系统本身也具有很强的可移植性，Java 编译器是用 Java 实现的，Java 的运行环境是用 ANSI C 实现的。</li><li><strong>Java 语言是解释型的：</strong><br> 如前所述，Java 程序在 Java 平台上被编译为字节码格式，然后可以在实现这个 Java 平台的任何系统中运行。在运行时，Java 平台中的 Java 解释器对这些字节码进行解释执行，执行过程中需要的类在联接阶段被载入到运行环境中。</li><li><strong>Java 是高性能的：</strong><br> 与那些解释型的高级脚本语言相比，Java 的确是高性能的。事实上，Java 的运行速度随着 JIT(Just-In-Time）编译器技术的发展越来越接近于 C++。</li><li><strong>Java 语言是多线程的：</strong><br> 在 Java 语言中，线程是一种特殊的对象，它必须由 Thread 类或其子（孙）类来创建。通常有两种方法来创建线程：其一，使用型构为 Thread(Runnable) 的构造子类将一个实现了 Runnable 接口的对象包装成一个线程，其二，从 Thread 类派生出子类并重写 run 方法，使用该子类创建的对象即为线程。值得注意的是 Thread 类已经实现了 Runnable 接口，因此，任何一个线程均有它的 run 方法，而 run 方法中包含了线程所要运行的代码。线程的活动由一组方法来控制。Java 语言支持多个线程的同时执行，并提供多线程之间的同步机制（关键字为 synchronized）。</li><li><strong>Java 语言是动态的：</strong><br> Java 语言的设计目标之一是适应于动态变化的环境。Java 程序需要的类能够动态地被载入到运行环境，也可以通过网络来载入所需要的类。这也有利于软件的升级。另外，Java 中的类有一个运行时刻的表示，能进行运行时刻的类型检查。</li></ul><h2 id="发展历史" tabindex="-1"><a class="header-anchor" href="#发展历史"><span>发展历史</span></a></h2><ul><li>1995 年 5 月 23 日，Java 语言诞生</li><li>1996 年 1 月，第一个 JDK-JDK1.0 诞生</li><li>1996 年 4 月，10 个最主要的操作系统供应商申明将在其产品中嵌入 JAVA 技术</li><li>1996 年 9 月，约 8.3 万个网页应用了 JAVA 技术来制作</li><li>1997 年 2 月 18 日，JDK1.1 发布</li><li>1997 年 4 月 2 日，JavaOne 会议召开，参与者逾一万人，创当时全球同类会议规模之纪录</li><li>1997 年 9 月，JavaDeveloperConnection 社区成员超过十万</li><li>1998 年 2 月，JDK1.1 被下载超过 2,000,000次</li><li>1998 年 12 月 8 日，JAVA2 企业平台 J2EE 发布</li><li>1999 年 6月，SUN 公司发布 Java 的三个版本：标准版（JavaSE, 以前是 J2SE）、企业版（JavaEE 以前是 J2EE）和微型版（JavaME，以前是 J2ME）</li><li>2000 年 5 月 8 日，JDK1.3 发布</li><li>2000 年 5 月 29 日，JDK1.4 发布</li><li>2001 年 6 月 5 日，NOKIA 宣布，到 2003 年将出售 1 亿部支持 Java 的手机</li><li>2001 年 9 月 24 日，J2EE1.3 发布</li><li>2002 年 2 月 26 日，J2SE1.4 发布，自此 Java 的计算能力有了大幅提升</li><li>2004 年 9 月 30 日 18:00PM，J2SE1.5 发布，成为 Java 语言发展史上的又一里程碑。为了表示该版本的重要性，J2SE1.5 更名为 Java SE 5.0</li><li>2005 年 6 月，JavaOne 大会召开，SUN 公司公开 Java SE 6。此时，Java 的各种版本已经更名，以取消其中的数字 &quot;2&quot;：J2EE 更名为 Java EE，J2SE 更名为 Java SE，J2ME 更名为 Java ME</li><li>2006 年 12 月，SUN 公司发布 JRE6.0</li><li><strong>2009 年 04 月 20 日，甲骨文 74 亿美元收购 Sun，取得 Java 的版权。</strong></li><li>2010 年 11 月，由于甲骨文对于 Java 社区的不友善，因此 Apache 扬言将退出 JCP。</li><li>2011 年 7 月 28 日，甲骨文发布 Java7.0 的正式版。</li><li>2014 年 3 月 18 日，Oracle 公司发表 Java SE 8。</li><li>2017 年 9 月 21 日，Oracle 公司发表 Java SE 9</li><li>2018 年 3 月 21 日，Oracle 公司发表 Java SE 10</li><li>2018 年 9 月 25 日，Java SE 11 发布</li><li>2019 年 3 月 20 日，Java SE 12 发布</li></ul><h2 id="java-开发工具" tabindex="-1"><a class="header-anchor" href="#java-开发工具"><span>Java 开发工具</span></a></h2><p>Java 语言尽量保证系统内存在 1G 以上，其他工具如下所示：</p><ul><li>Linux 系统、Mac OS 系统、Windows 95/98/2000/XP，WIN 7/8系统。</li><li><a href="http://www.oracle.com/technetwork/cn/java/javase/downloads/index.html" target="_blank" rel="noopener noreferrer">Java JDK 7、8……</a></li><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode</a> 编辑器或者其他编辑器。</li><li>IDE：<a href="http://www.eclipse.org/downloads/" target="_blank" rel="noopener noreferrer">Eclipse</a>、 <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">IntelliJ IDEA</a>、<a href="https://netbeans.org/" target="_blank" rel="noopener noreferrer">NetBeans</a> 等。</li></ul><p>安装好以上的工具后，我们就可以输出Java的第一个程序 &quot;Hello World！&quot;</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HelloWorld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const J=i(t,[["render",n],["__file","1-1.html.vue"]]),h=JSON.parse('{"path":"/Studynotes/java/1-1.html","title":"JAVA简介","lang":"zh-CN","frontmatter":{"title":"JAVA简介","icon":"solar:document-bold","order":1,"category":["java"],"tag":["Markdown"],"description":"Java 简介 提示 Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的 Java 面向对象程序设计语言和 Java 平台的总称。由 James Gosling和同事们共同研发，并在 1995 年正式推出。 后来 Sun 公司被 Oracle （甲骨文）公司收购，Java 也随之成为 Oracle 公司的产品。 Jav...","head":[["meta",{"property":"og:url","content":"https://i615.cn/Studynotes/java/1-1.html"}],["meta",{"property":"og:site_name","content":"Lewis知识库"}],["meta",{"property":"og:title","content":"JAVA简介"}],["meta",{"property":"og:description","content":"Java 简介 提示 Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的 Java 面向对象程序设计语言和 Java 平台的总称。由 James Gosling和同事们共同研发，并在 1995 年正式推出。 后来 Sun 公司被 Oracle （甲骨文）公司收购，Java 也随之成为 Oracle 公司的产品。 Jav..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Markdown"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JAVA简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lewis\\",\\"url\\":\\"https://i615.cn/\\"}]}"]]},"headers":[{"level":2,"title":"Java 简介","slug":"java-简介","link":"#java-简介","children":[]},{"level":2,"title":"主要特性","slug":"主要特性","link":"#主要特性","children":[]},{"level":2,"title":"发展历史","slug":"发展历史","link":"#发展历史","children":[]},{"level":2,"title":"Java 开发工具","slug":"java-开发工具","link":"#java-开发工具","children":[]}],"git":{},"readingTime":{"minutes":6.63,"words":1988},"filePathRelative":"Studynotes/java/1-1.md","autoDesc":true}');export{J as comp,h as data};
