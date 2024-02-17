def even_or_odd(number):
  if number % 2 == 0:
    return "Even"
  else:
    return "Odd"

# else is unnecessary
def oddOrEven(number):
  if number % 2 == 0:
    return "Even"
  return "Odd"

# not mine but dope
# [number % 2] will evaluate to either 0 or 1
# will index into our list accordingly
def evenOrOdd(number):
  return ["Even", "Odd"][number % 2]