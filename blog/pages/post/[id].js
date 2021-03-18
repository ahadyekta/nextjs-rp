import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      }
    ],
    fallback: false,
  }
}

export default function Post() {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div>
      <h3>Post #{router.query.id}</h3>
      <h4>{t('testTranslation')}</h4>
      <p>Lorem ipsum</p>
      <Link href="/">
        <a>Back to blog</a>
      </Link>
    </div>
  )
}
