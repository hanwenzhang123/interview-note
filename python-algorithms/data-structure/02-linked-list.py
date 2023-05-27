class Node:
  """
  An object for storing a single node of a linked list.
  Models two attributes - data and the link to the next node in the list
  """
  
  data = None   #instance variable assigned none initially that holds the data we are storing
  next_node = None    #point the next node in the list
  
  def __init__(self, data):
    self.data = data
    
  def __repr__(self):
    return "<Node data: %s>" % self.data
  
  
#console
  N1 = Node(10)
  N1   #Node data: 10
  N2 = Node(20)
  N1.next_node = N2
  N1.next_node
  N2   #Node data: 20
  
    
class LinkedList:
  """
  Singly linked list
  """ #head = None
  
  def __init__(self):
    self.head = None
    
  def is_empty(self):
    return self.head == None
  
  def size(self):
    """
    Returns the number of nodes in the list
    Takes O(n) time
    """     #call each node until we reach to the tail
    
    current = self.head
    count = 0
    
    while current:
      count += 1
      current = current.next_node
      
    return count
  
  
#console
l = LinkedLink()
N1 = Node(10)
l.head = N1
l.size()  #1
  
  
  def add(self, data):    #adding nodes to a linked list
    """
    Adds new Node containing data at head of the list
    Takes O(1) time 
    """   #best case scenario
    
    new_node = Node(data)
    new_node.next_node = self.head
    self.head = new_node
    self.head = new_node
 

#console
l = LinkedLink()
l.add(1)
l.size()  #1
l.add(2)
l.add(3)
l.size()  #3
l
# <__main__.linkedList object at 0x7bbc315c780>


  def search(self, key):    #Implementing Search
    """
    Search for the first node containing data that matches the key
    Return the node or `None` if not found
    
    Takes O(n) time   it runs linear time
    """
    current = =self.head
    
    while current:
      if current.data == key:
        return current
      else:
        current = current.next_node
    return None
     
#console
l = LinkedLink()
l.add(10)
l.add(2)
l.add(45)
l.add(15)
n = l.search(45)
n   #<Node data: 45>



  def insert(self, data, index):    #insert data, index position
    """
    Inserts a new Node containing data at index position
    Insertion takes O(1) time but finding the node at the 
    insertion point takes O(n) time.
    
    Takes overall O(n) time   //linear time
    """
    
    if index == 0:
      self.add(data)
      
    if index > 0:
      new = Node(data)
      
      position = index
      current = self.head   #Every time we call current.next_node, meaning we're moving to the next node in the list, we'll decrease the value of position by 1.
      
      while position > 1:
        current = node.next_node    #reassign the current node
        position -= 1 
        
      prev_node = current
      next_node = current.next_node
      
      prev_node.next_node = new
      new.next_node = next_node
      
      
      
   def remove(self, key):   #remove a node
    """
    Removes Node containing data that matches the key
    Returns the node or None if key doesn't exist
    Takes O(n) time
    """
    
    current = self.head
    previous = None
    found = False
    
    while current and not found:    #while loop contains 2 condition, and means both are true
      if current.data == key and current is self.head:
        found = True
        self.head = current.next_node
      elif current.data == key:
        found = True
        previous.next_node = current.next_node
      else:
        previous = current
        current = current.next_node
        
    return current     
  
      
      
  def __repr__(self):
    """
    Return a string representation of the list
    Takes O(n) time
    """
    
    nodes = []
    current = self.head
    
    while current:    #as long as not None
      if current is self.head:
        nodes.append("[Head: %s]" % current.data)
      elif current.next_node is None:
        nodes.append("[Tail: %s]" % current.data)
      else:
        nodes.append("[%s]" % current.data)
      
      current = current.next_node
    return '-> '.join(nodes)
  
  
 #console
l = LinkedLink()
l.add(1)
l.add(2)
l.add(3)
l
#[Head: 3] -> [2] -> [Tail: 1] 
  
