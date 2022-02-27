function getMinMax(str) {
  let nums = str.split(' ').map(item => +item).filter(item => !isNaN(item));
  let min = nums[0];
  let max = nums[0];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < min) {
      min = nums[i];
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }
  return {min, max}
}
