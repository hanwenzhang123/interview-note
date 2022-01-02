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
class TrieNode {
  constructor() {
    this.end = false;
    this.keys = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, node = this.root) {
    if(word.length === 0) {
      node.end = true;
      return;
    } else if (!node.keys[word[0]]) {
      node.keys[word[0]] = new TrieNode();
      this.insert(word.substring(1), node.keys[word[0]]);
    } else {
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  }

  search(word, node = this.root) {
    if(word.length === 0 && node.end) {
      return true;
    } else if(word.length === 0) {
      return false;
    } else if(!node.keys[word[0]]) {
      return false;
    } else {
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  }

  startsWith(prefix, node = this.root) {
    if(prefix.length === 0) {
      return true;
    } else if(!node.keys.hasOwnProperty(prefix[0])) {
      return false
    } else {
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
 
