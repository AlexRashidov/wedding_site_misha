<template>
  <div class="case-block">
    <div class="procedure-header">
      <span class="procedure-stamp">ПРОЦЕССУАЛЬНЫЕ</span>
      <span class="procedure-stamp">ДЕЙСТВИЯ</span>
    </div>

    <div class="procedure-list">
      <div
          v-for="(item, index) in items"
          :key="item.id"
          class="procedure-item"
          :class="{ done: item.done }"
          @click="toggleDone(item)"
      >
        <span class="item-num">{{ String(index + 1).padStart(2, '0') }}</span>
        <span class="item-title">{{ item.title }}</span>
        <span class="item-time">{{ item.time }}</span>
        <span class="item-status">{{ item.done ? '✓' : '○' }}</span>
      </div>
    </div>

    <div class="procedure-controls">
      <button class="btn-secondary" @click="toggleAll">
        {{ allDone ? 'Сбросить всё' : 'Отметить всё' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { weddingData } from '../data/wedding.js'

const items = ref(weddingData.procedures.map(p => ({ ...p, done: false })))
const allDone = computed(() => items.value.every(p => p.done))

const toggleDone = (item) => { item.done = !item.done }
const toggleAll = () => {
  const newState = !allDone.value
  items.value.forEach(p => p.done = newState)
}
</script>

<style scoped>
.case-block {
  background: #ffffff;
  border: 1px solid #1a1410;
  padding: 28px 32px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  position: relative;
}

.case-block::after {
  content: "СЕКРЕТНО";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-35deg);
  font-size: 90px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.025);
  letter-spacing: 16px;
  pointer-events: none;
  white-space: nowrap;
  font-family: 'Times New Roman', serif;
  z-index: 0;
}

.procedure-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 14px;
}

.procedure-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #1a1410;
}

.procedure-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 1;
}

.procedure-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border: 1px solid #1a1410;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgba(0,0,0,0.01);
}

.procedure-item:hover {
  background: rgba(0,0,0,0.03);
}

.procedure-item.done {
  background: rgba(0,0,0,0.04);
  opacity: 0.6;
}

.procedure-item.done .item-title {
  text-decoration: line-through;
}

.item-num {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #3d2f22;
  min-width: 28px;
}

.item-title {
  flex: 1;
  font-size: 14px;
  color: #1a1410;
}

.item-time {
  font-size: 13px;
  color: #3d2f22;
  font-family: 'Courier New', monospace;
}

.item-status {
  font-size: 18px;
  color: #1a1410;
  min-width: 20px;
  text-align: center;
}

.procedure-controls {
  margin-top: 12px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.btn-secondary {
  background: transparent;
  color: #1a1410;
  border: 2px solid #1a1410;
  padding: 6px 20px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #1a1410;
  color: #ffffff;
}

@media (max-width: 768px) {
  .case-block {
    padding: 18px 16px;
  }
  .procedure-item {
    flex-wrap: wrap;
    gap: 4px;
  }
  .item-title {
    flex: 1 1 100%;
    order: 2;
  }
  .item-time {
    order: 3;
  }
  .item-status {
    order: 4;
  }
  .item-num {
    order: 1;
  }
}
</style>