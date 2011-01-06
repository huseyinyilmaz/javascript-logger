jsLogger - Javascript logger object

* About jsLogger
** jsLogger is a javascript logger object that uses development console to log messages. 
* How to use it
** enable logger
   logger.enableLog = true;
   if you don't enable it it won't log anything.
** At start of a function start log for current function
   logger.startLog("FunctionName");
** At the end of e function finich log for current function
   logger.endLog();
** In this function enter your log messages
   logger.log("Some message");
   you can also enter object to log
   logger.log(myObject);
   Sample code can be seen in sample.html
* Requirements
  Firefox or Chrome browser