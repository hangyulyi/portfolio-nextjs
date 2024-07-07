import Layout from "./layout";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./components/LocaleSwitcher";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <Layout>
      <div>
        <LocaleSwitcher />
      </div>
      <div>
        <h1>{t('title')}</h1>
      </div>
    </Layout>
  );
}
