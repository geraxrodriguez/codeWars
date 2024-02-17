// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return 
// the middle 2 characters.

function getMiddle(s)
{
  let half = s.length / 2
  if (s.length % 2 == 0)
    {
      return s.slice( half-1, half+1 )
    }
  else
    {
      half = Math.floor(half)
      return s.slice( half, half+1 )
    }
}

// could have used ternary, would've been better