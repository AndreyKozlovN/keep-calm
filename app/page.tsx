import Header from "@/components/header"
import TextBlock from "@/components/textBlock"
import styles from './page.module.css'
import Footer from "@/components/footer";

const defaultTitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  defaultDescription = `<p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>`;

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>ut aliquip ex ea commodo consequat</h2>

          <TextBlock
            bigMarginTop
            image={"/images/1.jpg"}
            title={defaultTitle}
            description={defaultDescription} />

          <TextBlock
            reverse
            image={"/images/2.jpg"}
            title={defaultTitle}
            description={defaultDescription} />

          <div>Слайдер</div>

          <h2 className={styles.title}>ut aliquip ex ea commodo consequat</h2>

          <TextBlock
            bigMarginTop
            image={"/images/3.jpg"}
            title={defaultTitle}
            description={defaultDescription} />

          <TextBlock
            reverse
            image={"/images/4.jpg"}
            title={defaultTitle}
            description={defaultDescription} />
        </div>
      </main>
      <Footer />
    </>
  )
}
