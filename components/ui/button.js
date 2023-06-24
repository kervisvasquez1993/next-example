import Link from "next/link";
import style from "./btn.module.css";
const BtnPrimary = ({ link = "", children }) => {
    if (link) {
        return (
            <Link href={link} className={style.btn}>
                {children}
            </Link>
        );
    }
    return <button className={style.btn}>{children}</button>;
};

export default BtnPrimary;
