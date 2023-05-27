from linked_list import LinkedList    #refers at the bottom
 
def merge_sort(linked_list):    #the merge function
  """
  Sorts a linked list in ascending order
  - Recursively divide the linked list into sublists containing a single node
  - Repeatedly merge the sublists to produce sorted sublists until one remains
  
  Returns a sorted linked list
 
  Runs in O(kn log n)
  """
  #stopping condition
  if linked_list.size() == 1:   #  identical to the array version
    return linked_list
  elif linked_list.head is None:
    return linked_list
  
  left_half, right_half = split(linked_list)
  left = merge_sort(left_half)
  right = merge_sort(right_half)
  
  return merge(left, right)
  
  
def split(linked_list):   # divide step, or rather an implementation of the split function that works on linked lists.
  """
  Divide the unsorted list at midpoint into sublists
  Takes O(k log n) time
  """
  
  if linked_list == None or linked_list.head == None:   # added def node_at_index(self, index)
    left_half = linked_list
    right_half = None
    
    return left_half, right_half
  else:
    size = linked_list.size()
    mid = size//2
    
    mid_node = linked_list.node_at_index(mid-1)
  
    left_half = linked_list
    right_half = LinkedList()
    right_half.head = mid_node.next_node
    mid_node.next_node = None
    
    return left_half, right_half
  
  
def merge(left, right):   #sorting and merging smaller linked lists.  - the conquer step
  """
  Merges two linked lists, sorting by data in nodes
  Returns a new, merged list
  Runs in O(n) time
  """
  
  # Create a new linked list that contains nodes from
  # merging left and right
  merged = LinkedList()
  
  # Add a fake head that is discarded later
  merged.add(0)
  
  # Set current to the head of the linked list
  current = merged.head
  
  #Obtain head nodes for left and right linked lists
  left_head = left.head
  right_head = right.head
  
  # Iterate over left and right until we reach the tail node
  # of either
  while left_head or right_head:
    # If the head node of left is None, we're past the tail
    # Add the node from right to merged linked list
    if left_head is None:
      current.next_node = right_head
      # Call next on right to set loop condition to False
      right_head = right_head.next_node
    # If the head node of right is None, we're past the tail
    # Add the tail node from left to merged linked list
    elif right_head is None:
      current.next_node = left_head
      # Call next on left to set loop condition to False
      left_head = left_head.next_node
    else:
      # Not at either tail node
      # Obtain node data to perform comparison operations
      left_data = left_head.data
      right_data = right_head.data
      # If data on left is less than right, set current to left node
      if left_data < right_data:
        current.next_node = left_head
        # Move left head to next node
        left_head = left_head.next_node
      # If data on left is greater than right, set current to right node
      else:
        current.next_node = right_head
        # Move right head to next node
        right_head = right_head.next_node
    # Move current to next node
    current = current.next_node
    
  # Discard fake head and set first merged node as head
  head = merged.head.next_node
  merged.head = head
  
  return merged



#evaluating the runtime
l = LinkedList()
l.add(10)
l.add(2)
l.add(44)
l.add(15)
l.add(200)

print(l)
sorted_linked_list = merge_sort(l)
print(sorted_linked_list)




# Linked-list
class Node:
  """
  An object for storing a single node of a linked list.
  Models two attributes - data and the link to the next node in the list
  """
  
  data = None
  next_node = None
  
  def __init__(self, data):
    self.data = data
    
  def __repr__(self):
    return "<Node data: %s>" % self.data
    
class LinkedList:
  """
  Singly linked list
  """
  
  def __init__(self):
    self.head = None
    
  def is_empty(self):
    return self.head == None
  
  def size(self):
    """
    Returns the number of nodes in the list
    Takes O(n) time
    """
    
    current = self.head
    count = 0
    
    while current:
      count += 1
      current = current.next_node
      
    return count
  
  def add(self, data):
    """
    Adds new Node containing data at head of the list
    Takes O(1) time
    """
    
    new_node = Node(data)
    new_node.next_node = self.head
    self.head = new_node
    
  def search(self, key):
    """
    Search for the first node containing data that matches the key
    Return the node or `None` if not found
    
    Takes O(n) time
    """
    
    current = self.head
    
    while current:
      if current.data == key:
        return current
      else:
        current = current.next_node
    return None
  
  def insert(self, data, index):
    """
    Inserts a new Node containing data at index position
    Insertion takes O(1) time but finding the node at the 
    insertion point takes O(n) time.
    
    Takes overall O(n) time
    """
    
    if index == 0:
      self.add(data)
      
    if index > 0:
      new = Node(data)
      
      position = index
      current = self.head
      
      while position > 1:
        current = node.next_node
        position -= 1
        
      prev_node = current
      next_node = current.next_node
      
      prev_node.next_node = new
      new.next_node = next_node
      
  def remove(self, key):
    """
    Removes Node containing data that matches the key
    Returns the node or None if key doesn't exist
    Takes O(n) time
    """
    
    current = self.head
    previous = None
    found = False
    
    while current and not found:
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
  
  
  def node_at_index(self, index):     #new function added here
    if index == 0:
      return self.head
    else:
      current = self.head
      position = 0    #where we are in the list
      
      while position < index:
        current = current.next_node
        position += 1
        
      return current
      
  def __repr__(self):
    """
    Return a string representation of the list
    Takes O(n) time
    """
    
    nodes = []
    current = self.head
    
    while current:
      if current is self.head:
        nodes.append("[Head: %s]" % current.data)
      elif current.next_node is None:
        nodes.append("[Tail: %s]" % current.data)
      else:
        nodes.append("[%s]" % current.data)
      
      current = current.next_node
    return '-> '.join(nodes)
  
  
