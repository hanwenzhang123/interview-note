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
