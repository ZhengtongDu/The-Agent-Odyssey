# Day 2: Two Pointers And Sliding Window

返回：[LeetCode 练习合集](/leetcode/) / [Top 100 Liked 题单快照](/leetcode/top-100-liked)

## Day N

- Global Day: Day 2 / 36
- Week Day: Week 1 Day 2
- 题量：4
- LeetCode 状态：已准备，未开始

## Focus

今天从哈希表过渡到双指针和滑动窗口。重点不是记模板，而是讲清楚窗口或指针维护的含义：

```text
同向双指针：write/read 维护已处理区域
相向双指针：left/right 维护候选区间
滑动窗口：left/right 维护一个始终满足条件的窗口
排序 + 双指针：先建立单调性，再移动指针排除不可能答案
```

## Python Features

这些是今天题目可能用到的 Python 功能。算法你已经会，写代码前先把这些语法点看顺：

- `from typing import List`：LeetCode 函数签名常用类型标注。
- `len(nums)` / `len(s)`：取数组或字符串长度。
- `range(n)`：生成 `0` 到 `n - 1` 的下标。
- `enumerate(s)`：同时拿到下标和值，例如 `for right, ch in enumerate(s):`。
- `while left < right:`：相向双指针的常见循环条件。
- `dict`：记录字符最后一次出现的位置，例如 `last_pos[ch] = right`。
- `if key in dict:`：判断字典里是否存在某个 key。
- `list.sort()`：原地排序，会直接修改原列表，返回值是 `None`。
- `append`：向列表加入答案，例如 `ans.append([a, b, c])`。
- `continue`：跳过当前循环，常用于跳过重复元素。
- `break`：提前结束循环，常用于排序后发现后续不可能有答案。
- 多变量赋值：`left, right = 0, len(nums) - 1`。
- 列表原地写入：`nums[i] = value`，用于 `Move Zeroes` 这类 in-place 题。

## Task List

| # | 题目 | 难度 | 核心模式 |
| ---: | --- | --- | --- |
| 283 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | Easy | 同向双指针原地覆盖 |
| 11 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | 相向双指针排除短板 |
| 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | 滑动窗口维护无重复子串 |
| 15 | [3Sum](https://leetcode.com/problems/3sum/) | Medium | 排序后枚举 + 双指针 |

## 283. Move Zeroes

### 思路

用 `write` 表示下一个非零元素应该写入的位置。第一遍把所有非零元素按原顺序压到前面，第二遍把 `write` 之后的位置全部补成 `0`。这个写法比交换版更直观，也更适合先熟悉 Python 的原地写入。

### Python

```python
from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        write = 0

        for read in range(len(nums)):
            if nums[read] != 0:
                nums[write] = nums[read]
                write += 1

        for i in range(write, len(nums)):
            nums[i] = 0
```

### Complexity

- Time: `O(n)`
- Space: `O(1)`

### Edge Cases

- 全是 `0`：第一遍不会写入非零，第二遍保持全零。
- 没有 `0`：第一遍原样覆盖，第二遍范围为空。
- 非零元素的相对顺序必须保持不变。

## 11. Container With Most Water

### 思路

容器面积由 `width * min(height[left], height[right])` 决定。宽度每次都会变小，所以要移动较短的那一侧，尝试找到更高的边；如果移动较高的一侧，短板不变或更低，面积不可能更好。

### Python

```python
from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        best = 0

        while left < right:
            width = right - left
            h = min(height[left], height[right])
            best = max(best, width * h)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return best
```

### Complexity

- Time: `O(n)`
- Space: `O(1)`

### Edge Cases

- 最短输入长度是 `2`。
- 两边高度相等时移动任意一边都可以；代码里选择移动右边。
- 不需要记录具体下标，只返回最大面积。

## 3. Longest Substring Without Repeating Characters

### 思路

窗口 `[left, right]` 始终表示当前无重复字符的子串。`last_pos` 记录每个字符最后出现的位置。当字符 `ch` 在当前窗口里重复出现时，把 `left` 跳到上一次出现位置的后一位。

关键判断是 `last_pos[ch] >= left`。如果上一次出现位置在 `left` 左边，说明它已经不在当前窗口里，不应该影响当前窗口。

### Python

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        last_pos = {}
        left = 0
        best = 0

        for right, ch in enumerate(s):
            if ch in last_pos and last_pos[ch] >= left:
                left = last_pos[ch] + 1

            last_pos[ch] = right
            best = max(best, right - left + 1)

        return best
```

### Complexity

- Time: `O(n)`
- Space: `O(k)`，`k` 是字符集大小。

### Edge Cases

- 空字符串返回 `0`。
- 全部字符相同，例如 `"bbbb"`，答案是 `1`。
- 重复字符如果出现在窗口左边，不应该让 `left` 回退。

## 15. 3Sum

### 思路

先排序。固定第一个数 `nums[i]`，把问题转化成在右侧区间里找两个数，使三数之和为 `0`。因为数组有序，双指针可以根据当前和的大小移动：

- `total < 0`：说明和太小，移动 `left` 让和变大。
- `total > 0`：说明和太大，移动 `right` 让和变小。
- `total == 0`：记录答案，然后跳过重复的 `left` 和 `right`。

### Python

```python
from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        ans = []
        n = len(nums)

        for i in range(n - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            if nums[i] > 0:
                break

            left, right = i + 1, n - 1

            while left < right:
                total = nums[i] + nums[left] + nums[right]

                if total < 0:
                    left += 1
                elif total > 0:
                    right -= 1
                else:
                    ans.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1

                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

        return ans
```

### Complexity

- Time: `O(n^2)`，排序是 `O(n log n)`，主循环加双指针是 `O(n^2)`。
- Space: `O(1)` extra space if output array is not counted. Python sorting may use internal stack space.

### Edge Cases

- 输入长度小于 `3` 时自然返回空列表。
- 全是 `0` 时只返回一个 `[0, 0, 0]`。
- 必须跳过重复的固定点和左右指针，否则答案会重复。

## Reusable Templates

### Same Direction Pointers

```text
write = 0
for read in range(n):
    if nums[read] should be kept:
        nums[write] = nums[read]
        write += 1
```

### Opposite Direction Pointers

```text
left, right = 0, n - 1
while left < right:
    evaluate current pair
    move the side that cannot produce a better answer
```

### Sliding Window With Last Position

```text
for right, item in enumerate(data):
    if item violates current window:
        move left
    update state
    update answer
```

### Sorted Two Sum Variant

```text
sort first
fix one index
use left/right to search the remaining interval
skip duplicates after recording an answer
```

## Checklist

- 是否能说清楚每个指针的含义？
- 相向双指针中，为什么移动短板或移动某一侧是正确的？
- 滑动窗口中，`left` 有没有可能错误回退？
- `3Sum` 是否完整跳过了重复答案？
- 是否能区分 `nums.sort()` 和 `sorted(nums)`？

## Next Step

- Day 3 进入字符串和栈，重点是括号匹配、前缀扫描和中心扩展。
- 如果 Day 2 提前完成，可以提前复盘 `3Sum` 去重逻辑，或者把 `Longest Substring` 用普通 `set` 窗口重写一遍。
