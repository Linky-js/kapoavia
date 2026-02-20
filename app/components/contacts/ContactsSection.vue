<script setup>
import { ref } from 'vue'

const copiedIndex = ref(null)

function stripHtml(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.innerText
}

async function copyText(text, index) {
  const чистыйТекст = stripHtml(text)

  try {
    await navigator.clipboard.writeText(чистыйТекст)
    copiedIndex.value = index

    setTimeout(() => {
      copiedIndex.value = null
    }, 1500)
  } catch (e) {
    console.error('Ошибка копирования', e)
  }
}
const contactsGroup = [
  {
    label: 'Реквизиты',
    items: [
      {
        label: 'Полное наименование:',
        text: 'Акционерное общество «КАПО Авиа»'
      },
      {
        label: 'Сокращённое наименование:',
        text: 'АО «КАПО Авиа»'
      },
      {
        label: 'ИНН',
        text: '1661006853'
      },
      {
        label: 'КПП',
        text: '166101001'
      },
      {
        label: 'ОГРН',
        text: '1021603881947 '
      },
    ]
  },
  {
    label: 'Адреса',
    items: [
      {
        label: 'Юридический адрес:',
        text: '420127, Россия, РТ, г. Казань,<br> ул. Дементьева, д.70А, офис 213'
      },
      {
        label: 'Фактический адрес:',
        text: '420127, Россия, РТ, г. Казань,<br> ул. Дементьева, д.70А, офис 213'
      }
    ]
  },
  {
    label: 'Контакты',
    items: [
      {
        label: 'Телефон',
        text: '+7 999 999 99 99'
      },
      {
        label: 'E-mail',
        text: 'capoavia@gmail.com'
      }
    ]
  },
  {
    label: 'Контакты отдела кадров АО «КАПО Авиа»',
    items: [
      {
        label: 'Телефон',
        text: '+7 999 999 99 99'
      },
      {
        label: 'E-mail',
        text: 'capoavia@gmail.com'
      }
    ]
  },
  {
    label: 'Карта',
    items: [
      {
        label: 'Адрес',
        text: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abdb28b198d98ebb89247499a530cccc692085a0551ff10012f07d7e4532e62cd&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>'
      }
    ]
  }
]
</script>
<template>
  <section class="production block">
    <div class="container">
      <div class="production__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Контакты
        </div>
        <div class="production__info">
          <div class="production__head">
            <h2 class="head-h2">Контакты</h2>
          </div>
        </div>
        <div v-for="cg in contactsGroup" class="contact__group">
          <div class="head-h3">{{ cg.label }}</div>

          <div class="production__items">
            <div class="production__item" v-for="(item, index) in cg.items" :key="index" :class="{w100: item.label === 'Адрес'}">
              <div class="label">{{ item.label }}</div>

              <div class="link-wrapper">
                <a class="link" v-html="item.text" @click.prevent="copyText(item.text, cg.label + index)"></a>

                <span v-if="copiedIndex === cg.label + index" class="tooltip">
                  Скопировано
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.link-wrapper {
  position: relative;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  bottom: -32rem;
  left: 0;
  background: #262d3f;
  color: #fff;
  padding: 6rem 12rem;
  border-radius: 6rem;
  font-size: 14rem;
  white-space: nowrap;
  opacity: 0;
  animation: fadeIn 0.2s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.production__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
  padding-bottom: 100rem;
}

.production__info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 30rem;
}

.production__head {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.production__items {
  margin-top: 14rem;
  display: flex;
  gap: 8rem;
  flex-wrap: wrap;
}

.production__item {
  display: flex;
  padding: 30rem;
  background: rgba(38, 45, 63, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20rem;
  width: 632rem;
}

.w100 {
  width: 100%;
  height: 500rem;
}
.w100 .link-wrapper {
  width: 100%;
  height: 100%;
}

.head-h3 {
  font-weight: 500;
  font-size: 26rem;
  line-height: 100%;
  color: #262d3f;
}

.link {
  font-weight: 500;
  font-size: 26rem;
  line-height: 100%;
  color: #262d3f;
}

.label {
  font-weight: 300;
  font-size: 16rem;
  line-height: 130%;
  color: rgba(38, 45, 63, 0.7);
}

@media screen and (max-width: 768px) {
  .label {
    font-size: 14px;
  }

  .link {
    font-size: 18px;
  }

  .production__content {
    gap: 30px;
    padding-bottom: 50px;
  }

  .production__info {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .production__head {
    gap: 20px;
  }

  .production__items {
    gap: 20px;
    margin-top: 20px;
  }

  .production__item {
    flex-direction: column;
    padding: 10px;
    gap: 20px;
  }

  .production__image {
    width: 100%;
    height: auto;
  }

  .production__item-info {

    font-size: 18px;
  }

  .head-h3 {
    font-size: 20px;
  }

  .production__list {
    padding-left: 15px;
  }

  .production__list-item {
    font-size: 14px;
  }
}
</style>