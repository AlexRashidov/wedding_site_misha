<template>
  <div class="case-block">
    <div class="case-header">
      <span class="case-stamp">ДЕЛО</span>
      <span class="case-number">№ {{ data.case.number }}</span>
    </div>

    <div class="case-title">{{ data.case.title }}</div>
    <div class="case-subtitle">{{ data.case.subtitle }}</div>

    <div class="case-details">
      <div class="detail-row">
        <span class="detail-label">Дата открытия</span>
        <span class="detail-value">{{ data.case.date }}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Основание</span>
        <span class="detail-value">Семейный кодекс РФ, ст. 1</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Статус</span>
        <span class="status-badge">{{ data.case.status }}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Следователь</span>
        <span class="detail-value handwritten">А. П. Свадебный</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { weddingData } from '../data/wedding.js'
const data = weddingData
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

.case-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 10px;
}

.case-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 6px;
  color: #1a1410;
}

.case-number {
  font-size: 14px;
  color: #1a1410;
  border: 1px solid #1a1410;
  padding: 0 14px;
}

.case-title {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  color: #1a1410;
}

.case-subtitle {
  font-family: 'Times New Roman', serif;
  font-size: 15px;
  text-align: center;
  color: #1a1410;
  margin-bottom: 18px;
}

.case-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-row {
  display: flex;
  gap: 16px;
  padding: 4px 0;
  font-size: 14px;
  border-bottom: 1px dashed rgba(0,0,0,0.06);
}

.detail-label {
  color: #3d2f22;
  font-weight: bold;
  min-width: 120px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  color: #1a1410;
}

.detail-value.handwritten {
  font-family: 'Brush Script MT', cursive;
  font-size: 20px;
}

.status-badge {
  display: inline-block;
  padding: 0 16px;
  border: 2px solid #1a1410;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #1a1410;
}

@media (max-width: 768px) {
  .case-block {
    padding: 18px 16px;
  }
  .case-stamp {
    font-size: 18px;
    letter-spacing: 4px;
  }
  .case-title {
    font-size: 15px;
  }
  .detail-row {
    flex-direction: column;
    gap: 2px;
  }
  .detail-label {
    min-width: auto;
  }
}
</style>