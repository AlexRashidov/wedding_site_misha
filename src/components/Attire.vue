<template>
  <div class="case-block">
    <div class="attire-header">
      <span class="attire-stamp">ОСОБЫЕ</span>
      <span class="attire-stamp">УКАЗАНИЯ</span>
    </div>

    <div class="attire-content">
      <div class="attire-intro">
        В связи с проведением мероприятия на территории с прилегающей акваторией (озеро)
      </div>

      <div class="attire-grid">
        <div class="attire-card">
          <div class="attire-icon">ФО</div>
          <div class="attire-text">
            <strong>форма одежды</strong>
            <span>свободная, официальный дресс-код отсутствует</span>
          </div>
        </div>

        <div class="attire-card highlight">
          <div class="attire-icon">ВП</div>
          <div class="attire-text">
            <strong>для желающих искупаться</strong>
            <span>взять с собой плавки / купальник, полотенце, сланцы</span>
          </div>
        </div>

        <div class="attire-card">
          <div class="attire-icon">ДО</div>
          <div class="attire-text">
            <strong>дополнительно</strong>
            <span>по желанию — маска, ласты, надувной матрас</span>
          </div>
        </div>
      </div>

      <div class="attire-note">
        <span class="note-icon">П</span>
        <span>купание в озере — на добровольной основе</span>
      </div>

      <div class="attire-sign">
        <div class="attire-signature">
          <span>Начальник отдела экипировки</span>
          <span class="handwritten">А. П. Свадебный</span>
        </div>
        <div class="attire-seal">ПЕЧАТЬ</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Нет данных — всё статичное
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

.attire-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 14px;
}

.attire-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #1a1410;
}

.attire-content {
  position: relative;
  z-index: 1;
}

.attire-intro {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #1a1410;
  margin-bottom: 16px;
  padding: 8px 14px;
  background: rgba(0,0,0,0.02);
  border-left: 3px solid #1a1410;
}

.attire-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 16px;
}

.attire-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid #1a1410;
  background: rgba(0,0,0,0.01);
  transition: all 0.2s ease;
}

.attire-card:hover {
  background: rgba(0,0,0,0.03);
}

.attire-card.highlight {
  border-color: #1a1410;
  border-width: 2px;
  background: rgba(0,0,0,0.02);
}

.attire-icon {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  color: #1a1410;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border: 1px solid #1a1410;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.02);
  letter-spacing: 0.5px;
}

.attire-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.attire-text strong {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #1a1410;
}

.attire-text span {
  font-size: 13px;
  color: #3d2f22;
}

.attire-note {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border: 1px solid #1a1410;
  background: rgba(0,0,0,0.02);
  font-size: 13px;
  color: #3d2f22;
  margin-bottom: 16px;
}

.note-icon {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  font-weight: bold;
  color: #1a1410;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border: 1px solid #1a1410;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.02);
}

.attire-sign {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 2px solid #1a1410;
  flex-wrap: wrap;
  gap: 12px;
}

.attire-signature {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.attire-signature span:first-child {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #3d2f22;
}

.attire-signature .handwritten {
  font-family: 'Brush Script MT', cursive;
  font-size: 22px;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 2px;
}

.attire-seal {
  font-size: 10px;
  font-weight: bold;
  color: #1a1410;
  border: 2px solid #1a1410;
  padding: 2px 14px;
  letter-spacing: 2px;
  transform: rotate(-3deg);
}

@media (max-width: 600px) {
  .case-block {
    padding: 16px 14px;
  }

  .attire-header {
    flex-direction: column;
    align-items: center;
    gap: 2px;
    text-align: center;
  }

  .attire-stamp {
    font-size: 16px;
    letter-spacing: 3px;
  }

  .attire-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .attire-card {
    padding: 8px 12px;
  }

  .attire-intro {
    font-size: 13px;
    padding: 8px 12px;
  }

  .attire-note {
    font-size: 12px;
    flex-direction: column;
    text-align: center;
    padding: 8px 12px;
  }

  .attire-sign {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 400px) {
  .case-block {
    padding: 12px 8px;
  }

  .attire-stamp {
    font-size: 14px;
    letter-spacing: 2px;
  }

  .attire-text strong {
    font-size: 12px;
  }

  .attire-text span {
    font-size: 12px;
  }

  .attire-icon {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }

  .note-icon {
    width: 20px;
    height: 20px;
    font-size: 11px;
  }
}
</style>