// src/services/telegram.js

const BOT_TOKEN = '8932672064:AAH0UwpZtkbSapmT9TEr3xjfNeZwA2LSDHI'
const CHAT_ID = '5550326340'          // ← ВСТАВЬ СВОЙ ID

export const sendToTelegram = async (data) => {
    try {
        // Формируем красивое сообщение
        let message = '📋 НОВАЯ ЗАЯВКА\n'
        message += '═══════════════════\n\n'

        message += `👤 ФИО: ${data.name}\n`
        message += `📱 Телефон: ${data.phone}\n`
        message += `👥 Гостей: ${data.guests}\n`

        if (data.notes) {
            message += `📝 Примечания: ${data.notes}\n`
        }

        message += `\n═══════════════════\n`
        message += `🕐 ${new Date().toLocaleString('ru-RU')}`

        // Отправляем запрос к Telegram API
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result.ok
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error)
        return false
    }
}