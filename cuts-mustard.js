/*
 * @name cuts-mustard.js
 * @version 1.0.0
 * @author David Hund <http://valuedstandards.com> @valuedstandards
 * @license Whatever 
 * 
 * Does the current browser 'cut the mustard'?
 * -------------------------------------------
 * 
 * 'Cutting the mustard' is a phrase coined by the 
 * Developers of BBC news sites. It is meant as a 
 * tool to differentiate between user-agents (UA) 
 * that do- and those that do not, support certain
 * JavaScript features.
 *
 * This allows developers to progressively enhance
 * a website by serving extra functionality/scripts
 * to UA's that can handle it, while leaving UA's
 * that can not with a basic experience.
 *
 * Check cutsMustard() as soon as possible
 * preferably in the <head> and load conditional
 * JS/serve conditional CSS.
 *
 * NOTE:
 * What features you will test on depends entirely
 * on your use-case and audience. Do not blindly
 * copy a set of tests but choose feature-tests
 * you require!
 * Use e.g. http://caniuse.com/ to find out
 *
 * Inspiration:
 * - http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 * - https://gist.github.com/davidhund/7412624
 * - https://gist.github.com/Integralist/7702823
 * - https://dev.opera.com/articles/opera-mini-and-javascript/
 *
 * TODO: experiment with detection 'proxy based' browsers with:
 * 
 *   !/S40[\w]{3,5}Browser|Opera\sMini\//i.test(navigator.userAgent)
 *
 * or
 *
 *   window.operaMini
 *   
 * .. However, since Opera Mini does not support localStorage, and we
 * include it here, the nasty UA-Sniffing is not needed, it seems.
 * What other proxy-based browsers do I miss?
 * 
 * @returns {boolean} Returns whether the current UA 'cuts the mustard'
 **/

function cutsMustard() {
   // Currently IE9+ (IE8 is old y'all)
   // :1) IE8+ (CSS2 only) +OperaMini. Saves a lot of $('*') :-) 
   // :2) W3C (+OperaMini): IE8 breaks on this (uses attachEvent)
   // :3) Handy for saving e.g. custom fonts -css. (IE8+ support, but no OperaMini!)
   // :4) IE9+ (breaks IE8)
   // 
   // If you can you could even leave IE9 (and Android2.3-) behind and feature test classList:
   //   'classList' in document.createElement('a')
   return ( 'querySelector'    in document && 
            'addEventListener' in window   && 
            'localStorage'     in window   && 
            !!Array.prototype.forEach );
}
