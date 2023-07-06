import Image from "next/image"
import cn from "classnames";
import styles from "./style.module.css"

interface TextBlock {
	image: string;
	reverse?: boolean;
	bigMarginTop?: boolean;
	title: string;
	description: string;
}

const TextBlock = ({
	image,
	reverse = false,
	bigMarginTop = false,
	title,
	description
}: TextBlock) => {

	return (
		<section className={cn(styles.wrapper, {
			[styles.bigMarginTop]: bigMarginTop,
			[styles.reverse]: reverse
		})}>
			<div className={cn(styles.image, {
				[styles.reverseImage]: reverse
			})}>
				<Image fill src={image} alt={'picture'} />
			</div>

			<div className={cn(styles.description, {
				[styles.reverseDescription]: reverse
			})}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.text} dangerouslySetInnerHTML={{ __html: description }} />
			</div>
		</section>
	)
}

export default TextBlock