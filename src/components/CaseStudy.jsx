/**
 * 事例セクション：相談前→相談後の変化をシンプルな対比で伝える
 */
export default function CaseStudy() {
    const sectionPadding = "py-16 sm:py-20"
    const pageContainer = "max-w-4xl mx-auto px-6 sm:px-8"

    const cases = [
        {
            before: '情報が多すぎて、相続した実家を「売る」か「残す」か、何から手をつけていいか分からない状態だった。',
            after: '「今すぐやること」と「後でいいこと」が明確になり、迷わず次のステップへ進めるようになった。',
        },
        {
            before: '今の家を売却すべきか、住み続けるべきか。堂々巡りで判断できず、何年も身動きがとれずにいた。',
            after: '状況と選択肢がスッキリ整理され、「自分にとってベストな決断」を自信を持って下せるようになった。',
        },
        {
            before: 'まだ売ると決めていないため、強引に営業されそうな不動産屋には怖くて相談に行けなかった。',
            after: '一切の売り込みなしでフラットに話を聞いてもらえ、不安だった頭の中が整理されて驚くほど軽くなった。',
        },
    ]

    // 曇り・迷いアイコン（Before用）
    const IconBefore = () => (
        <svg className="w-6 h-6 text-[#062447]/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    )
    // チェック・晴れアイコン（After用）
    const IconAfter = () => (
        <svg className="w-6 h-6 text-[#1D2B44] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    )

    return (
        <section id="case-study" className={sectionPadding}>
            <div className={pageContainer}>
                {/* タグライン：目を引くメッセージ */}
                <div className="text-center mb-12 sm:mb-16 px-4">
                    <p className="inline-block text-[#1D2B44] text-base sm:text-lg font-bold leading-relaxed bg-[#E8F6FF] border border-[#1D2B44]/15 rounded-2xl py-4 px-6 sm:px-8 shadow-sm">
                        知識がないから判断できないのではありません。<br className="sm:hidden" />
                        <span className="text-[#0C4A6E]">整理していないだけです。</span>
                    </p>
                </div>

                {/* セクション見出し */}
                <div className="text-center mb-10 sm:mb-12">
                    <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">Case</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-4">
                        相談前と相談後の変化
                    </h2>
                    <p className="text-[#062447]/70 text-sm sm:text-base leading-[1.85]">
                        こんなお悩みから、こんな変化がありました
                    </p>
                </div>

                {/* 事例カード（Before → After） */}
                <div className="space-y-8 sm:space-y-10">
                    {cases.map((item, i) => (
                        <article
                            key={i}
                            className="rounded-3xl bg-white shadow-md border border-gray-100 overflow-hidden"
                        >
                            {/* モバイル：縦並び / デスクトップ：横並び（flexでバランス調整） */}
                            <div className="flex flex-col md:flex-row md:items-stretch md:gap-6">
                                {/* Before（左/上）：薄いグレー */}
                                <div className="flex-1 bg-gray-50 p-6 sm:p-8 flex flex-col justify-center">
                                    <p className="text-xs font-bold text-[#062447]/50 uppercase tracking-wide mb-3 flex items-center gap-2">
                                        <IconBefore />
                                        相談前の悩み
                                    </p>
                                    <p className="text-[#062447]/80 text-[15px] sm:text-base leading-[1.9]">
                                        {item.before}
                                    </p>
                                </div>

                                {/* 中間：矢印のみ（控えめなグレー） */}
                                <div className="flex items-center justify-center py-3 md:py-0 md:px-2 shrink-0">
                                    <span className="text-2xl text-gray-400" aria-hidden>→</span>
                                </div>

                                {/* After（右/下）：白・ネイビー太字 */}
                                <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                                    <p className="text-xs font-bold text-[#1D2B44] uppercase tracking-wide mb-3 flex items-center gap-2">
                                        <IconAfter />
                                        相談後の変化
                                    </p>
                                    <p className="text-[#1D2B44] text-[15px] sm:text-base leading-[1.9] font-bold">
                                        {item.after}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
