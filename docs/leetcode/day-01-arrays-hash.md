# Day 1: Arrays And Hash

## Day N

- Global Day: Day 1 / 36
- Week Day: Week 1 Day 1

## Focus

今天的 LeetCode 目标不是刷很多题，而是建立一个基础模式：

```text
暴力枚举 -> 发现重复计算 -> 用哈希表换时间
```

## Representative Patterns

### Two Sum

- 暴力解：双重循环，时间复杂度 `O(n^2)`
- 优化解：边遍历边查询哈希表，时间复杂度 `O(n)`
- 关键点：先查 complement，再写入当前元素，避免同一元素重复使用

### Valid Anagram

- 思路：统计字符频次并比较
- 关键点：注意字符集范围，如果是 ASCII/小写字母可用数组，否则用哈希表更通用

## Checklist

- 是否先明确了输入约束和返回内容？
- 是否写清楚了哈希表里存的是什么？
- 是否说明了为什么复杂度从 `O(n^2)` 下降到 `O(n)`？
- 是否考虑了重复元素、空数组、负数和不存在解的情况？

## Reusable Template

```text
for x in data:
    if target_condition_already_seen:
        return answer
    record_current_state_in_hash_map
```

## Next Step

- Day 2 衔接双指针。
- 如果今天提前完成，可以从 Day 2 抽一个双指针 warm-up 题并入今天。
