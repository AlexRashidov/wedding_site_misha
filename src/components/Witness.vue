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
        <input v-model.number="form.guests" type="number" min="0" max="10" />
      </div>
      <div class="form-group">
        <label>особые отметки</label>
        <textarea
            v-model="form.notes"
            placeholder="аллергии, пожелания, особые условия..."
            rows="2"
        ></textarea>
      </div>
      <button
          class="btn-primary"
          @click="submitForm"
          :disabled="isLoading"
      >
        {{ isLoading ? 'отправка...' : 'подтвердить явку' }}
      </button>
      <div v-if="error" class="error-message">
        ⚠️ {{ error }}
      </div>
    </div>

    <div v-else class="witness-done">
      <div class="witness-stamp-big">ЯВИЛСЯ</div>
      <p><strong>{{ form.name }}</strong></p>
      <p>👥 {{ form.guests }} чел.</p>
      <p v-if="form.notes" class="witness-notes">📝 {{ form.notes }}</p>
      <button class="btn-secondary" @click="resetForm">изменить</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { sendToTelegram } from '../services/telegram.js'

const submitted = ref(false)
const isLoading = ref(false)
const error = ref('')

const form = reactive({
  name: '',
  phone: '',
  guests: 1,
  notes: ''
})

const submitForm = async () => {
  // Валидация
  if (!form.name.trim()) {
    error.value = 'Введите ФИО'
    setTimeout(() => error.value = '', 3000)
    return
  }
  if (!form.phone.trim()) {
    error.value = 'Введите телефон'
    setTimeout(() => error.value = '', 3000)
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    const success = await sendToTelegram({
      name: form.name.trim(),
      phone: form.phone.trim(),
      guests: form.guests || 1,
      notes: form.notes.trim()
    })

    if (success) {
      submitted.value = true
      error.value = ''
    } else {
      error.value = 'Ошибка отправки. Попробуйте позже.'
    }
  } catch (err) {
    error.value = 'Ошибка соединения. Проверьте интернет.'
  } finally {
    isLoading.value = false
  }
}

const resetForm = () => {
  submitted.value = false
  form.name = ''
  form.phone = ''
  form.guests = 1
  form.notes = ''
  error.value = ''
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

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 6px 10px;
  background: #ffffff;
  border: 1px solid #1a1410;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #1a1410;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(0,0,0,0.02);
  border-color: #1a1410;
}

.form-group textarea {
  resize: vertical;
  min-height: 50px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
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

.btn-primary:hover:not(:disabled) {
  background: #000000;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-message {
  margin-top: 8px;
  padding: 6px 10px;
  border: 1px solid #8b0000;
  color: #8b0000;
  font-size: 13px;
  text-align: center;
  background: rgba(139, 0, 0, 0.02);
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

.witness-notes {
  font-size: 13px;
  color: #3d2f22;
  font-style: italic;
  margin-top: 6px !important;
  padding: 4px 12px;
  border: 1px dashed #1a1410;
  display: inline-block;
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

@media (max-width: 400px) {
  .case-block {
    padding: 12px 10px;
  }

  .witness-stamp {
    font-size: 15px;
    letter-spacing: 3px;
  }

  .witness-stamp-big {
    font-size: 24px;
    padding: 4px 18px;
    letter-spacing: 4px;
  }
}
</style>