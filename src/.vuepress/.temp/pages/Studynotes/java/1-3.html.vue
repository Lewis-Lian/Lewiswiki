<template><div><h2 id="java-基础语法" tabindex="-1"><a class="header-anchor" href="#java-基础语法"><span>Java 基础语法</span></a></h2>
<p>一个 Java 程序可以认为是一系列对象的集合，而这些对象通过调用彼此的方法来协同工作。下面简要介绍下类、对象、方法和实例变量的概念。</p>
<ul>
<li><strong>对象</strong>：对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。</li>
<li><strong>类</strong>：类是一个模板，它描述一类对象的行为和状态。</li>
<li><strong>方法</strong>：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。</li>
<li><strong>实例变量</strong>：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。</li>
</ul>
<h2 id="第一个java程序" tabindex="-1"><a class="header-anchor" href="#第一个java程序"><span>第一个Java程序</span></a></h2>
<p>下面看一个简单的 Java 程序，它将输出字符串 <em>Hello World</em></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> HelloWorld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    /* 第一个Java程序</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">     * 它将输出字符串 Hello World</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">     */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello World"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 输出 Hello World</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/Studynotes/java/assets/20250309_152129_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下面将逐步介绍如何保存、编译以及运行这个程序：</p>
<ul>
<li>打开代码编辑器，把上面的代码添加进去；</li>
<li>把文件名保存为：<code v-pre>HelloWorld.java</code>；</li>
<li>打开 <code v-pre>cmd</code> 命令窗口，进入目标文件所在的位置，假设是 C:\</li>
<li>在命令行窗口输入 <code v-pre>javac HelloWorld.java</code> 按下回车键编译代码。如果代码没有错误，cmd 命令提示符会进入下一行（假设环境变量都设置好了）。</li>
<li>再键输入 <code v-pre>java HelloWorld</code> 按下回车键就可以运行程序了</li>
</ul>
<p>你将会在窗口看到 Hello World</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">$ javac </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">HelloWorld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">$ java </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">HelloWorld</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Hello</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> World</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果遇到编码问题，我们可以使用 -encoding 选项设置 utf-8 来编译：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">javac </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">encoding UTF</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> HelloWorld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">java </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">HelloWorld</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/Studynotes/java/assets/20250311_133538_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2>
<p>编写 Java 程序时，应注意以下几点：</p>
<ul>
<li><strong>大小写敏感</strong> ：Java 是大小写敏感的，这就意味着标识符 Hello 与 hello 是不同的。</li>
<li><strong>类名</strong> ：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如<strong>MyFirstJavaClass</strong> 。</li>
<li><strong>方法名</strong> ：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。</li>
<li><strong>源文件名</strong> ：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为 <strong>.java</strong> 。（如果文件名和类名不相同则会导致编译错误）。</li>
<li><strong>主方法入口</strong> ：所有的 Java 程序由 <code v-pre>public static void main(String[] ar</code>gs) 方法开始执行。</li>
</ul>
<h2 id="java-标识符" tabindex="-1"><a class="header-anchor" href="#java-标识符"><span>Java 标识符</span></a></h2>
<p>Java 所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。<br>
关于 Java 标识符，有以下几点需要注意：</p>
<ul>
<li>所有的标识符都应该以字母（<code v-pre>A-Z</code> 或者 <code v-pre>a-z</code>）,美元符（<code v-pre>$</code>）、或者下划线（<code v-pre>_</code>）开始</li>
<li>首字符之后可以是字母（<code v-pre>A-Z</code> 或者 <code v-pre>a-z</code>）,美元符（<code v-pre>$</code>）、下划线（<code v-pre>_</code>）或数字的任何字符组合</li>
<li>关键字不能用作标识符</li>
<li>标识符是大小写敏感的</li>
<li>合法标识符举例：<code v-pre>age</code>、<code v-pre>$salary</code>、<code v-pre>_value</code>、<code v-pre>__1_value</code></li>
<li>非法标识符举例：<code v-pre>123abc</code>、<code v-pre>-salary</code></li>
</ul>
<h2 id="java修饰符" tabindex="-1"><a class="header-anchor" href="#java修饰符"><span>Java修饰符</span></a></h2>
<p>像其他语言一样，Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：</p>
<ul>
<li>访问控制修饰符 : <code v-pre>default</code>, <code v-pre>public</code> , <code v-pre>protected</code>, <code v-pre>private</code></li>
<li>非访问控制修饰符 : <code v-pre>final</code>, <code v-pre>abstract</code>, <code v-pre>static</code>, <code v-pre>synchronized</code></li>
</ul>
<h2 id="java-变量" tabindex="-1"><a class="header-anchor" href="#java-变量"><span>Java 变量</span></a></h2>
<p>Java 中主要有如下几种类型的变量</p>
<ul>
<li>局部变量</li>
<li>类变量（静态变量）</li>
<li>成员变量（非静态变量）</li>
</ul>
<h2 id="java-数组" tabindex="-1"><a class="header-anchor" href="#java-数组"><span>Java 数组</span></a></h2>
<p>数组是储存在堆上的对象，可以保存多个同类型变量。</p>
<h2 id="java-枚举" tabindex="-1"><a class="header-anchor" href="#java-枚举"><span>Java 枚举</span></a></h2>
<p>Java5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的bug。<br>
例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。</p>
<h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> FreshJuice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">   enum</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> FreshJuiceSize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">{ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">SMALL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> MEDIUM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> LARGE</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> }</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">   FreshJuiceSize</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> FreshJuiceTest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">   public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">      FreshJuice</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> juice</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FreshJuice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      juice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">size</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> FreshJuice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">FreshJuiceSize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">MEDIUM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 枚举可以单独声明或者声明在类里面。方法、变量、构造函数也可以在枚举中定义。</p>
<h2 id="java-关键字" tabindex="-1"><a class="header-anchor" href="#java-关键字"><span>Java 关键字</span></a></h2>
<p>下面列出了 Java 关键字。这些保留字不能用于常量、变量、和任何标识符的名称。</p>
<table>
<thead>
<tr>
<th>类别</th>
<th>关键字</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>访问控制</td>
<td>private</td>
<td>私有的</td>
</tr>
<tr>
<td></td>
<td>protected</td>
<td>受保护的</td>
</tr>
<tr>
<td></td>
<td>public</td>
<td>公共的</td>
</tr>
<tr>
<td></td>
<td>default</td>
<td>默认</td>
</tr>
<tr>
<td>类、方法和变量修饰符</td>
<td>abstract</td>
<td>声明抽象</td>
</tr>
<tr>
<td></td>
<td>class</td>
<td>类</td>
</tr>
<tr>
<td></td>
<td>extends</td>
<td>扩充、继承</td>
</tr>
<tr>
<td></td>
<td>final</td>
<td>最终值、不可改变的</td>
</tr>
<tr>
<td></td>
<td>implements</td>
<td>实现（接口）</td>
</tr>
<tr>
<td></td>
<td>interface</td>
<td>接口</td>
</tr>
<tr>
<td></td>
<td>native</td>
<td>本地、原生方法（非 Java 实现）</td>
</tr>
<tr>
<td></td>
<td>new</td>
<td>创建</td>
</tr>
<tr>
<td></td>
<td>static</td>
<td>静态</td>
</tr>
<tr>
<td></td>
<td>strictfp</td>
<td>严格浮点、精准浮点</td>
</tr>
<tr>
<td></td>
<td>synchronized</td>
<td>线程、同步</td>
</tr>
<tr>
<td></td>
<td>transient</td>
<td>短暂</td>
</tr>
<tr>
<td></td>
<td>volatile</td>
<td>易失</td>
</tr>
<tr>
<td>程序控制语句</td>
<td>break</td>
<td>跳出循环</td>
</tr>
<tr>
<td></td>
<td>case</td>
<td>定义一个值以供 switch 选择</td>
</tr>
<tr>
<td></td>
<td>continue</td>
<td>继续</td>
</tr>
<tr>
<td></td>
<td>do</td>
<td>运行</td>
</tr>
<tr>
<td></td>
<td>else</td>
<td>否则</td>
</tr>
<tr>
<td></td>
<td>for</td>
<td>循环</td>
</tr>
<tr>
<td></td>
<td>if</td>
<td>如果</td>
</tr>
<tr>
<td></td>
<td>instanceof</td>
<td>实例</td>
</tr>
<tr>
<td></td>
<td>return</td>
<td>返回</td>
</tr>
<tr>
<td></td>
<td>switch</td>
<td>根据值选择执行</td>
</tr>
<tr>
<td></td>
<td>while</td>
<td>循环</td>
</tr>
<tr>
<td>错误处理</td>
<td>assert</td>
<td>断言表达式是否为真</td>
</tr>
<tr>
<td></td>
<td>catch</td>
<td>捕捉异常</td>
</tr>
<tr>
<td></td>
<td>finally</td>
<td>有没有异常都执行</td>
</tr>
<tr>
<td></td>
<td>throw</td>
<td>抛出一个异常对象</td>
</tr>
<tr>
<td></td>
<td>throws</td>
<td>声明一个异常可能被抛出</td>
</tr>
<tr>
<td></td>
<td>try</td>
<td>捕获异常</td>
</tr>
<tr>
<td>包相关</td>
<td>import</td>
<td>引入</td>
</tr>
<tr>
<td></td>
<td>package</td>
<td>包</td>
</tr>
<tr>
<td>基本类型</td>
<td>boolean</td>
<td>布尔型</td>
</tr>
<tr>
<td></td>
<td>byte</td>
<td>字节型</td>
</tr>
<tr>
<td></td>
<td>char</td>
<td>字符型</td>
</tr>
<tr>
<td></td>
<td>double</td>
<td>双精度浮点</td>
</tr>
<tr>
<td></td>
<td>float</td>
<td>单精度浮点</td>
</tr>
<tr>
<td></td>
<td>int</td>
<td>整型</td>
</tr>
<tr>
<td></td>
<td>long</td>
<td>长整型</td>
</tr>
<tr>
<td></td>
<td>short</td>
<td>短整型</td>
</tr>
<tr>
<td>变量引用</td>
<td>super</td>
<td>父类、超类</td>
</tr>
<tr>
<td></td>
<td>this</td>
<td>本类</td>
</tr>
<tr>
<td></td>
<td>void</td>
<td>无返回值</td>
</tr>
<tr>
<td>保留关键字</td>
<td>goto</td>
<td>是关键字，但不能使用</td>
</tr>
<tr>
<td></td>
<td>const</td>
<td>是关键字，但不能使用</td>
</tr>
</tbody>
</table>
<p><strong>注意：</strong> Java 的 null 不是关键字，类似于 true 和 false，它是一个字面常量，不允许作为标识符使用。</p>
<p>类似于 C/C++、Java 也支持单行以及多行注释。</p>
<p>注释中的字符将被 Java 编译器忽略。</p>
<h2 id="java注释" tabindex="-1"><a class="header-anchor" href="#java注释"><span>Java注释</span></a></h2>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> HelloWorld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   /* 这是第一个Java程序</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    * 它将输出 Hello World</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    * 这是一个多行注释的示例</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">       // 这是单行注释的示例</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">       /* 这个也是单行注释的示例 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">       System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello World"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h2>
<p>在 Java 中，一个类可以由其他类派生。如果你要创建一个类，而且已经存在一个类具有你所需要的属性或方法，那么你可以将新创建的类继承该类。<br>
利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。被继承的类称为超类（<code v-pre>super class</code>），派生类称为子类（<code v-pre>sub class</code>）。</p>
<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h2>
<p>在 Java 中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色。<br>
接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类。</p>
<h2 id="java-源程序与编译型运行区别" tabindex="-1"><a class="header-anchor" href="#java-源程序与编译型运行区别"><span>Java 源程序与编译型运行区别</span></a></h2>
<figure><img src="@source/Studynotes/java/assets/20250311_141437_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


