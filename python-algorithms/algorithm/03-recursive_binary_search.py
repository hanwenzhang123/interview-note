def recursive_binary_search(list, target):  # one that calls itself until it has an answer, return boolean value
  if len(list) == 0:       # if it is empty
    return False
  else:
    midpoint = (len(list))//2
    
    if list[midpoint] == target:
      return True
    else:   #calls itself
      if list[midpoint] < target:
        return recursive_binary_search(list[midpoint+1:], target)   #slice[], start from midpoint+1 then go all the way to the end as :
      else:         #midpoint is greater than the target
        return recursive_binary_search(list[:midpoint], target) #start at the beginning go all the way to the midpoint

def verify(result):
  print("Target found: ", result)
  
numbers = [1,2,3,4,5,6,7,8]
result = recursive_binary_search(numbers, 12)
verify(result)  #false

result = result = recursive_binary_search(numbers, 6)
verify(result)  #true

#recursive depth: the number of times that the recursive function calls itself
        
        
        
        
