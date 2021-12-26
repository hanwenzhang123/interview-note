//Google Coding Interview Question and Answer: First Recurring Character
"ABCA" => "A"
"BCABA" => "B"
"ABC" => null

function firstRecurring(s){
  let count = {}
  let array = s.split("")
  for (let char of array){ 
    if (char in count) return char;
    count[char] = 1;
  }
  return null;
}


//Amazon Coding Interview Question - Recursive Staircase Problem
num_ways(N)
//n means the staircase, you can only take 1 or 2 steps each time
num_ways(N, X)
//x means how many steps you allow to take to go to the staircase N

N = 1 - 1 - {[0, 1]}
N = 2 - 2 - {[0, 1, 2], [0, 2]}
N = 3 - 3 - {[0, 1, 2, 3], [0, 1, 3], [0, 2, 3]}
N = 4 - 5 - {[0, 1, 2, 3, 4], [0, 1, 2, 4], [0, 1, 3, 4], [0, 2, 3, 4], [0, 2, 4]}

num_ways(n) = num_way(n-1) + num_way(n-2)
num_ways(3) = num_way(2) + num_way(1)

//num_ways(N)
function num_ways(n){
  if(n == 0 || n == 1) {
    return 1;
  } else {
    return num_ways(n-1) + num_ways(n-2)
  }
}

//dynamic programming - a bottom-up approach
def num_ways_bottom_up(n):
  if n == 0 or n == 1: return 1
  nums = new int[n+1]
  nums[0] = 1; nums[1] = 1
  for i from 2 upto n:
    nums[i] = nums[i-1] + nums[i-2]
  return nums[n];

//num_ways(N, X)
function num_ways_X(n){
  if(n == 0) return 1;
  let total = 0;
  let x = [1, 3, 5]
  for (let i of x) {
    if (n-i >= 0) {
      total += num_ways_X(n - i)
    }
  }
  return total;
}

//dynamic programming - a bottom-up approach
def num_ways_X_bottom_up(n):
  if n == 0: return 1
  nums = new int[n+1]
  nums[0] = 1
  for i from 1 upto n:
    total = 0
    for each j in {1, 3, 5}:
      if i - j >= 0:
        total += nums[i - j]
    nums[i] = total
  return nums[n];


//Facebook Coding Interview Question - How Many Ways to Decode This Message?
"a" = 1
"b" = 2
"c" = 3
...
"z" = 26
"ab" = "12"
"12" = "l"
"3" -> "c" num_ways("3") = 1
"" -> "" num_ways("") = 1
"12345" -> "a" + decode("2345") or "l" + decode("345")
"27345" -> "b" + decode("7345")
num_ways("27345") = num_ways("7345")
num_ways("011") = 0

def helper(data, k):
  if k == 0: 
    return 1
  s = data.length - k
  if data[s] == '0':
    return 0;
  result = helper(data, k - 1)
  if k >= 2 and int(data[s:s+2]) <= 26:
    result += helper(data, k - 2)
  return result

def num_ways(data):
  return helper(data, data.length)

 //dynamic programming - O(n)
def helper(data, k, memo):
  if k == 0: 
    return 1
  s = data.length - k
  if data[s] == '0':
    return 0;
  if memo[k] != null:
    return memo[k]
  result = helper(data, k - 1, memo)
  if k >= 2 and int(data[s:s+2]) <= 26:
    result += helper(data, k - 2, memo)
  memo[k] = result
  return result

def num_ways(data):
  memo = new int[data.length + 1]
  return helper(data, data.length, memo)
 
  
  
  
