// Глобальный хелпер для определения типа устройства
import { ref, onMounted } from 'vue'

export function useDeviceType() {
  const isMobile = ref(false)

  function checkDevice() {
    // Можно использовать userAgent или ширину экрана
    isMobile.value = window.innerWidth <= 768
  }

  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)
  })

  return { isMobile }
}
