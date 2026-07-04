<template>
  <div class="case-block">
    <div class="conclusion-header">
      <span class="conclusion-stamp">ЗАКЛЮЧЕНИЕ</span>
      <span class="conclusion-number">№ 001</span>
    </div>

    <div class="conclusion-text">
      <p>На основании вышеизложенного, учитывая все обстоятельства дела,</p>
      <p class="conclusion-resolution">ПОСТАНОВЛЯЮ:</p>

      <div class="conclusion-items">
        <p>1. Признать граждан
          <span class="handwritten">{{ data.groom.lastName }} {{ data.groom.firstName }}</span>
          и
          <span class="handwritten">{{ data.bride.lastName }} {{ data.bride.firstName }}</span>
          виновными в намерении создать семью.
        </p>
        <p>2. Назначить наказание в виде <strong>пожизненного счастья</strong> в браке.</p>
        <p>3. Дело № 001 считать закрытым с момента регистрации брака.</p>
      </div>

      <div class="conclusion-footer">
        <div>
          <div class="conclusion-judge">Судья</div>
          <div class="conclusion-sign handwritten">{{ data.decree.judge }}</div>
          <div class="conclusion-date">{{ data.decree.date }}</div>
        </div>
        <div class="seal-big">ПЕЧАТЬ<br>ЗАГСА</div>
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

.conclusion-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 14px;
}

.conclusion-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 6px;
  color: #1a1410;
}

.conclusion-number {
  font-size: 14px;
  color: #1a1410;
  border: 1px solid #1a1410;
  padding: 0 14px;
}

.conclusion-text {
  position: relative;
  z-index: 1;
}

.conclusion-text p {
  font-size: 15px;
  line-height: 1.6;
  color: #1a1410;
  margin-bottom: 8px;
}

.conclusion-resolution {
  font-size: 18px !important;
  font-weight: bold;
  letter-spacing: 2px;
}

.conclusion-items {
  padding: 10px 14px;
  border: 1px solid #1a1410;
  background: rgba(0,0,0,0.02);
  margin: 10px 0 16px 0;
}

.conclusion-items p {
  padding: 4px 0;
  border-bottom: 1px dashed rgba(0,0,0,0.06);
  margin-bottom: 0;
  font-size: 14px;
}

.conclusion-items p:last-child {
  border-bottom: none;
}

.conclusion-items .handwritten {
  font-family: 'Brush Script MT', cursive;
  font-size: 20px;
}

.conclusion-items strong {
  font-weight: bold;
}

.conclusion-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 12px 16px;
  border: 2px dashed #1a1410;
  flex-wrap: wrap;
  gap: 12px;
}

.conclusion-judge {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #3d2f22;
}

.conclusion-sign {
  font-family: 'Brush Script MT', cursive;
  font-size: 24px;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 2px;
}

.conclusion-date {
  font-size: 13px;
  color: #3d2f22;
}

.seal-big {
  width: 64px;
  height: 64px;
  border: 4px solid #8b0000;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: bold;
  color: #8b0000;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: rotate(-8deg);
}

@media (max-width: 768px) {
  .case-block {
    padding: 18px 16px;
  }
  .conclusion-stamp {
    font-size: 18px;
    letter-spacing: 4px;
  }
  .conclusion-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>