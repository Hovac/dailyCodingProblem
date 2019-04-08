/*
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
For example, given the string "([])[]({})", you should return true.
Given the string "([)]" or "((()", you should return false.
*/

var goodBr = "([])[]({})";
var badBr = "([)]";

var roundO = "("; //40
var squareO = "["; //91
var curlyO = "{"; //123

var roundC = ")"; // 41
var squareC = "]"; // 93
var curlyC = "}"; // 125

var arr = []

arr = goodBr.split('');

//console.log(goodBr.charCodeAt(5));
//var temp = String.fromCharCode(40, 41);


//if there is closed bracket, after an open bracket, that IS NOT the same type as the open bracket, then it is surely false.
//otherwise if there is another open bracket, check if n+1+1 is closed of the same type, etc.

//other approach is that we count how many open brackets there are after initial open bracket, then we check if there is closed bracket of the same 
//type after 2*counter and then recursively call that function until there is only closed brackets left