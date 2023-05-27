def merge_sort(list):
  """
  Sorts a list in ascending order
  Returns a new sorted list
  
  3 main steps
  Divide: Find the midpoint of the list and divide into sublists
  Conquer: Recursively sort the sublists created in previous step
  Combine: Merge the sorted sublists created in previous step
  
  Takes O(n log n) time    (Overall)
  
  Take left side and sort then right side and sort until n/2
  linear space complexity
  """
  
  if len(list) <= 1:      #starting condition
    return list
  
  left_half, right_half = split(list)
  left = merge_sort(left_half)
  right = merge_sort(right_half)
  
  return merge(left, right)

  
  
  
def split(list):    #Splitting Into Sublists
  """
  Divide the unsorted list at midpoint into sublists
  Returns two sublists - left and right
  split to sublists
  
  Takes overall O(log n) time
  """
  
  mid = len(list)//2
  left = list[:mid]   #without including the midpoint
  right = list[mid:]
  
  return left, right
  
  
def merge(left, right):
  """
  Merges two lists, sorting them in the process
  Returns a new merged list
  
  Runs in overall O(n) time (linear steps)
  """
  
  l = []    #starting point to compare
  i = 0
  j = 0
  
  while i < len(left) and j < len(right): 
    if left[i] < right[j]:
      l.append(left[i])
      i+=1
    else:
      l.append(right[j])
      j+=1
      
  while i < len(left):  #the right is shorter
    l.append(left[i])
    i+=1
    
  while j < len(right): #the left is shorter
    l.append(right[j])
    j+=1
    
  return l  #have to return the function otherwise error occurs


def verify_sorted(list):
  n = len(list)   #check the length
  
  if n == 0 or n == 1:
    return True
  
  return list[0] < list[1] and verify_sorted(list[1:])   #recrusive function, from position one then going to the end

alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
l = merge_sort(alist)
print(verify_sorted(alist))
print(verify_sorted(l))
  
  
  
'''
  the implementation of split take O(kn log n)    (more expensive)
  
  n represents the number of operations to perform over the collection, while k represents the subset of n that is used for the slice operation. 
  k could be anywhere from 0 to n, depending how much of the list we are copying during each slice operation. 
  We use a different letter to represent this operation because we know it's smaller than n but still affects the overall runtime complexity.
'''
  
