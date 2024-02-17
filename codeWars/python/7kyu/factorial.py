# Your task is to write function factorial.
def factorial(n):
    # establish counter
    i = 1

    # establish product variable
    product = 1

    # loop until we reach n, including n
    while i <= n:
        # multiply 1(product), 2(product)... each time updating product. Do so until n
        product *= i
        # update i each time by 1
        i += 1
    # return product when loop is done
    return product