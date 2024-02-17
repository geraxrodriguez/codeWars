# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

# not mine
def make_negative( number ):
    return -abs(number)
# not mine
def make_negative( number ):
    return -number if number>0 else number
# I guess abs() is an expensive function

# this one more similar to mine, no need to multiply by -1, just stick negative sign in front of number variable
def make_negative( number ):
    return -number if number>0 else number

# mine, learned how to make this a one linger
def make_negative( number ):
    return number*(-1) if number > 0 else number