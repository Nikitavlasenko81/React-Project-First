import React from "react"
import styles from "./Post.module.css"
import Media from "react-bootstrap/Media";

function Post(props) {
    return (
        <Media className={`${styles.post} mb-3`}>
            <img
                width={64}
                height={64}
                className="mr-3"
                src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                alt="Avatar"
            />
            <Media.Body>
                <div className={styles.namePost}>
                    <a href="#">Kyle Murray</a>
                </div>
                <p>
                    {props.message}
                </p>
            </Media.Body>
            <div className={styles.infoOfPost}>
                <ul>
                    <li>2 months ago</li>
                    <li>&nbsp;10 Min Read</li>
                </ul>
            </div>
        </Media>
    )
}

export default Post