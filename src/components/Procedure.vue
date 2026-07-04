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
  flex-shrink: 0;
}

.item-title {
  flex: 1;
  font-size: 14px;
  color: #1a1410;
  word-break: break-word;
}

.item-time {
  font-size: 13px;
  color: #3d2f22;
  font-family: 'Courier New', monospace;
  flex-shrink: 0;
}

.item-status {
  font-size: 18px;
  color: #1a1410;
  min-width: 20px;
  text-align: center;
  flex-shrink: 0;
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

/* ==========================================================
   АДАПТИВ ДЛЯ МОБИЛОК — ФИКС
   ========================================================== */
@media (max-width: 600px) {
  .case-block {
    padding: 16px 12px;
  }

  .procedure-header {
    flex-direction: column;
    align-items: center;
    gap: 2px;
    text-align: center;
  }

  .procedure-stamp {
    font-size: 16px;
    letter-spacing: 3px;
  }

  .procedure-item {
    flex-wrap: wrap;
    gap: 4px 8px;
    padding: 8px 10px;
  }

  .item-num {
    font-size: 12px;
    min-width: 24px;
  }

  .item-title {
    flex: 1 1 100%;
    font-size: 14px;
    order: 2;
    padding: 2px 0;
  }

  .item-time {
    font-size: 12px;
    order: 3;
  }

  .item-status {
    font-size: 16px;
    order: 4;
  }

  .procedure-controls {
    margin-top: 10px;
  }

  .btn-secondary {
    font-size: 11px;
    padding: 4px 14px;
    width: 100%;
  }
}

@media (max-width: 400px) {
  .case-block {
    padding: 12px 8px;
  }

  .procedure-stamp {
    font-size: 14px;
    letter-spacing: 2px;
  }

  .item-title {
    font-size: 13px;
  }

  .item-time {
    font-size: 11px;
  }

  .procedure-item {
    padding: 6px 8px;
    gap: 2px 6px;
  }
}
</style>