/**
 * Given an integer array @param nums, @return {true} if any value appears at least twice in the array, and @returns {false} if every element is distinct.
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};
