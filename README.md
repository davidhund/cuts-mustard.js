# Cutting Mustard

`cuts-mustard.js` is a very simple feature-detection script based on the BBC dev team's work.

'Cutting the mustard' is a phrase coined by the [Developers of BBC news sites](http://responsivenews.co.uk/). It is meant as a tool to differentiate between user-agents (UA) that do- and those that do not, support certain JavaScript features.

This allows developers to progressively enhance a website by serving extra functionality/scripts to UA's that can handle it, while leaving UA's that can not with a basic experience.

Check `cutsMustard()` as soon as possible preferably in the `<head>` and load conditional JS or serve conditional CSS based on e.g. a classname

## NOTE:

What features you will test on depends entirely on your use-case and audience. Do not blindly copy a set of tests but choose feature-tests you require!

## Inspiration:

- http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
- https://gist.github.com/davidhund/7412624
- https://gist.github.com/Integralist/7702823
- https://dev.opera.com/articles/opera-mini-and-javascript/

## TODO: 

Experiment with detection 'proxy based' browsers with:

````
!/S40[\w]{3,5}Browser|Opera\sMini\//i.test(navigator.userAgent)
````

or `window.operaMini`
  
.. However, since Opera Mini does not support localStorage, and we include it here, the nasty UA-Sniffing is not needed, it seems. _What other proxy-based browsers do I miss?_

Let me know what could be better.
