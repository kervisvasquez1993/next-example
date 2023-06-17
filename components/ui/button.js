import Link from "next/link";
import style from "./btn.module.css";
const BtnPrimary = ({ link, children }) => {
    return (
        <Link href={link} className={style.btn}>
            {children}
        </Link>
    );
};

export default BtnPrimary;
