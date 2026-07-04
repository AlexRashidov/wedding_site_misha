<template>
  <div class="case-block">
    <div class="decree-header">
      <span class="decree-stamp">ПОСТАНОВЛЕНИЕ</span>
      <span class="decree-number">№ 001-С</span>
    </div>

    <div class="decree-title">о назначении бракосочетания</div>

    <div class="decree-text">
      <p>ПОСТАНОВЛЕНО:</p>
      <p class="decree-resolution">
        назначить бракосочетание между гражданами
        <span class="handwritten">{{ data.groom.lastName }} {{ data.groom.firstName }}</span>
        и
        <span class="handwritten">{{ data.bride.lastName }} {{ data.bride.firstName }}</span>
      </p>
    </div>

    <div class="decree-details">
      <div class="decree-item">
        <span class="item-label">Дата</span>
        <span class="item-value">{{ data.decree.date }}</span>
      </div>
      <div class="decree-item">
        <span class="item-label">Время</span>
        <span class="item-value">{{ data.decree.time }}</span>
      </div>
      <div class="decree-item">
        <span class="item-label">Место</span>
        <span class="item-value">{{ data.decree.place }}</span>
      </div>
    </div>

    <div class="decree-footer">
      <div>
        <div class="decree-judge">Судья</div>
        <div class="decree-sign handwritten">{{ data.decree.judge }}</div>
      </div>
      <div class="seal-small">ПЕЧАТЬ<br>ЗАГСА</div>
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

.decree-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 8px;
}

.decree-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #1a1410;
}

.decree-number {
  font-size: 14px;
  color: #1a1410;
  border: 1px solid #1a1410;
  padding: 0 14px;
}

.decree-title {
  font-family: 'Times New Roman', serif;
  font-size: 17px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  color: #1a1410;
  margin-bottom: 16px;
}

.decree-text {
  margin-bottom: 16px;
}

.decree-text p {
  font-size: 15px;
  line-height: 1.6;
  color: #1a1410;
}

.decree-resolution {
  padding: 10px 14px;
  border-left: 4px solid #1a1410;
  background: rgba(0,0,0,0.02);
  font-size: 16px !important;
}

.decree-resolution .handwritten {
  font-family: 'Brush Script MT', cursive;
  font-size: 22px;
}

.decree-details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 16px;
}

.decree-item {
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  border: 1px solid #1a1410;
  background: rgba(0,0,0,0.02);
}

.item-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #3d2f22;
}

.item-value {
  font-size: 14px;
  color: #1a1410;
  font-weight: bold;
}

.decree-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 2px dashed #1a1410;
  flex-wrap: wrap;
  gap: 12px;
}

.decree-judge {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #3d2f22;
}

.decree-sign {
  font-family: 'Brush Script MT', cursive;
  font-size: 24px;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 2px;
}

.seal-small {
  width: 56px;
  height: 56px;
  border: 3px solid #8b0000;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: bold;
  color: #8b0000;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: rotate(-6deg);
}

@media (max-width: 768px) {
  .case-block {
    padding: 18px 16px;
  }
  .decree-stamp {
    font-size: 18px;
    letter-spacing: 2px;
  }
  .decree-details {
    grid-template-columns: 1fr;
  }
  .decree-footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>