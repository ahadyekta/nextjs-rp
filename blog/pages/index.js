import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export default function Blog() {
  const { t } = useTranslation('common')
  const router = useRouter()

  
  return (
    <div>
      <h3>This is our blog</h3>
      <h4>{t('testTranslation')}</h4>
      <ul>
        <li>
          <a href={`/${router.locale}/blog/post/1`} locale={false}>
            Post 1
          </a>
        </li>
        <li>
          <a href={`/${router.locale}/blog/post/2`} locale={false}>
            Post 2
          </a>
        </li>
      </ul>
      <div>
        <a href="/">English Home page</a>
      </div>
      <div>
        <a href="/de">German Home page</a>
      </div>
      <div>
        <a href="/de/blog">German Blog</a>
      </div>
      <div>
        <a href="/en/blog">English Blog</a>
      </div>
      <hr />
      <div>
        active locale is {router.locale}
      </div>
    </div>
  )
}
