# You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

# Find max(abs(length(x) − length(y)))

# If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#P: Two params, both arrays containing str's.
    # each str has only letters from a - z
#R: find biggest absolute difference between str from X and str form Y
#E: 
#P:

def mxdiflg(a1, a2):
    if not a1 or not a2:
        return -1
    
    # sort arrays, smallest to biggest
    a1 = sorted(a1, key=len) 
    a2 = sorted(a2, key=len) 
    
    # find difference bettwen a1[0] and a2[lastEl]
    diff1 = abs(len(a1[0]) - len(a2[-1]))
    # find difference between a1[lastEl] and a2[0]
    diff2 = abs(len(a1[-1]) - len(a2[0]))
    
    # return bigger number
    return diff1 if diff1 >= diff2 else diff2

#negativeIndexing
#len()
#sorted()
#if not
#python ternary