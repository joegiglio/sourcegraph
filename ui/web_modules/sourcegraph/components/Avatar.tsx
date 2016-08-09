// tslint:disable

import * as React from "react";
import * as styles from "./styles/avatar.css";
import * as classNames from "classnames";

const PLACEHOLDER_IMAGE = "https://secure.gravatar.com/avatar?d=mm&f=y&s=128";

function Avatar({className, size, img}: {className?: any, size: any, img: any}) {
	return (
		<img className={classNames(className, sizeClasses[size] || styles.small)} src={img || PLACEHOLDER_IMAGE} />
	);
}
type Props = {
	img?: string,
	size?: string,
	className?: string,
};

const sizeClasses = {
	"tiny": styles.tiny,
	"small": styles.small,
	"medium": styles.medium,
	"large": styles.large,
};

export default Avatar;
