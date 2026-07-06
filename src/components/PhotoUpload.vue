<template>
  <div class="case-block">
    <div class="upload-header">
      <span class="upload-stamp">СБОР</span>
      <span class="upload-stamp">УЛИК</span>
    </div>

    <div class="upload-content">
      <div class="upload-intro">
        <p>Граждане, присутствующие на мероприятии, обязуются сдать все фото- и видеоматериалы,</p>
        <p>зафиксированные на личные мобильные устройства, в срок до окончания торжества.</p>
        <p class="upload-highlight">Для сдачи улик перейдите по ссылке или отсканируйте QR-код</p>
      </div>

      <!-- ССЫЛКА НА ДИСК -->
      <div class="upload-link">
        <span class="link-icon">📁</span>
        <a
            :href="diskLink"
            target="_blank"
            rel="noopener noreferrer"
            class="disk-link"
        >
          {{ diskLink }}
        </a>
        <button class="btn-copy" @click="copyLink">копировать</button>
      </div>

      <!-- QR-КОД -->
      <div class="upload-qr">
        <div class="qr-wrapper">
          <img
              v-if="qrImage"
              :src="qrImage"
              alt="QR-код для загрузки фото"
              class="qr-image"
          />
          <div v-else class="qr-placeholder">
            <span class="qr-icon">📱</span>
            <span>QR-код</span>
            <span class="qr-hint">(будет напечатан на месте)</span>
          </div>
        </div>
        <div class="qr-caption">
          <span>Приложение № 3</span>
          <span class="qr-stamp">УЛИКА</span>
        </div>
      </div>

      <!-- ИНСТРУКЦИЯ -->
      <div class="upload-instructions">
        <div class="instruction-item">
          <span class="instruction-num">1</span>
          <span>отсканируйте QR-код камерой телефона</span>
        </div>
        <div class="instruction-item">
          <span class="instruction-num">2</span>
          <span>перейдите по ссылке на Яндекс Диск</span>
        </div>
        <div class="instruction-item">
          <span class="instruction-num">3</span>
          <span>загрузите фото и видео в общую папку</span>
        </div>
      </div>

      <div class="upload-footer">
        <span>Начальник отдела фиксации</span>
        <span class="handwritten">А. П. Свадебный</span>
        <span class="upload-seal">ПЕЧАТЬ</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// ============================================================
// НАСТРОЙКА — МЕНЯЙ ЗДЕСЬ
// ============================================================
const DISK_LINK = 'https://disk.yandex.ru/client/disk/Свадьба'  // ← ССЫЛКА НА ТВОЮ ПАПКУ



const diskLink = 'https://disk.yandex.ru/d/Mg2Fl7olo6kcZg'
const qrImage = '/images/qr-code.jpg'

// ============================================================
// ФУНКЦИЯ: КОПИРОВАНИЕ ССЫЛКИ
// ============================================================
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(diskLink)
    alert('✅ Ссылка скопирована')
  } catch {
    // fallback для старых браузеров
    const input = document.createElement('input')
    input.value = diskLink
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    alert('✅ Ссылка скопирована')
  }
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

/* ===== ШАПКА ===== */
.upload-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 14px;
}

.upload-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #1a1410;
}

/* ===== КОНТЕНТ ===== */
.upload-content {
  position: relative;
  z-index: 1;
}

.upload-intro {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.8;
  color: #1a1410;
  margin-bottom: 18px;
  padding: 8px 14px;
  background: rgba(0,0,0,0.02);
  border-left: 3px solid #1a1410;
}

.upload-intro p {
  margin: 0;
}

.upload-highlight {
  margin-top: 6px !important;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ===== ССЫЛКА ===== */
.upload-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 2px solid #1a1410;
  background: rgba(0,0,0,0.01);
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.link-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.disk-link {
  flex: 1;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #1a1410;
  text-decoration: none;
  word-break: break-all;
  border-bottom: 1px dashed #1a1410;
  padding-bottom: 2px;
  transition: all 0.2s ease;
}

.disk-link:hover {
  border-bottom-color: transparent;
}

.btn-copy {
  background: transparent;
  border: 2px solid #1a1410;
  padding: 4px 14px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.btn-copy:hover {
  background: #1a1410;
  color: #ffffff;
}

/* ===== QR-КОД ===== */
.upload-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border-top: 2px solid #1a1410;
  border-bottom: 2px solid #1a1410;
  margin-bottom: 16px;
}

.qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid #1a1410;
  background: #ffffff;
  min-width: 160px;
  min-height: 160px;
}

.qr-image {
  width: 140px;
  height: 140px;
  display: block;
  background: #ffffff;
}

.qr-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #1a1410;
}

.qr-icon {
  font-size: 32px;
}

.qr-hint {
  font-size: 11px;
  color: #3d2f22;
}

.qr-caption {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
  margin-top: 6px;
  font-size: 11px;
  color: #3d2f22;
  letter-spacing: 1px;
}

.qr-stamp {
  color: #8b0000;
  font-weight: bold;
  border: 1px solid #8b0000;
  padding: 0 10px;
  font-size: 9px;
}

/* ===== ИНСТРУКЦИЯ ===== */
.upload-instructions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
  padding: 10px 14px;
  background: rgba(0,0,0,0.02);
  border: 1px solid #1a1410;
}

.instruction-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #1a1410;
  border-bottom: 1px dashed rgba(0,0,0,0.06);
}

.instruction-item:last-child {
  border-bottom: none;
}

.instruction-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: 1px solid #1a1410;
  font-size: 11px;
  font-weight: bold;
  flex-shrink: 0;
  background: #ffffff;
}

/* ===== ПОДПИСЬ ===== */
.upload-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 2px solid #1a1410;
  font-size: 12px;
  color: #3d2f22;
  flex-wrap: wrap;
  gap: 8px;
}

.upload-footer .handwritten {
  font-family: 'Brush Script MT', cursive;
  font-size: 20px;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 2px;
  color: #1a1410;
}

.upload-seal {
  font-size: 10px;
  font-weight: bold;
  color: #1a1410;
  border: 2px solid #1a1410;
  padding: 2px 14px;
  letter-spacing: 2px;
  transform: rotate(-3deg);
}

/* ===== АДАПТИВ ===== */
@media (max-width: 600px) {
  .case-block {
    padding: 16px 14px;
  }

  .upload-header {
    flex-direction: column;
    align-items: center;
    gap: 2px;
    text-align: center;
  }

  .upload-stamp {
    font-size: 16px;
    letter-spacing: 3px;
  }

  .upload-intro {
    font-size: 13px;
    padding: 8px 12px;
  }

  .upload-link {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .disk-link {
    font-size: 12px;
    text-align: center;
  }

  .btn-copy {
    width: 100%;
    padding: 6px;
  }

  .qr-wrapper {
    min-width: 140px;
    min-height: 140px;
    padding: 12px;
  }

  .qr-image {
    width: 120px;
    height: 120px;
  }

  .upload-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .instruction-item {
    font-size: 12px;
  }
}

@media (max-width: 400px) {
  .case-block {
    padding: 12px 8px;
  }

  .upload-stamp {
    font-size: 14px;
    letter-spacing: 2px;
  }

  .qr-wrapper {
    min-width: 120px;
    min-height: 120px;
    padding: 10px;
  }

  .qr-image {
    width: 100px;
    height: 100px;
  }

  .qr-caption {
    font-size: 10px;
    max-width: 160px;
  }
}
</style>