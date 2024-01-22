# We need a function that can transform a number (integer) into a string.
def number_to_string(num):
    return f'{num}'


# When a number (or even string, list, tuple, object etc.) isn't passed into the function at all. But it'll never happen for this kata so it is unnecessary for us.
def number_to_string(num):
    try:
        return str(num)
    except:
        return None