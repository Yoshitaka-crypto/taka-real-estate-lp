import { useState } from 'react'
import takaImage from './assets/taka.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // ========== 表示切り替えフラグ ==========
  // メール相談を表示するか（false = LINE相談のみ表示）
  // 将来メール相談を復活させる場合は true に変更
  const showMailForm = false

  // メール送信先（※メール相談を有効にする際はここを実際のメールアドレスに変更）
  const CONTACT_EMAIL = 'your-email@example.com'

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          お名前: formData.name,
          連絡先: formData.contact,
          相談カテゴリ: formData.category,
          ご相談内容: formData.message || '（未入力）',
          _subject: '【困った不動産お悩み相談室】新しいお問い合わせ',
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('送信に失敗しました。お手数ですがLINEからお問い合わせください。')
      }
    } catch (error) {
      alert('送信に失敗しました。お手数ですがLINEからお問い合わせください。')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // PageContainer（920px）
  const pageContainer = "mx-auto w-full max-w-[920px] px-4 sm:px-6"
  
  // ReadableContainer（720px）
  const readableContainer = "mx-auto w-full max-w-[720px] px-4 sm:px-6"
  
  // セクション内の余白（呼吸：gapが主役なので控えめに）
  const sectionPadding = "py-10 sm:py-14"
  
  // 共通カードスタイル（見た目のみ：幅統一 + rounded/border/bg/shadow/backdrop-blur/padding）
  const cardItem = 
    "max-w-[720px] mx-auto rounded-[28px] border border-[#062447]/25 " +
    "bg-white/40 backdrop-blur-md shadow-[0_14px_40px_rgba(6,36,71,0.10)] " +
    "px-6 sm:px-10 py-6 sm:py-8"
  
  // カードスタック（並べ方のみ：縦の間隔を管理）
  const cardStack = "max-w-[720px] mx-auto space-y-6 sm:space-y-8"
  
  // 大きめカード（フォーム等）
  const largeCard = "bg-white/[0.62] border border-white/[0.38] rounded-[20px] shadow-[0_12px_28px_rgba(2,20,60,0.12)] backdrop-blur-xl p-5 sm:p-7"

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F6FF] via-[#C5E4FF] to-[#1E5AA8] text-[#062447]">
      
      {/* ========== Header ========== */}
      <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-40 border-b border-blue-900/10">
        <div className={pageContainer}>
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-lg text-[#062447]">困った不動産のお悩み相談室</div>
            <a
              href="https://line.me/ti/p/AbtvfPG8Wt"
              target="_blank"
              rel="noreferrer"
              className="text-sm bg-gradient-to-r from-emerald-500 to-green-400 text-white px-5 py-2.5 rounded-full font-medium shadow-lg shadow-green-500/20 hover:brightness-105 transition"
            >
              💬 LINEで相談する
            </a>
          </div>
        </div>
      </header>

      {/* ========== Hero / First View ========== */}
      <section>
        <div className={pageContainer}>
          <div className="py-16 sm:py-24 text-center">
            
            {/* サブラベル */}
            <p className="text-cyan-600 text-sm font-medium mb-4 tracking-wide">
              無料相談｜中立・安心
            </p>
            
            {/* ✅ Hero画像（コンテナ制約を外して全幅表示） */}
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-8">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop&q=80"
                alt="不動産相談イメージ"
                className="mx-auto w-full max-w-none h-48 sm:h-64 md:h-72 object-cover"
              />
            </div>
            
            {/* ✅ H1（色を濃紺で統一） */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062447] leading-tight mb-4">
              不動産の悩み、<br />
              まず"整理"から。
            </h1>
            
            {/* リード */}
            <p className="text-[#062447]/70 text-base sm:text-lg leading-[1.85] mb-10 max-w-md mx-auto">
              今すぐ決めなくて大丈夫。<br />
              論点と順番を整える、無料相談です。
            </p>

            {/* メインCTA */}
            <div className="max-w-sm mx-auto mb-4">
              <a
                href="https://line.me/ti/p/AbtvfPG8Wt"
                target="_blank"
                rel="noreferrer"
                className="block w-full py-4 sm:py-5 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-green-400 rounded-full shadow-[0_18px_50px_rgba(34,197,94,0.25)] hover:brightness-105 transition"
              >
                💬 LINEで相談する
              </a>
            </div>
            <p className="text-[#062447]/50 text-xs">
              営業なし ｜ 即日対応 ｜ お話を聞くだけOK
            </p>
          </div>
        </div>
      </section>

      {/* ========== メインコンテンツ（space-y でセクション間の外側余白を確保） ========== */}
      <main className="flex flex-col space-y-16 sm:space-y-24 outline outline-4 outline-red-500">

      {/* ========== こんなお悩みありませんか？ ========== */}
      <section id="problems" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">Problems</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062447]">
                こんなお悩みありませんか？
              </h2>
            </div>

            {/* 悩みカード：1項目ずつ独立 */}
            <div className={cardStack}>
              {[
                '売るか住み続けるか、決めきれない',
                '相続・共有名義で話が進まない',
                '住宅ローン・住み替えの順番が分からない',
                '業者に相談すると売り込まれそうで怖い',
              ].map((item, i) => (
                <div key={i} className={cardItem}>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-500 text-lg font-bold flex-shrink-0">✓</span>
                    <span className="text-[#062447]/90 leading-[1.85] text-[15px] sm:text-base">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://line.me/ti/p/AbtvfPG8Wt"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-3 text-white bg-gradient-to-r from-emerald-500 to-green-400 rounded-full font-medium shadow-lg shadow-green-500/20 hover:brightness-105 transition"
              >
                💬 LINEで相談する
              </a>
              <p className="mt-3 text-[#062447]/50 text-xs">話を聞くだけでもOK</p>
            </div>
        </div>
      </section>

      {/* ========== 相談で整理する3つのこと ========== */}
      <section id="steps" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">3 Steps</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-3">
                相談で整理する3つのこと
              </h2>
              <p className="text-[#062447]/70 text-sm leading-[1.85]">
                判断ではなく、「順番」を整えます。
              </p>
            </div>

            {/* 3ステップ：1項目ずつ独立カード */}
            <div className={cardStack}>
              {[
                { step: '01', title: '目的の整理', desc: '何を大切にしたいのか。何を優先したいのか。\nまずはあなたにとっての「ゴール」を、明確にします。' },
                { step: '02', title: '制約の整理', desc: 'お金・期限・関係者など、\n変更できない条件を整理し、現実的な前提を明確にさせます。' },
                { step: '03', title: '選択肢の整理', desc: '売る・貸す・保有・住み替えなど、\n考えられる選択肢を並べて、冷静に比較します。' },
              ].map((item, i) => (
                <div key={i} className={cardItem}>
                  <div className="flex gap-4 items-start">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#062447] mb-2">{item.title}</h3>
                      <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] whitespace-pre-line">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 補足カード */}
            <div className={`${cardItem} text-center`}>
              <p className="text-cyan-600 text-sm">
                💡 するべきことだけでなく「今は決めなくていいこと」も、あらかじめ整理します
              </p>
            </div>
        </div>
      </section>

      {/* ========== 相談後に得られること ========== */}
      <section id="results" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">Results</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-3">
                相談後に得られること
              </h2>
              <p className="text-[#062447]/70 text-sm leading-[1.85]">
                決断を迫りません。<br />
                安心のための整理がゴールです。
              </p>
            </div>

            {/* 得られること：1項目ずつ独立カード */}
            <div className={cardStack}>
              {[
                { icon: '📋', text: '今やるべきことが見える' },
                { icon: '⏸️', text: '急がなくていいものがわかる' },
                { icon: '⚠️', text: '注意すべきポイントが把握できる' },
              ].map((item, i) => (
                <div key={i} className={cardItem}>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="text-[#062447]/90 font-medium leading-[1.85] text-[15px] sm:text-base">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://line.me/ti/p/AbtvfPG8Wt"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-10 py-4 text-lg text-white bg-gradient-to-r from-emerald-500 to-green-400 rounded-full font-bold shadow-[0_18px_50px_rgba(34,197,94,0.25)] hover:brightness-105 transition"
              >
                💬 LINEで相談する
              </a>
              <p className="mt-3 text-[#062447]/50 text-xs">話を聞くだけでもOK</p>
            </div>
        </div>
      </section>

      {/* ========== 相談員について ========== */}
      <section id="about" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">About</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062447]">
                相談員について
              </h2>
            </div>

            {/* プロフィールカード（下余白を追加してチップ群との距離を確保） */}
            <div className={`${largeCard} pb-10 sm:pb-12`}>
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={takaImage}
                  alt="Takaさん（相談員）"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg shadow-blue-500/20 mb-4"
                />
                <p className="font-bold text-[#062447] text-lg">Takaさん</p>
                <p className="text-[#062447]/50 text-sm">困った不動産お悩み相談室 相談員</p>
              </div>
              
              {/* カード内の区切り線 */}
              <div className="mx-auto my-5 sm:my-7 h-px w-full max-w-full rounded-full bg-[#062447]/[0.18]" />
              
              {/* ✅ 文章エリア（左右2文字分の余白＋行間・段落間を広く） */}
              <div className="px-[1.8em] py-[1.4em] sm:px-[2em] sm:py-[1.5em]">
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  不動産業界で約10年。<br />
                  売買仲介から複雑な権利調整まで、数多くの案件と向き合ってきました。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  業界にいると「売るため」「契約するため」の力が働きがち。<br />
                  でも本当に必要なのは、まず状況を整理すること。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-0">
                  専門家に丸投げする前に、全体像を整理し、無理のない選択肢を一緒に考える。<br />
                  そんな「壁打ち相手」でありたいと思っています。
                </p>
              </div>
            </div>

            {/* ✅ SNSリンク（PC: 4列 / SP: 2列×2行） */}
            {(() => {
              const socials = [
                { label: '𝕏', name: 'X', href: 'https://x.com/t_fudosan_' },
                { label: '▶️', name: 'YouTube', href: 'https://www.youtube.com/channel/UCXj6VDr0Wur_DloCDewHMUw' },
                { label: '@', name: 'Threads', href: 'https://www.threads.com/@t.fudosan?hl=ja' },
                { label: '📷', name: 'Instagram', href: 'https://www.instagram.com/t.fudosan/' },
                { label: '📝', name: 'note', href: 'https://note.com/merry_hornet4114' }, // note追加
              ]
              return (
                <div className="grid grid-cols-2 gap-5">
                  {socials.map((sns, i) => (
                    <a
                      key={i}
                      href={sns.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full h-14 inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.55] border border-white/[0.30] shadow-sm text-[#062447]/85 text-base font-semibold hover:bg-white/[0.70] hover:shadow-md transition"
                    >
                      <span className="text-lg">{sns.label}</span>
                      <span>{sns.name}</span>
                    </a>
                  ))}
                </div>
              )
            })()}
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">FAQ</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062447]">
                よくあるご質問
              </h2>
            </div>

            {/* FAQ：1問ずつ独立カード */}
            <div className={cardStack}>
              {[
                { q: '無料の範囲は？', a: '相談は完全無料です。\nその後の不動産のお手続きが必要な場合のみ、正規報酬を頂戴いたします。' },
                { q: '売却前提ですか？', a: 'いいえ、売却前提ではありません。\n「売らない」という結論もあり得ます。' },
                { q: '相談後に営業されませんか？', a: 'しつこい営業は一切しません。\n判断はご本人にお任せします。' },
                { q: '匿名でも相談できますか？', a: '初回は匿名でも構いません。\n具体的なアドバイスには情報が必要になる場合があります。' },
                { q: '税金や法律の判断も？', a: '一般的な回答の範囲内であれば可能です。\n専門的な判断は適切な専門家をご紹介します。' },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.55] border border-white/[0.35] rounded-[18px] shadow-[0_12px_28px_rgba(2,20,60,0.10)] backdrop-blur-xl px-5 py-5 sm:px-6 sm:py-6">
                  {/* Q（ぶら下げインデント：余白調整済み） */}
                  <p className="relative pl-[4.5em] font-bold text-[#062447] mb-4">
                    <span className="absolute left-[2em] top-0 text-cyan-500 font-bold">Q.</span>
                    {item.q}
                  </p>
                  {/* A（ぶら下げインデント：余白調整済み） */}
                  <p className="relative pl-[4.5em] text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] whitespace-pre-line">
                    <span className="absolute left-[2em] top-0 text-cyan-500 font-bold">A.</span>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* ========== 最終CTA + フォーム ========== */}
      <section id="form" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                決断の前に、<br />状況を整理する時間を。
              </h2>
              <p className="text-white/70 text-sm leading-[1.85]">
                迷いが増える前に、<br />
                論点だけ先に整えておくのも一つの手です。
              </p>
            </div>

            {/* ✅ LINE相談カード */}
            <div className="mx-auto w-full max-w-[720px] sm:max-w-[60%] bg-white/[0.62] border border-white/[0.38] rounded-2xl shadow-[0_12px_28px_rgba(2,20,60,0.12)] backdrop-blur-xl p-6 sm:p-8">
              <div className="text-center">
                <p className="text-cyan-600 text-xs font-semibold tracking-wide uppercase mb-2">
                  {showMailForm ? 'Line / Mail' : 'Line'}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-[#062447]">
                  {showMailForm ? 'LINE相談とメール相談、どちらでもOK' : 'LINEで気軽にご相談ください'}
                </h3>
                <p className="mt-2 text-[#062447]/70 text-sm leading-[1.85]">
                  {showMailForm ? (
                    <>まずは気軽にLINEで。<br className="sm:hidden" />文章を残したい方はメールでも受け付けています。</>
                  ) : (
                    <>お悩みをお聞かせください。<br />一緒に状況を整理しましょう。</>
                  )}
                </p>
              </div>

              <div className={`mt-6 ${showMailForm ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : ''}`}>
                <a
                  href="https://line.me/ti/p/AbtvfPG8Wt"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-bold text-white bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_18px_50px_rgba(34,197,94,0.25)] hover:brightness-105 transition"
                >
                  <span className="text-lg">💬</span>
                  LINEで相談する
                </a>

                {/* メール相談ボタン（showMailForm === true のときのみ表示） */}
                {showMailForm && (
                  <a
                    href="#mail"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_18px_50px_rgba(34,211,238,0.25)] hover:brightness-105 transition"
                  >
                    <span className="text-lg">✉️</span>
                    メールで相談する
                  </a>
                )}
              </div>

              <p className="mt-4 text-center text-[#062447]/50 text-xs">
                営業なし ｜ 即日対応 ｜ お話を聞くだけOK
              </p>
            </div>

            {/* メールフォーム（showMailForm === true のときのみ表示） */}
            {showMailForm && (
              <>
                {isSubmitted ? (
                  <div className="bg-white/[0.62] border border-white/[0.38] rounded-2xl shadow-[0_12px_28px_rgba(2,20,60,0.12)] backdrop-blur-xl p-6 sm:p-8 text-center">
                    <div className="text-4xl mb-4">✉️</div>
                    <h3 className="font-bold text-[#062447] text-xl mb-3">送信完了しました</h3>
                    <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85]">
                      2営業日以内にご連絡いたします。
                    </p>
                  </div>
                ) : (
                  <form id="mail" onSubmit={handleSubmit} className="bg-white/[0.62] border border-white/[0.38] rounded-2xl shadow-[0_12px_28px_rgba(2,20,60,0.12)] backdrop-blur-xl p-6 sm:p-8">
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[#062447]/80 text-sm font-medium px-1 py-2 mb-1">お名前</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="山田 太郎（ニックネームOK）"
                          className="w-full px-4 py-3 h-12 bg-white/[0.85] border border-blue-900/10 rounded-xl text-[#062447] placeholder-[#062447]/40 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[#062447]/80 text-sm font-medium px-1 py-2 mb-1">連絡先</label>
                        <input
                          type="text"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="example@email.com"
                          className="w-full px-4 py-3 h-12 bg-white/[0.85] border border-blue-900/10 rounded-xl text-[#062447] placeholder-[#062447]/40 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[#062447]/80 text-sm font-medium px-1 py-2 mb-1">相談カテゴリ</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 h-12 bg-white/[0.85] border border-blue-900/10 rounded-xl text-[#062447] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition"
                          required
                        >
                          <option value="">選択してください</option>
                          <option value="売却">売却について</option>
                          <option value="購入">購入について</option>
                          <option value="相続">相続について</option>
                          <option value="住み替え">住み替えについて</option>
                          <option value="賃貸">賃貸について</option>
                          <option value="その他">その他・まだ分からない</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#062447]/80 text-sm font-medium px-1 py-2 mb-1">ご相談内容（任意）</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="現在の状況や気になっていることを&#10;自由にお書きください"
                          rows="4"
                          className="w-full px-4 py-4 min-h-[140px] bg-white/[0.85] border border-blue-900/10 rounded-xl text-[#062447] placeholder-[#062447]/40 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition resize-none"
                        />
                      </div>
                    </div>

                    <div className="mt-8">
                      <button
                        type="submit"
                        className="w-full py-4 text-white font-bold bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_18px_50px_rgba(34,211,238,0.25)] hover:brightness-105 transition"
                      >
                        無料で相談する
                      </button>
                      <p className="mt-4 text-[#062447]/50 text-xs text-center">
                        営業なし ｜ 即日対応 ｜ お話を聞くだけOK
                      </p>
                    </div>
                  </form>
                )}
              </>
            )}
        </div>
      </section>

      </main>
      {/* ========== /メインコンテンツ ========== */}

      {/* ========== Footer ========== */}
      <footer className="border-t border-white/20">
        <div className={pageContainer}>
          <div className="py-10 text-center text-sm text-white/70">
            <p className="mb-2">不動産相談室</p>
            <p>&copy; 2025 All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* ========== Sticky CTA（スマホ用） ========== */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-blue-900/10 p-4 sm:hidden z-50">
        <a
          href="https://line.me/ti/p/AbtvfPG8Wt"
          target="_blank"
          rel="noreferrer"
          className="block w-full py-4 text-center text-white font-bold bg-gradient-to-r from-emerald-500 to-green-400 rounded-full shadow-lg shadow-green-500/20"
        >
          💬 LINEで相談する
        </a>
        <p className="mt-2 text-[#062447]/50 text-xs text-center">
          営業なし ｜ 即日対応 ｜ お話を聞くだけOK
        </p>
      </div>

      {/* スマホ用余白 */}
      <div className="h-28 sm:hidden" />
    </div>
  )
}

export default App
