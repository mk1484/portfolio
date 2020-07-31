import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default () =>(
    <div>
        <SEO />
        <Layout>
            <div className="eyecatch">
                <figure>
                    <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
                </figure>
            </div>
            <article className="content">
                <div className="container">
                    <h1 className="bar">記事のタイトル</h1>
                    <aside className="info">
                        <time dateTime="XXXX-XX-XX"><i className="far fa-clock" />XXXX年XX月XX日</time>
                        <div className="cat">
                            <i className="far fa-folder-open" />
                            <ul>
                                <li className="スラッグ">カテゴリーＡ</li>
                                <li className="スラッグ">カテゴリーＢ</li>
                            </ul>
                        </div>
                    </aside>
                    <div className="postbody">
                        <p>
                            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                        </p>
                    </div>
                    <ul className="postlink">
                        <li className="prev">
                            <a href="base-blogpost.html" rel="prev">
                                <i className="fas fa-chevron-left" />
                                <span>前の記事</span>
                            </a>
                        </li>
                        <li className="next">
                            <a href="base-blogpost.html" rel="next">
                                <span>次の記事</span>
                                <i className="fas fa-chevron-right" />
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </Layout>
    </div>
)
