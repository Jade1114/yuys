---
title: 单调栈：496 / 739 / 503 / 42 对比
date: 2026-06-17
summary: 用几道题把单调栈的核心套路收口：谁入栈、何时弹出、弹出时结算什么。
tags: [DSA, Stack, C]
---

# 单调栈：496 / 739 / 503 / 42 对比

单调栈最重要的不是背模板，而是搞清楚：**栈里存什么，弹出时解决谁的问题**。

## 常见模式

- `496`：给子集元素找下一个更大值。
- `739`：用下标差计算等待天数。
- `503`：遍历 `2 * n`，用 `i % n` 模拟环形数组。
- `42`：当前柱子作为右边界，弹出低洼点后结算一层水。

## 42 接雨水的关键

```c
while (top >= 0 && height[i] > height[stack[top]]) {
    int bottom = stack[top--];
    if (top < 0) break;

    int left = stack[top];
    int width = i - left - 1;
    int boundedHeight = min(height[left], height[i]) - height[bottom];
    ans += width * boundedHeight;
}
```

这题弹出的不是答案本身，而是一个低洼层。左边界是新栈顶，右边界是当前柱子。
