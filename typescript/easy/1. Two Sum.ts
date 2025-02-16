// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
    /**
     * Finds two indices in the array such that the corresponding numbers add up to the target.
     * Uses a hashmap (Map object) to achieve O(n) time complexity.
     */
    const numMap = new Map<number, number>(); // Map to store numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement that would sum to target
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i]; // Return indices if complement found
        }
        numMap.set(nums[i], i); // Store the index of the current number
    }
    return []; // No valid answer (should not happen as per problem constraints)
}

// Test Cases
function testTwoSum() {
    console.assert(JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]), "Test Case 1 Failed");
    console.assert(JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2]), "Test Case 2 Failed");
    console.assert(JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1]), "Test Case 3 Failed");
    console.log("All test cases passed!");
}

// Run tests
testTwoSum();
