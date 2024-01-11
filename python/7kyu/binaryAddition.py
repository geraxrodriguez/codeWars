# Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
# The binary number returned should be a string.

# didn't know bin() was a func till today
def add_binary(a,b):
    return bin(a + b)[2:]