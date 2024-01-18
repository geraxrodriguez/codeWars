# Complete the solution so that it reverses the string passed into it.

# not mine
def solution(string):
    return string[::-1]
    #[start : end : step ]
    # it has a negative step parameter. The absence of the start and stop parameters means the complete array. The negative step parameter means that data is taken in reverse order, from the end to the start."

def solution(string):
    list = [*string] # turn list to array
    list.reverse()   # reverse array
    list = ''.join(list) # turn back into str
    return list

print(solution('word')) # 'drow'


# convert 'word' => ['w', 'o', 'r', 'd']
[*string] #unpack method
[c for c in string] #list comprehension