"use client"

import Link from "next/link";
import Image from "next/image"
import styles from './style.module.css'
import useMediaQuery from "../../hooks/useMediaQuery"

const Header = () => {

	const mobile: boolean = useMediaQuery("(max-width: 1200px)");

	return (
		<header className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image fill src={"/logo.svg"} alt={"logo"} />
				</div>

				<div className={styles.phone}>
					{
						!mobile
							? <Link href={'tel:+74954954954'}>+7 (495) 495-49-54</Link>
							: <Link href={'tel:+74954954954'}>
								<Image width={24} height={24} src={"/phone.svg"} alt={"phone"} />
							</Link>
					}
				</div>
			</div>
		</header>
	)
}

export default Header;