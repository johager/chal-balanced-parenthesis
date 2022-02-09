/*
Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

>>> has_balanced_parens("()")
// true

>>> has_balanced_parens("(Oh Noes!)(")
// false

>>> has_balanced_parens("((There's a bonus open paren here.)")
// false

>>> has_balanced_parens(")")
// false

>>> has_balanced_parens("(")
// false

>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:

>>> has_balanced_parens("Hey...there are no parens here!")
// true
*/

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function hasBalancedParens(str) {
    // balanced implies open has to happen before a close
    let count = 0
    for (let char of str) {
        if (char === '(') {
            count++
        } else if (char === ')') {
            count--
            if (count < 0) {
                return false
            }
        }
    }
    return count === 0
}

function testHasBalancedParens(str, exp) {
    const res = hasBalancedParens(str)
    console.log("str:", str, "  res:", res, "  exp:", exp, "  passed:", res === exp)
}

testHasBalancedParens(`()`,true)
testHasBalancedParens(`(Oh Noes!)(`,false)
testHasBalancedParens(`((There's a bonus open paren here.)`,false)
testHasBalancedParens(`)`,false)
testHasBalancedParens(`(`,false)
testHasBalancedParens(`)(`,false)
testHasBalancedParens(`)(`,true)
testHasBalancedParens(`(This has (too many closes.) ) )`,false)
testHasBalancedParens(`Hey...there are no parens here!`,true)

testHasBalancedParens(sample1,false)
testHasBalancedParens(sample2,true)
testHasBalancedParens(sample3,false)
testHasBalancedParens(sample4,true)
