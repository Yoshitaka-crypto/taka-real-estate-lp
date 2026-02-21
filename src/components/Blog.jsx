import { useState, useEffect } from 'react'
import takaImage from '../assets/taka.png'

export default function Blog() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const RSS_URL = 'https://note.com/merry_hornet4114/rss'
    // CORS回避のためにalloriginsを使用
    const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(API_URL)
                const data = await response.json()

                if (data.contents) {
                    const parser = new DOMParser()
                    const xmlDoc = parser.parseFromString(data.contents, "text/xml")
                    const items = xmlDoc.querySelectorAll("item")

                    const feedItems = Array.from(items).map(item => {
                        const title = item.querySelector("title")?.textContent
                        const link = item.querySelector("link")?.textContent
                        const pubDate = item.querySelector("pubDate")?.textContent
                        const description = item.querySelector("description")?.textContent
                        // noteのRSSは media:thumbnail タグに画像URLが入っている
                        // getElementsByTagNameは以前のブラウザ互換性も高い
                        const thumbnail = item.getElementsByTagName("media:thumbnail")[0]?.textContent

                        return {
                            title,
                            link,
                            pubDate,
                            description,
                            thumbnail,
                            guid: item.querySelector("guid")?.textContent
                        }
                    })
                    // 以前は最大数を制限していなかったので、そのまま全てセットするか、必要ならsliceする
                    setPosts(feedItems)
                } else {
                    throw new Error('Failed to fetch RSS feed')
                }
            } catch (err) {
                console.error(err)
                setError('記事の読み込みに失敗しました。')
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    // コンテナ（幅制限・中央・余白）
    const pageContainer = "mx-auto w-full max-w-4xl px-6 sm:px-8"

    // 共通カードスタイル（内側余白・シャドウ）
    const cardItem =
        "flex flex-col h-full rounded-3xl border border-[#062447]/10 border-gray-100/50 " +
        "bg-white/60 backdrop-blur-md shadow-md hover:shadow-lg transition overflow-hidden"

    // 日付フォーマット用関数
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    }

    // HTMLタグ除去用関数（本文プレビュー用）
    const stripHtml = (html) => {
        if (!html) return ""
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.body.textContent || ""
    }

    // 記事タグ（相続・売却などで迷っている方へ）— インデックスでローテーション
    const articleTags = [
        '相続・売却で迷っている方へ',
        '売却・購入で迷っている方へ',
        '購入・住み替えで迷っている方へ',
        '不動産の悩みで迷っている方へ',
    ]

    return (
        <div className="min-h-screen pb-20">
            {/* Header Spacer (Sticky header分) */}
            <div className="h-[80px]" />

            <div className={pageContainer}>
                <div className="py-16 sm:py-20 text-center mb-10">
                    <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">Column</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-4">
                        お悩み解決コラム
                    </h2>
                    <p className="text-[#062447]/60 text-sm">
                        noteで発信している最新記事です
                    </p>
                </div>

                {loading ? (
                    // ローディング表示
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin h-10 w-10 border-4 border-[#0A2540] border-t-transparent rounded-full"></div>
                    </div>
                ) : error ? (
                    // エラー表示
                    <div className="text-center py-20 text-red-500">
                        {error}
                    </div>
                ) : (
                    // 記事グリッド
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => {
                            // RSSから直接取得したthumbnailを使用
                            // なければdescription内の画像を探すなどが考えられるが、noteは基本的にthumbnailがある
                            const thumbnail = post.thumbnail
                            const tagLabel = articleTags[index % articleTags.length]

                            return (
                                <a
                                    key={post.guid}
                                    href={post.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group block h-full text-left"
                                >
                                    <article className={cardItem}>
                                        {/* サムネイル画像 */}
                                        <div className="aspect-video w-full bg-gray-100 overflow-hidden relative">
                                            {thumbnail ? (
                                                <img
                                                    src={thumbnail}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center w-full h-full text-gray-300">
                                                    <span className="text-4xl">📝</span>
                                                </div>
                                            )}
                                            {/* noteロゴバッジ（お好みで） */}
                                            <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-[#23c19a] shadow-sm">
                                                note
                                            </div>
                                        </div>

                                        {/* コンテンツ */}
                                        <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                            {/* タグ（〇〇で迷っている方へ） */}
                                            <span className="inline-block text-[11px] font-medium text-[#1D2B44] bg-[#E8F6FF] border border-[#1D2B44]/15 rounded-full px-2.5 py-1 mb-3 w-fit">
                                                {tagLabel}
                                            </span>
                                            {/* 日付 */}
                                            <p className="text-xs text-[#062447]/50 mb-2">
                                                {formatDate(post.pubDate)}
                                            </p>
                                            {/* タイトル */}
                                            <h3 className="text-[#062447] font-bold leading-relaxed mb-3 group-hover:text-blue-600 transition line-clamp-2">
                                                {post.title}
                                            </h3>
                                            {/* 本文プレビュー（descriptionから生成） */}
                                            <p className="text-[#062447]/60 text-xs leading-relaxed line-clamp-3 mb-4 flex-grow">
                                                {stripHtml(post.description)}
                                            </p>
                                            {/* 著作者（固定） */}
                                            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-[#062447]/5">
                                                <img src={takaImage} alt="Taka" className="w-6 h-6 rounded-full" />
                                                <span className="text-xs text-[#062447]/50">Taka</span>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            )
                        })}
                    </div>
                )}

                {/* noteへのリンク */}
                <div className="text-center mt-12">
                    <a
                        href="https://note.com/merry_hornet4114"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-8 py-3 rounded-full border border-[#062447]/20 text-[#062447] font-bold text-sm hover:bg-[#062447]/5 transition"
                    >
                        noteですべての記事を見る →
                    </a>
                </div>
            </div>
        </div>
    )
}
