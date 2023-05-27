like domino that one card falls, all the other cards fall as well. 
recursive function needs a recursive case that causes it to call itself, and it needs to eventually reach a base case that causes the recursion to stop.



# The function takes a list of the numbers we want to add.
def sum(numbers):
  # The total starts at zero.
  total = 0
  # We loop over every number contained in the list.
  for number in numbers:
    # And we add the current number to the total.
    total += number
  # Once we're done looping, we return the accumulated total.
  return total

# If we call the sum function with a list of numbers, it will return the total.
# When we run this program it will print out that returned value, "19".
print(sum([1, 2, 7, 9]))
#not the effcient way to add all the number together



slice - slice a portion items in the list
first argument - starting point
second argument - up to but not including 

numbers = [0, 1, 2, 3, 4]
numbers[1]  #1
numbers[1:4]  #[1, 2, 3]   the second up to (but not including) the fifth items from the list, that is, it will get us the second through the fourth items.
numbers[1:] #[1, 2, 3, 4]   give us items from the second index up through the end of the list.
numbers[2:] #[2, 3, 4]    give us items from the third index up through the end of the list.
numbers[:3] #[0, 1, 2]  everything from the beginning of the list up to (but not including) the third index.

one_item = [0]  
one_item[1:]  #[] worth noting that if you take a list with only one item, and you try to get everything from the (nonexistent) second item onwards, the result will be an empty list.



#recursion

#wrong
# It will take the list of numbers to add, just like before.
def sum(numbers):
  # Now here's the recursive part. We'll have the "sum" function call itself.
  # We use slice notation to pass the entire list of numbers EXCEPT the
  # first one.
  remaining_sum = sum(numbers[1:])
  # Then we add the first number in the list to the result of the recursive
  # function call, and return the result.
  return numbers[0] + remaining_sum

print(sum([1, 2, 7, 9]))    #Recursion Error - maximum recursion depth exceeded, it resulted due to the infinite loop


#correct
def sum(numbers):
  # Python treats a list that contains one or more values as a "true" value,
  # and it treats a list containing _no_ values as a "false" value.
  # So we'll add an "if" statement that says if there are no numbers in
  # the list, we should return a sum of 0. That way, the function will exit
  # immediately, without making any further recursive calls to itself.
  if not numbers:
    return 0
  # We leave the code for the recursive case unchanged. If there are still
  # numbers in the list, the function will call itself with any numbers
  # after the first, then add the return value to the first number in the
  # list.
  remaining_sum = sum(numbers[1:])
  return numbers[0] + remaining_sum

print(sum([1, 2, 7, 9]))    #19


$ python recursion.py
Calling sum([2, 7, 9])
Calling sum([7, 9])
Calling sum([9])
Calling sum([])
Call to sum([9]) returning 9 + 0
Call to sum([7, 9]) returning 7 + 9
Call to sum([2, 7, 9]) returning 2 + 16
Call to sum([1, 2, 7, 9]) returning 1 + 18
19
