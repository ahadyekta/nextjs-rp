import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Header = dynamic(import('../components/Header'))

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export default function Home() {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div>
      <h1>Homepage</h1>
      <h4>{t('testTranslation')}</h4>

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
