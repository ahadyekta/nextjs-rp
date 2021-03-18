import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

const About = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h4>{t('testTranslation')}</h4>
      <p>This is the about page.</p>
      <div>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
      <img width={200} src="/static/zeit.png" />
    </div>
  )
}

export default About
