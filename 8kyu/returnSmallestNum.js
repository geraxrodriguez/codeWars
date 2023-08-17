// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a, b) => a - b)[0]
    }
}