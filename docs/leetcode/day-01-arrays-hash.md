# Day 1: Arrays And Hash

返回：[LeetCode 练习合集](/leetcode/) / [Top 100 Liked 题单快照](/leetcode/top-100-liked)

## Day N

- Global Day: Day 1 / 36
- Week Day: Week 1 Day 1
- 题量：4

## Focus

今天的目标是建立数组与哈希表的基本优化直觉：

```text
暴力枚举 -> 发现重复查找或重复扫描 -> 用哈希表/集合/前缀状态换时间
```

## Task List

| # | 题目 | 难度 | 核心模式 |
| ---: | --- | --- | --- |
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | 哈希表记录已见元素 |
| 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | 规范化 key 分组 |
| 128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | 哈希集合判断序列起点 |
| 238 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | Medium | 前后缀状态 |

## 1. Two Sum

### 思路

暴力做法是枚举两个下标，复杂度是 `O(n^2)`。优化点是：遍历到 `nums[i]` 时，只需要知道 `target - nums[i]` 是否在左侧出现过。哈希表存储 `value -> index`，先查 complement，再写入当前元素，避免同一个元素被重复使用。

### Python

```python
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}

        for i, x in enumerate(nums):
            need = target - x
            if need in seen:
                return [seen[need], i]
            seen[x] = i

        return []
```

### Complexity

- Time: `O(n)`
- Space: `O(n)`

### Edge Cases

- 有重复元素，例如 `[3, 3]` 和 `target = 6`。
- 有负数和零。
- LeetCode 原题保证有解；如果无解，上面的实现返回空列表。

## 49. Group Anagrams

### 思路

异位词的本质是字符频次相同。可以用排序后的字符串作为 key，也可以用 26 维计数 tuple 作为 key。排序版更短；计数版在字符串很长时避免 `O(k log k)` 排序。

### Python

```python
from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        for s in strs:
            count = [0] * 26
            for ch in s:
                count[ord(ch) - ord("a")] += 1
            groups[tuple(count)].append(s)

        return list(groups.values())
```

### Complexity

- Time: `O(n * k)`，`n` 是字符串数量，`k` 是单个字符串平均长度。
- Space: `O(n * k)`，输出分组本身占主要空间。

### Edge Cases

- 空字符串 `""` 的 key 是全 0 计数。
- 输入只有一个字符串时，仍返回嵌套列表。
- 如果字符集不是小写字母，应改用排序 key 或通用 Counter key。

## 128. Longest Consecutive Sequence

### 思路

先把所有数字放入集合。一个数字 `x` 只有在 `x - 1` 不存在时，才是连续序列的起点。只从起点向右扩展，可以保证每个数字最多被访问常数次。

### Python

```python
from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        values = set(nums)
        best = 0

        for x in values:
            if x - 1 in values:
                continue

            length = 1
            cur = x
            while cur + 1 in values:
                cur += 1
                length += 1

            best = max(best, length)

        return best
```

### Complexity

- Time: `O(n)`
- Space: `O(n)`

### Edge Cases

- 空数组返回 `0`。
- 重复数字通过 `set` 去重，不影响最长连续长度。
- 负数也适用，因为只依赖 `x - 1` 和 `x + 1`。

## 238. Product of Array Except Self

### 思路

不能使用除法时，用两次扫描维护前缀乘积和后缀乘积。第一遍让 `ans[i]` 等于 `i` 左侧所有元素乘积；第二遍从右往左乘上 `i` 右侧所有元素乘积。

### Python

```python
from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [1] * n

        prefix = 1
        for i in range(n):
            ans[i] = prefix
            prefix *= nums[i]

        suffix = 1
        for i in range(n - 1, -1, -1):
            ans[i] *= suffix
            suffix *= nums[i]

        return ans
```

### Complexity

- Time: `O(n)`
- Space: `O(1)` extra space if output array不计入额外空间。

### Edge Cases

- 一个零：只有零所在位置会得到其他元素乘积，其余位置为 `0`。
- 多个零：所有位置都是 `0`。
- 负数不需要特殊处理，乘积符号自然保留。

## Reusable Templates

### Hash Lookup

```text
for item in data:
    if needed_state in seen:
        return answer
    seen[current_state] = position_or_count
```

### Set Start Point

```text
for x in values:
    if previous_state_exists:
        continue
    expand_from_x_once
```

### Prefix And Suffix

```text
left_state -> answer[i] -> combine right_state
```

## Checklist

- 是否写清楚哈希表或集合里存的是什么？
- 是否说明了为什么不需要重复扫描？
- 是否考虑了重复元素、空数组、负数和零？
- 是否能把 Two Sum、Longest Consecutive、Product Except Self 的状态定义分别讲清楚？

## Next Step

- Day 2 衔接双指针和滑动窗口。
- 如果今天提前完成，可以从 Day 2 抽 `Move Zeroes` 或 `Container With Most Water` 加入练习。
