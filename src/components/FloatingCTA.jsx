/**
 * フローティングCTA: スマホ閲覧時に画面下部に追従する「LINEで無料相談する」ボタン
 * md以上では非表示（ヘッダー・本文内CTAに任せる）
 */
import ShineAnchor from './ShineAnchor'

const LINE_URL = 'https://line.me/ti/p/AbtvfPG8Wt'

export default function FloatingCTA() {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-pb"
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
        >
            <div className="bg-white/95 backdrop-blur-md border-t border-[#062447]/10 border-gray-100 px-6 pt-4 pb-5 shadow-[0_-4px_20px_rgba(6,36,71,0.08)]">
                {/* マイクロコピー（ボタンのすぐ上） */}
                <div className="text-center mb-3 space-y-0.5 max-w-4xl mx-auto">
                    <p className="text-[#062447]/55 text-[11px] leading-tight">
                        ※強引な勧誘は一切ありません
                    </p>
                    <p className="text-[#062447]/55 text-[11px] leading-tight">
                        ※匿名相談OK
                    </p>
                </div>
                <ShineAnchor
                    href={LINE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full max-w-4xl mx-auto py-4 text-base font-bold text-white bg-[#06C755] hover:bg-[#05b64c] active:bg-[#049a42] rounded-2xl shadow-md transition duration-200 text-center"
                >
                    LINEで無料相談する
                </ShineAnchor>
            </div>
        </div>
    )
}
