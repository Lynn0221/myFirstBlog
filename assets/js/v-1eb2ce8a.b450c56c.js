"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[693],{3525:(e,o,d)=>{d.r(o),d.d(o,{data:()=>c});const c={key:"v-1eb2ce8a",path:"/guide/javascript/Promise%E8%A7%84%E8%8C%83.html",title:"Promise A+规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"术语",slug:"术语",children:[]},{level:2,title:"要求",slug:"要求",children:[{level:3,title:"Promise 状态",slug:"promise-状态",children:[]},{level:3,title:"then 方法",slug:"then-方法",children:[]},{level:3,title:"promise 处理程序",slug:"promise-处理程序",children:[]}]}],filePathRelative:"guide/javascript/Promise规范.md",git:{updatedTime:1639474753e3,contributors:[{name:"Lynn",email:"Linmy0221@gmail.com",commits:1}]}}},8459:(e,o,d)=>{d.r(o),d.d(o,{default:()=>p});var c=d(6252);const l=(0,c._)("h1",{id:"promise-a-规范",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#promise-a-规范","aria-hidden":"true"},"#"),(0,c.Uk)(" Promise A+规范")],-1),i={href:"https://promisesaplus.com/",target:"_blank",rel:"noopener noreferrer"},r=(0,c.Uk)("原文地址 : https://promisesaplus.com/"),t={href:"https://www.cnblogs.com/lvdabao/p/5320705.html",target:"_blank",rel:"noopener noreferrer"},s=(0,c.Uk)("其他中译文 : https://www.cnblogs.com/lvdabao/p/5320705.html"),n=(0,c.uE)('<p><code>promise</code> 代表一个异步操作的最终结果。其主要方式是通过 <code>then</code> 方法。该方法注册两个回调函数，分别接收 <code>Promise</code> 的<em>成功的结果</em>或<em>失败的原因</em>作为参数。</p><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2><ul><li><code>promise</code> 是一个符合本规范的 <strong>对象</strong> 或 <strong>函数</strong></li><li><code>thenable</code> 是定义了 <code>then</code> 方法的 <strong>对象</strong> 或 <strong>函数</strong></li><li><code>value</code> 是任何<code>javascript</code>的合法值，包括<code>undefined</code>，<code>thenable</code>，<code>promise</code></li><li><code>exception</code> 是使用 <code>throw</code> 语句抛出的值</li><li><code>reason</code> 是 <code>promise</code> 失败的原因</li></ul><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><h3 id="promise-状态" tabindex="-1"><a class="header-anchor" href="#promise-状态" aria-hidden="true">#</a> Promise 状态</h3><p><strong><code>promise</code>只有三种状态：<code>pending</code>，<code>fulfilled</code>，<code>rejected</code></strong></p><ol><li>state == &quot;pending&quot; 时 可以转换成 <code>fulfilled</code> 或 <code>rejected</code> 其中任意<strong>一种</strong>状态。</li><li>state == &quot;fulfilled&quot; 时 <ul><li>状态不可变</li><li>必须有<code>value</code>，且不可改变</li></ul></li><li>state == &quot;rejected&quot; 时 <ul><li>状态不可变</li><li>必须有<code>reason</code>，且不可改变</li></ul></li></ol><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这里的不可变指的是恒等（即可用 === 判断相等），而不是意味着更深层次的不可变（指当 value 或 reason 不是基本值时，只要求其引用地址相等，但属性值可被更改）。</p></div><h3 id="then-方法" tabindex="-1"><a class="header-anchor" href="#then-方法" aria-hidden="true">#</a> then 方法</h3><p><code>promise</code> 必须提供 <code>then</code> 方法，可以接收<code>value</code> 和 <code>reason</code></p><p><code>then</code>函数 接收两个参数：<br><code>promise.then(onFulfilled, onRejected)</code></p><ol><li><code>onFulfilled</code> 和 <code>onRejected</code> 是可选参数 <ul><li>如果 <code>onFulfilled</code> 不是函数，被忽略</li><li>如果 <code>onRejected</code> 不是函数，被忽略</li></ul></li><li>如果 <code>onFulfilled</code> 是一个 <strong>函数</strong><ul><li>必须在 <code>promise</code> 状态为 <code>fulfilled</code> 时被调用，且<code>value</code> 作为 <code>onFulfilled</code> 的第一个参数</li><li>必须在 <code>promise</code> 状态为 <code>fulfilled</code> 时被调用</li><li>最多只能调用一次</li></ul></li><li>如果 <code>onRejected</code> 是一个 <strong>函数</strong><ul><li>必须在 <code>promise</code> 状态为 <code>rejected</code> 时被调用， 且 <code>reason</code> 作为 <code>onRejected</code>的第一个参数</li><li>必须在 <code>promise</code> 状态为 <code>rejected</code> 时被调用</li><li>最多只能调用一次</li></ul></li><li>在执行上下文栈中只包含平台代码之前，<code>onFulfilled</code> 或 <code>onRejected</code> 一定不能被调用</li><li><code>onFulfilled</code> 和 <code>onRejected</code> 一定被作为函数调用(没有this值)<br><em>补充说明：在非严格模式下，this 为 global；严格模式下，this 为 undefined</em></li><li><code>promise</code> 可以多次调用其 <code>then</code> 方法 <ul><li>当 <code>promise</code> 状态为 <code>fulfilled</code>，<code>onFulfilled</code> 回调必须按照 <code>then</code> 的调用顺序执行。</li><li>当 <code>promise</code> 状态为 <code>rejected</code>， <code>onRejected</code> 回调必须按照 <code>then</code> 的调用顺序执行。</li></ul></li><li><code>then</code> 的返回值必须为 <code>promise</code><code>promise2 = promise1.then(onFulfilled, onRejected)</code><ul><li>如果 <code>onFulfilled</code> 或 <code>onRejected</code> 返回一个值 <code>x</code>，则执行 promise 处理程序 <code>[[Resolve]](promise2, x)</code></li><li>如果 <code>onFulfilled</code> 或 <code>onRejected</code> 抛出一个 <code>exception</code>（假设为 <code>e</code>），<code>promise2</code> 必须捕获异常且接收<code>e</code>作为<code>reason</code></li><li>如果 <code>onFulfilled</code> 不是函数且 <code>promise1</code> 状态为 <code>fulfilled</code>，<code>promise2</code> 必须接收 <code>promise1</code> 相同的<code>value</code></li><li>如果 <code>onRejceted</code> 不是函数且 <code>promise1</code> 状态为 <code>rejected</code>，<code>promise2</code> 必须接收 <code>promise1</code> 相同的<code>reason</code></li></ul></li></ol><h3 id="promise-处理程序" tabindex="-1"><a class="header-anchor" href="#promise-处理程序" aria-hidden="true">#</a> promise 处理程序</h3><p>promise 处理程序是一个表现形式为 <code>[[Resolve]](promise, x)</code> 的抽象处理操作。如果 <code>x</code> 时 <code>thenable</code> 类型，它会尝试生成一个 <code>promise</code> 处理 <code>x</code>,否则它将直接 <code>resolve x</code></p><p>只要 <code>then</code> 方法符合Promise A+ 规范，那么对 thenables 处理就允许实现可互操作（链式调用）</p><p>执行 <code>[[Resolve]](promise, x)</code> 的步骤如下：</p><ol><li>如果<code>promise</code> 和 <code>x</code> 指向同一个引用，<code>TypeError</code>作为<code>reason</code>，执行<code>reject</code></li><li>如果<code>x</code>是<code>promise</code>实例 <ul><li>如果 <code>x</code> 是 <code>pending</code> 状态，等待知道状态变成 <code>fulfilled</code> 或者 <code>rejected</code></li><li>如果 <code>x</code> 是 <code>fulfilled</code> 状态，<code>value</code>作为参数执行 <code>resolve</code></li><li>如果 <code>x</code> 是 <code>rejected</code>状态，<code>reason</code>作为参数执行 <code>reject</code></li></ul></li><li>如果 <code>x</code> 是一个函数或者对象 <ul><li>把 <code>x.then</code> 赋值给 <code>then</code></li><li>如果在上一步捕获到异常，则执行<code>reject</code></li><li>如果 <code>then</code> 是一个函数，将 <code>then</code> 的 <code>this</code> 指向 <code>x</code>,第一个参数传 <code>resolvePromise</code> ，第二个参数传 <code>rejectPromise</code><ol><li>如果 <code>resolvePromise</code> 被调用并接收一个参数<code>y</code>，执行 <code>[[Resolve]](promise, y)</code></li><li>如果 <code>rejectPromise</code> 被调用并接收一个参数<code>r</code>，执行 <code>reject(r)</code></li><li>如果 <code>resolvePromise</code> 和 <code>rejectPromise</code> 已经被多次调用或以相同参数多次调用的话，优先第一次的调用，忽略之后的所有调用</li><li>如果<code>then</code>过程出现了异常 <ul><li>如果<code>resolvePromise</code> 和 <code>rejectPromise</code> 已经被调用，忽略异常</li><li>否则 执行 <code>reject()</code></li></ul></li></ol></li><li>如果 <code>then</code> 不是一个函数，直接 <code>resolve(x)</code></li></ul></li><li>如果 <code>x</code> 既不是对象也不是函数，直接 <code>resolve(x)</code></li></ol>',17),a={},p=(0,d(3744).Z)(a,[["render",function(e,o){const d=(0,c.up)("OutboundLink");return(0,c.wg)(),(0,c.iD)(c.HY,null,[l,(0,c._)("p",null,[(0,c._)("a",i,[r,(0,c.Wm)(d)])]),(0,c._)("p",null,[(0,c._)("a",t,[s,(0,c.Wm)(d)])]),n],64)}]])},3744:(e,o)=>{o.Z=(e,o)=>{const d=e.__vccOpts||e;for(const[e,c]of o)d[e]=c;return d}}}]);