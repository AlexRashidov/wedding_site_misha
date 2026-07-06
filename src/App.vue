<template>
  <div class="app">
    <!-- ШАПКА -->
    <header class="app-header">
      <div class="header-left">
        <span class="header-emblem">⚖️</span>
        <div class="header-text">
          <span class="header-title">Управление ЗАГС</span>
          <span class="header-sub">г. Заринск</span>
        </div>
      </div>
      <div class="header-center">
        <span class="header-case">Дело № 001</span>
      </div>
      <div class="header-right">
        <span class="header-stamp">СЕКРЕТНО</span>
      </div>
    </header>

    <!-- КОНТЕНТ -->
    <CaseFile />
    <Protocol />
    <Decree />
    <Procedure />
    <Witness />
    <Attire/>
    <Conclusion />

    <!-- ФУТЕР -->
    <footer class="app-footer">
      <span>Управление ЗАГС г. Заринск</span>
      <span>Дело № 001</span>
      <span>Лист 1 из 1</span>
    </footer>
  </div>
</template>

<script setup>
// Импортируем все компоненты
import CaseFile from './components/CaseFile.vue'
import Protocol from './components/Protocol.vue'
import Decree from './components/Decree.vue'
import Procedure from './components/Procedure.vue'
//import Program from './components/Program.vue'
//import Gifts from './components/Gifts.vue'
import Witness from './components/Witness.vue'
import Conclusion from './components/Conclusion.vue'
import Attire from './components/Attire.vue'
</script>

<style scoped>
.app {
  max-width: 820px;
  margin: 0 auto;
}

/* ==========================================================
   ШАПКА — КАНЦЕЛЯРСКИЙ СТИЛЬ
   ========================================================== */
.app-header {
  background: #ffffff;
  border: 1px solid #1a1410;
  padding: 16px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
  position: relative;
}

/* Водяной знак на шапке */
.app-header::after {
  content: "СЕКРЕТНО";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-35deg);
  font-size: 50px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.015);
  letter-spacing: 12px;
  pointer-events: none;
  white-space: nowrap;
  font-family: 'Times New Roman', serif;
  z-index: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.header-emblem {
  font-size: 26px;
  color: #1a1410;
  border: 2px solid #1a1410;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.header-text {
  display: flex;
  flex-direction: column;
}

.header-title {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  color: #1a1410;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.header-sub {
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #3d2f22;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.header-center {
  position: relative;
  z-index: 1;
}

.header-case {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  color: #1a1410;
  border: 2px solid #1a1410;
  padding: 2px 20px;
  letter-spacing: 4px;
}

.header-right {
  position: relative;
  z-index: 1;
}

.header-stamp {
  color: #1a1410;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid #1a1410;
  padding: 2px 14px;
  letter-spacing: 3px;
  transform: rotate(2deg);
  display: inline-block;
}

/* ==========================================================
   ФУТЕР — КАНЦЕЛЯРСКИЙ СТИЛЬ
   ========================================================== */
.app-footer {
  background: #ffffff;
  border: 1px solid #1a1410;
  padding: 10px 28px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  color: #3d2f22;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  letter-spacing: 1px;
  flex-wrap: wrap;
  gap: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
  border-top: 2px solid #1a1410;
}

/* ==========================================================
   АДАПТИВ
   ========================================================== */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    text-align: center;
    padding: 14px 16px;
    gap: 8px;
  }

  .header-left {
    flex-direction: column;
    gap: 6px;
  }

  .header-emblem {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .header-title {
    font-size: 15px;
    letter-spacing: 2px;
  }

  .header-case {
    font-size: 15px;
    padding: 2px 14px;
    letter-spacing: 3px;
  }

  .app-footer {
    flex-direction: column;
    text-align: center;
    padding: 10px 16px;
    gap: 4px;
  }

  .app-header::after {
    font-size: 30px;
    letter-spacing: 6px;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 10px 12px;
  }

  .header-title {
    font-size: 13px;
    letter-spacing: 1px;
  }

  .header-case {
    font-size: 13px;
    padding: 2px 10px;
    letter-spacing: 2px;
  }

  .header-stamp {
    font-size: 10px;
    padding: 2px 10px;
    letter-spacing: 2px;
  }

  .header-emblem {
    width: 34px;
    height: 34px;
    font-size: 15px;
  }

  .app-header::after {
    font-size: 22px;
    letter-spacing: 4px;
  }
}
</style>