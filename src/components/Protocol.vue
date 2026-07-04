<template>
  <div class="case-block protocol-block">
    <!-- ШАПКА -->
    <div class="protocol-header">
      <div class="protocol-stamp">ПРОТОКОЛ</div>
      <div class="protocol-number">№ 001-З/2026</div>
    </div>

    <div class="protocol-title">
      об административном задержании
    </div>

    <div class="protocol-meta">
      <span>📍 г. Заринск</span>
      <span>📅 «18» июля 2026 года</span>
      <span>🕐 16:30</span>
    </div>

    <!-- ============================================================ -->
    <!-- УПОЛНОМОЧЕННОЕ ЛИЦО (ЖЕНИХ) С ФОТО СПРАВА -->
    <!-- ============================================================ -->
    <div class="protocol-section">
      <div class="section-label">Я, уполномоченное лицо, гражданин:</div>

      <div class="person-row">
        <div class="person-data">
          <div class="field-row">
            <span class="field-label">Фамилия</span>
            <span class="field-grid handwritten">{{ data.groom.lastName }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Имя</span>
            <span class="field-grid handwritten">{{ data.groom.firstName }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Отчество</span>
            <span class="field-grid handwritten">{{ data.groom.patronymic }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Дата рождения</span>
            <span class="field-grid handwritten">{{ data.groom.birthDate }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Звание</span>
            <span class="field-grid handwritten">{{ data.groom.rank }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Место службы</span>
            <span class="field-grid handwritten">{{ data.groom.department }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Жетон</span>
            <span class="field-grid handwritten">{{ data.groom.badge }}</span>
          </div>
        </div>

        <!-- Фото справа -->
        <div class="person-photo">
          <div class="photo-wrapper">
            <div class="photo-tape tape-tl"></div>
            <div class="photo-tape tape-tr"></div>
            <div class="photo-tape tape-bl"></div>
            <div class="photo-tape tape-br"></div>
            <img
                v-if="data.groom.photo"
                :src="data.groom.photo"
                alt="Фото уполномоченного лица"
                class="photo-police"
                @error="handleImageError"
            />
            <div v-else class="photo-placeholder">ФОТО</div>
            <div class="photo-stamp">УПОЛНОМОЧЕН</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== ТЕКСТ ЗАДЕРЖАНИЯ ===== -->
    <div class="legal-text">
      Действуя на основании личных намерений, устойчивых чувств и окончательного решения о создании семьи,
      произвел задержание гражданки:
    </div>

    <!-- ============================================================ -->
    <!-- ЗАДЕРЖАННАЯ (НЕВЕСТА) С ФОТО СПРАВА -->
    <!-- ============================================================ -->
    <div class="protocol-section">
      <div class="section-label">Задержана:</div>

      <div class="person-row">
        <div class="person-data">
          <div class="field-row">
            <span class="field-label">Фамилия</span>
            <span class="field-grid handwritten">{{ data.bride.lastName }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Имя</span>
            <span class="field-grid handwritten">{{ data.bride.firstName }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Отчество</span>
            <span class="field-grid handwritten">{{ data.bride.patronymic }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Дата рождения</span>
            <span class="field-grid handwritten">{{ data.bride.birthDate }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Место рождения</span>
            <span class="field-grid handwritten">{{ data.bride.birthPlace }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Место задержания</span>
            <span class="field-grid handwritten">{{ data.bride.place }}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Статья</span>
            <span class="field-grid handwritten">{{ data.bride.article }}</span>
          </div>
        </div>

        <!-- Фото справа с решёткой -->
        <div class="person-photo">
          <div class="photo-wrapper">
            <div class="photo-tape tape-tl"></div>
            <div class="photo-tape tape-tr"></div>
            <div class="photo-tape tape-bl"></div>
            <div class="photo-tape tape-br"></div>
            <div class="prison-overlay">
              <div class="prison-bars">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <img
                  v-if="data.bride.photo"
                  :src="data.bride.photo"
                  alt="Фото задержанной"
                  class="photo-prison"
                  @error="handleImageError"
              />
              <div v-else class="photo-placeholder">ФОТО</div>
            </div>
            <div class="arrested-stamp">ЗАДЕРЖАНА</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- ПОДПИСИ -->
    <!-- ============================================================ -->
    <div class="protocol-signatures">
      <div class="signature-block">
        <div class="signature-line">
          <span class="sig-label">Уполномоченное лицо</span>
          <span class="sig-name handwritten">М. С. Мурза</span>
          <span class="sig-date">15.07.2026</span>
        </div>
        <div class="signature-line">
          <span class="sig-label">Задержанная</span>
          <span class="sig-name handwritten">Е. И. Фискова</span>
          <span class="sig-date">15.07.2026</span>
        </div>
        <div class="signature-line">
          <span class="sig-label">Понятой</span>
          <span class="sig-name handwritten">А. И. Рашидов</span>
          <span class="sig-date">15.07.2026</span>
        </div>
        <div class="signature-line">
          <span class="sig-label">Понятой</span>
          <span class="sig-name handwritten">К. Е. Шипулина</span>
          <span class="sig-date">15.07.2026</span>
        </div>
      </div>
      <div class="seal">
        <div class="seal-circle">ПЕЧАТЬ<br>ЗАГСА</div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- ФУТЕР -->
    <!-- ============================================================ -->
    <div class="protocol-footer">
      <div class="fingerprint">

        <span>Отпечатки пальцев сняты</span>
      </div>
      <div class="protocol-end">
        <span>Протокол составлен в 1 экз.</span>
        <span>Лист № 1</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { weddingData } from '../data/wedding.js'

const data = weddingData

const handleImageError = (e) => {
  e.target.style.display = 'none'
}
</script>

<style scoped>
/* ==========================================================
   ПРОТОКОЛ — ФОТО БОЛЬШЕ, БЕЗ РАМКИ
   ========================================================== */

.protocol-block {
  background: #ffffff;
  padding: 24px 28px;
  border: 1px solid #1a1410;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

/* ===== ШАПКА ===== */
.protocol-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 8px;
}

.protocol-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 6px;
  color: #1a1410;
}

.protocol-number {
  font-size: 14px;
  color: #1a1410;
  border: 1px solid #1a1410;
  padding: 0 14px;
}

.protocol-title {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #1a1410;
  letter-spacing: 4px;
}

.protocol-meta {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 6px 0;
  margin-bottom: 14px;
  font-size: 13px;
  color: #3d2f22;
  border-bottom: 1px dashed #1a1410;
}

/* ===== СЕКЦИИ ===== */
.protocol-section {
  margin: 12px 0;
}

.section-label {
  font-size: 14px;
  font-weight: bold;
  color: #1a1410;
  margin-bottom: 6px;
  padding-bottom: 4px;
  border-bottom: 2px solid #1a1410;
}

/* ===== РЯД: ДАННЫЕ + ФОТО ===== */
.person-row {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.person-data {
  flex: 1;
  min-width: 0;
}

.person-photo {
  flex-shrink: 0;
  margin-top: 4px;
}

/* ===== ПОЛЯ С КЛЕТОЧКАМИ ===== */
.field-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 2px 0;
  font-size: 14px;
  border-bottom: 1px dashed rgba(0,0,0,0.06);
}

.field-label {
  color: #3d2f22;
  font-weight: bold;
  min-width: 100px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.field-grid {
  display: inline-block;
  border-bottom: 2px solid #1a1410;
  min-width: 140px;
  padding: 0 6px;
  font-family: 'Brush Script MT', cursive;
  font-size: 20px;
  color: #1a1410;
  letter-spacing: 2px;
  background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(0,0,0,0.03) 10px,
      rgba(0,0,0,0.03) 11px
  );
}

.handwritten {
  font-family: 'Brush Script MT', 'Segoe Script', cursive;
  font-size: 20px;
}

/* ===== ФОТО — БОЛЬШЕ, БЕЗ РАМКИ ===== */
.photo-wrapper {
  display: inline-block;
  position: relative;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  max-width: 160px;
}

.photo-police {
  display: block;
  width: 160px;
  height: 200px;
  object-fit: cover;
  border: 1px solid #1a1410;
  background: #d4c9b8;
}

.photo-prison {
  display: block;
  width: 160px;
  height: 200px;
  object-fit: cover;
  border: 1px solid #1a1410;
  background: #d4c9b8;
  filter: grayscale(0.15);
}

.photo-placeholder {
  width: 160px;
  height: 200px;
  background: #d4c9b8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #3d2f22;
  border: 1px solid #1a1410;
}

/* ===== ШТАМПЫ ===== */
.photo-stamp {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 20, 16, 0.85);
  color: #ffffff;
  padding: 2px 14px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  border: 1px solid #1a1410;
  text-transform: uppercase;
  white-space: nowrap;
}

.arrested-stamp {
  position: absolute;
  bottom: 12px;
  right: -6px;
  background: #8b0000;
  color: #fff;
  padding: 3px 12px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 3px;
  transform: rotate(-6deg);
  border: 1px solid #1a1410;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 5;
  white-space: nowrap;
}

/* ===== РЕШЁТКА ===== */
.prison-overlay {
  position: relative;
  display: inline-block;
}

.prison-bars {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  pointer-events: none;
  z-index: 2;
}

.prison-bars span {
  display: block;
  width: 3px;
  height: 100%;
  background: rgba(30, 30, 30, 0.25);
  border-left: 1px solid rgba(0,0,0,0.05);
  border-right: 1px solid rgba(0,0,0,0.05);
}

.prison-bars span:nth-child(2),
.prison-bars span:nth-child(5),
.prison-bars span:nth-child(8) {
  width: 2px;
}

.prison-bars span:nth-child(3),
.prison-bars span:nth-child(6) {
  width: 4px;
}

/* ===== СКОТЧ ===== */
.photo-tape {
  position: absolute;
  width: 32px;
  height: 12px;
  background: rgba(200, 190, 175, 0.5);
  border: 1px solid rgba(180, 170, 155, 0.2);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  z-index: 3;
}

.tape-tl { top: -4px; left: 8px; transform: rotate(-6deg); }
.tape-tr { top: -4px; right: 8px; transform: rotate(6deg); }
.tape-bl { bottom: -4px; left: 8px; transform: rotate(4deg); }
.tape-br { bottom: -4px; right: 8px; transform: rotate(-4deg); }

/* ===== ПРАВОВОЙ ТЕКСТ ===== */
.legal-text {
  padding: 8px 12px;
  background: rgba(0,0,0,0.02);
  border-left: 4px solid #1a1410;
  font-size: 14px;
  line-height: 1.6;
  color: #1a1410;
  font-style: italic;
  margin: 10px 0;
}

/* ===== ПОДПИСИ ===== */
.protocol-signatures {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 14px;
  background: rgba(0,0,0,0.02);
  border: 2px solid #1a1410;
  margin: 14px 0;
  flex-wrap: wrap;
  gap: 12px;
}

.signature-block {
  flex: 1;
}

.signature-line {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 3px 0;
  font-size: 13px;
  flex-wrap: wrap;
  border-bottom: 1px dashed rgba(0,0,0,0.04);
}

.sig-label {
  color: #3d2f22;
  min-width: 100px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sig-name {
  font-family: 'Brush Script MT', cursive;
  font-size: 20px;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 2px;
  min-width: 120px;
  color: #1a1410;
}

.sig-date {
  color: #3d2f22;
  font-size: 12px;
}

.seal {
  display: flex;
  align-items: center;
}

.seal-circle {
  width: 60px;
  height: 60px;
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

/* ===== ФУТЕР ===== */
.protocol-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(0,0,0,0.02);
  border: 1px solid #1a1410;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  color: #3d2f22;
}

.fingerprint {
  display: flex;
  align-items: center;
  gap: 6px;
}

.fingerprint span:first-child {
  font-size: 22px;
}

.protocol-end {
  display: flex;
  gap: 14px;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 768px) {
  .protocol-block {
    padding: 16px 14px;
  }

  .person-row {
    flex-direction: column;
    align-items: center;
  }

  .person-photo {
    order: -1;
    margin-bottom: 10px;
  }

  .photo-police,
  .photo-prison,
  .photo-placeholder {
    width: 180px;
    height: 225px;
  }

  .photo-wrapper {
    max-width: 200px;
  }

  .field-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .field-label {
    min-width: auto;
    font-size: 11px;
  }

  .field-grid {
    min-width: 120px;
    font-size: 18px;
    width: 100%;
  }

  .protocol-signatures {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .signature-line {
    flex-direction: column;
    align-items: center;
  }

  .sig-label {
    min-width: auto;
  }

  .protocol-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .protocol-meta {
    gap: 12px;
    flex-wrap: wrap;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .protocol-block {
    padding: 12px 10px;
  }

  .protocol-stamp {
    font-size: 17px;
    letter-spacing: 3px;
  }

  .protocol-number {
    font-size: 11px;
    padding: 1px 10px;
  }

  .photo-police,
  .photo-prison,
  .photo-placeholder {
    width: 140px;
    height: 175px;
  }

  .photo-wrapper {
    max-width: 160px;
  }

  .photo-tape {
    width: 24px;
    height: 10px;
  }

  .seal-circle {
    width: 48px;
    height: 48px;
    font-size: 7px;
  }

  .handwritten {
    font-size: 17px;
  }

  .field-grid {
    font-size: 15px;
    min-width: 80px;
  }

  .arrested-stamp {
    font-size: 9px;
    padding: 2px 8px;
    bottom: 8px;
    right: -4px;
  }

  .photo-stamp {
    font-size: 8px;
    padding: 1px 10px;
    bottom: 8px;
  }

  .sig-name {
    font-size: 17px;
    min-width: 100px;
  }
}
</style>