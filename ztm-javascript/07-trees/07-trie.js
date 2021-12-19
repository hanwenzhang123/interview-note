A Trie is a specialized tree used in searching most often with text
in most cases, it can outperform binary search trees, hash tables and most other data structures depends on the type of the search
A Trie is also called Prefix Tree

Tries allow you to know if a word or part of a word exists in a body of text.

Trie always has an empty root node which is the starting point; from there, letters are added.
It is not the binary tree, you can have multiple children; most likely the most would be 26 children due to there are 26 alphabet

efficient in solving problems, specific strength
//like auto completion, when you search on Google, it knows what you are searching for and try to complete the word for you
//for searching a word on a dictionary, providing auto-suggestions on search engines
//when I type A, it automatically gives options like are and as, I knwo immediately that all the children are related to it

Benefit
- search
- speed

Big O
- O(length of the word)
//we are not going through every single node; instead, we find the length of the word
//so the beginning of a trie is O of length, that is the length of the word
  
Because we use prefixes, we do not have to store it multiple times, 
  it is stored in one location and you have children linking to it because of these prefixes.
You save a lot of space because you don not have to store the word
 
