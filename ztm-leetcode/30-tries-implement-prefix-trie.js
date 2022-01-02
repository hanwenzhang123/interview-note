//Implement Trie (Prefix Tree)
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.
There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

//implement a trie with insert, search and startsWith methods
interface Trie{
  void insert(String word);
  Boolean search (String word);
  Boolean startsWith(String prefix);
}

//Implement Prefix Trie
//Time: O(L)  - L is the lenth of the word
//Space: O(N) O(L)
class TrieNode {    //each trie node
  constructor() {
    this.end = false;   //whether the node is the end
    this.keys = {};   //keys we can extend from this node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();   //a new TrieNode
  }

  insert(word, node = this.root) {
    if(word.length === 0) { //when the word length is 0
      node.end = true;  //it would be the end of the word
      return;   //done with this iteration
    } else if (!node.keys[word[0]]) {   //the first character does not exist in the keys{}
      node.keys[word[0]] = new TrieNode();    //create a new node
      this.insert(word.substring(1), node.keys[word[0]]); //cut the first character, recursive call insert and pass down the rest of the word
    } else {
      this.insert(word.substring(1), node.keys[word[0]]); //cut the first character, recursive call insert and pass down the rest of the word
    }
  }

  search(word, node = this.root) {  //receive the word and the root node
    if(word.length === 0 && node.end) { //from the word itself we finish checking everything, return true
      return true;
    } else if(word.length === 0) {  //if failed above and the length of the word is 0, return false
      return false;
    } else if(!node.keys[word[0]]) {  //if the character does not exist, return false
      return false;
    } else {  //after all above, recursive call again until (word.length === 0 && node.end) which will be the true case
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  }

  startsWith(prefix, node = this.root) {
    if(prefix.length === 0) {   //to the length of prefix to 0, then return true
      return true;
    } else if(!node.keys.hasOwnProperty(prefix[0])) { //no such key at the current node
      return false
    } else {    //continue the recusive traversal call
      return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
    }
  }
};

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("dog")
trie.insert("app");
console.log(trie.search("app"));     // returns true
 
