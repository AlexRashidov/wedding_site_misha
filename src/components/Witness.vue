<template>
  <div class="case-block">
    <div class="witness-header">
      <span class="witness-stamp">ЯВКА</span>
      <span class="witness-stamp">ПОНЯТОГО</span>
    </div>

    <div v-if="!submitted" class="witness-form">
      <div class="form-group">
        <label>фамилия, имя, отчество</label>
        <input v-model="form.name" placeholder="Иванов Иван Иванович" />
      </div>
      <div class="form-group">
        <label>телефон</label>
        <input v-model="form.phone" placeholder="+7 (XXX) XXX-XX-XX" />
      </div>
      <div class="form-group">
        <label>количество гостей</label>
        <input v-model.number="form.guests" type="number" min="0" max="5" />
      </div>
      <button class="btn-primary" @click="submitForm">подтвердить явку</button>
    </div>

    <div v-else class="witness-done">
      <div class="witness-stamp-big">ЯВИЛСЯ</div>
      <p><strong>{{ form.name }}</strong></p>
      <p>👥 {{ form.guests }} чел.</p>
      <button class="btn-secondary" @click="resetForm">изменить</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)
const form = reactive({ name: '', phone: '', guests: 1 })

const submitForm = () => {
  if (!form.name.trim()) { alert('Введите ФИО'); return }
  if (!form.phone.trim()) { alert('Введите телефон'); return }
  submitted.value = true
}

const resetForm = () => {
  submitted.value = false
  form.name = ''
  form.phone = ''
  form.guests = 1
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

.witness-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1a1410;
  padding-bottom: 6px;
  margin-bottom: 14px;
}

.witness-stamp {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #1a1410;
}

.witness-form {
  position: relative;
  z-index: 1;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 12px;
  text-transform: lowercase;
  letter-spacing: 1px;
  color: #3d2f22;
  margin-bottom: 2px;
}

.form-group input {
  width: 100%;
  padding: 6px 10px;
  background: #ffffff;
  border: 1px solid #1a1410;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #1a1410;
}

.form-group input:focus {
  outline: none;
  background: rgba(0,0,0,0.02);
}

.btn-primary {
  background: #1a1410;
  color: #ffffff;
  border: none;
  padding: 8px 24px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.btn-primary:hover {
  background: #000000;
}

.witness-done {
  text-align: center;
  padding: 12px 0;
  position: relative;
  z-index: 1;
}

.witness-stamp-big {
  font-size: 32px;
  font-weight: bold;
  color: #1a1410;
  border: 4px solid #1a1410;
  padding: 6px 28px;
  display: inline-block;
  margin-bottom: 12px;
  letter-spacing: 6px;
  animation: stampIn 0.5s ease;
}

@keyframes stampIn {
  0% { transform: scale(0) rotate(-20deg); }
  60% { transform: scale(1.05) rotate(3deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.witness-done p {
  font-size: 15px;
  color: #1a1410;
  margin: 4px 0;
}

.btn-secondary {
  background: transparent;
  color: #1a1410;
  border: 2px solid #1a1410;
  padding: 4px 16px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 6px;
}

.btn-secondary:hover {
  background: #1a1410;
  color: #ffffff;
}

@media (max-width: 768px) {
  .case-block {
    padding: 18px 16px;
  }
}
</style>