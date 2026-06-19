---
title: Agent Runtime 第一轮复盘
date: 2026-06-17
summary: 把 LLM、工具、上下文、记忆、循环和观测能力串起来，理解一个 Agent Runtime 到底负责什么。
tags: [AI Agent, Runtime, Learning]
---

# Agent Runtime 第一轮复盘

Agent Runtime 不是一个模型，而是把模型和外部世界连接起来的执行系统。

## 核心理解

- **LLM 负责决策**：判断下一步要回答、要调用工具，还是需要继续观察。
- **Runtime 负责执行**：真正调用工具、维护上下文、记录 trace、处理错误。
- **Loop 负责推进**：让任务不是一次问答，而是可以多轮观察、行动、修正。

## Memory / Trace / Metrics

- `Memory` 给 LLM 看，帮助它延续上下文。
- `Trace` 给开发者看，用来 debug 单次链路。
- `Metrics` 看整体系统，比如成功率、耗时、成本和稳定性。

> 简单说：模型像脑子，Runtime 像身体和工作台。
