new_list = [1, 2, 3]
result = new_list[0]  #1

if 1 in new_list: print(True)
  
#we can use a loop
for n in new_list:
  if n == 1:
    print(True)
    
    break
    

# Adding to a list
new_list.append(4)
new_list.extend([5, 6, 7])

# Inserting in a list
new_list.insert(0, 10)

# Deleting specific value in a list
new_list.remove(4)



numbers=[]    #empty 
len(numbers)  #0

numbers.extend([4, 5, 6])

numbers
[4, 5, 6]
