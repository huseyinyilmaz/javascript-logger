jsLogger - Javascript logger object
-----------------------------------

* About jsLogger
** jsLogger is a javascript logger object that uses development console to log messages. 
* How to use it
** enable logger
<pre><code>
   logger.enableLog = true;
   if you don't enable it it won't log anything.
</code></pre>
** At start of a function start log for current function
<pre><code>
   logger.startLog("FunctionName");
</code></pre>
** At the end of e function finich log for current function
<pre><code>
   logger.endLog();
</code></pre>
** In this function enter your log messages
<pre><code>
   logger.log("Some message");
</code></pre>
   you can also enter object to log
<pre><code>
   logger.log(myObject);
</code></pre>
   Sample code can be seen in sample.html
* Requirements
  Firefox or Chrome browser