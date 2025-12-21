import { useState } from 'react'
import takaImage from './assets/taka.png'
import heroImage from './assets/hero.png'
import xIcon from './assets/social/x.svg'
import youtubeIcon from './assets/social/youtube.svg'
import threadsIcon from './assets/social/threads.svg'
import instagramIcon from './assets/social/instagram.svg'
import noteIcon from './assets/social/note.svg'

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
              className="text-sm bg-[#0A2540] hover:bg-[#143D66] text-white px-5 py-2.5 rounded-full font-medium shadow-lg shadow-[#0A2540]/20 transition"
            >
              今の状況を整理する（無料）
            </a>
          </div>
        </div>
      </header>
      
      {/* ========== Hero / First View ========== */}
      <section>
        {/* ✅ Hero画像（ヘッダー直下、余白なし） */}
        <div className="w-full flex justify-center items-center bg-[#E8F6FF]">
          <img
            src={heroImage}
            alt="不動産相談イメージ"
            className="h-[360px] w-full max-w-[1920px] object-contain object-center select-none pointer-events-none"
          />
        </div>

        <div className={pageContainer}>
          <div className="py-10 sm:py-16 text-center">
            
            {/* ✅ H1（FVメインコピー） */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062447] leading-tight mb-4">
              不動産で<br />
              <span className="text-[1.2em]">「迷っている人」</span><br />
              のための相談室
            </h1>
            
            {/* FVサブコピー */}
            <p className="text-[#062447]/70 text-base sm:text-lg leading-[1.85] mb-10 max-w-md mx-auto">
              判断を急がせず、<br />
              今なにを考えるべきかを整理します。
            </p>

            {/* ✅ FV直下コンテンツ（見出し＋箇条書き） */}
            <div className="max-w-md mx-auto mb-10 text-left">
              <h2 className="text-lg sm:text-xl font-bold text-[#062447] mb-4 text-center">
                こんな状態で、止まっていませんか？
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold flex-shrink-0">•</span>
                  <span className="text-[#062447]/80 leading-[1.85]">何が問題なのか、正直よく分からない</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold flex-shrink-0">•</span>
                  <span className="text-[#062447]/80 leading-[1.85]">売る・買う・動くべきか判断がつかない</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold flex-shrink-0">•</span>
                  <span className="text-[#062447]/80 leading-[1.85]">この悩みで不動産会社に行っていいのか分からない</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========== メインコンテンツ（space-y でセクション間の外側余白を確保） ========== */}
      <main className="flex flex-col space-y-16 sm:space-y-24">


      {/* ========== ① 共感の深掘りブロック ========== */}
      <section className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#062447] mb-6 leading-relaxed">
            それ、あなたの判断力がないわけではありません
          </h2>
          <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.9]">
            不動産の悩みは、<br />
            情報が多すぎて「整理できない」だけのことがほとんどです。<br />
            多くの方が、判断できずに立ち止まっています。
          </p>

          {/* ✅ メインCTA（濃紺ボタン） */}
          <div className="max-w-sm mx-auto mt-10 mb-3">
            <a
              href="https://line.me/ti/p/AbtvfPG8Wt"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-4 sm:py-5 text-lg font-bold text-white bg-[#0A2540] hover:bg-[#143D66] rounded-full shadow-[0_18px_50px_rgba(10,37,64,0.25)] transition"
            >
              今の状況を整理する（無料）
            </a>
          </div>
          
          {/* CTA直下の安心文言（2行・小さめ） */}
          <div className="text-[#062447]/50 text-xs space-y-1">
            <p>※ まだ結論が出ていない段階で大丈夫です</p>
            <p>※ 状況整理だけのご相談も歓迎しています</p>
          </div>

          {/* 副CTA（電話・小さめ） */}
          <div className="mt-6">
            <a
              href="tel:0120-316-710"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-medium text-[#062447]/60 bg-white/50 border border-[#062447]/10 rounded-full hover:bg-white/70 transition"
            >
              📞 お電話でも相談できます
            </a>
          </div>
        </div>
      </section>

      {/* ========== ② 整理すると何が変わるのか ========== */}
      <section className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-10 sm:space-y-12">
          
          {/* 見出し */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-3">
              整理すると、こんな変化が起こります
            </h2>
            <p className="text-[#062447]/80 text-base sm:text-lg font-medium">
              「何を悩んでいるのか」が、はっきりします
            </p>
          </div>

          {/* 3ステップ図解 */}
          <div className="space-y-4">
            {/* STEP 1: 考えが散らかっている */}
            <div className="rounded-[24px] border border-[#7DD3FC]/40 bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">🧠</div>
                <div>
                  <h3 className="font-bold text-[#0C4A6E] text-base sm:text-lg mb-3">考えが散らかっている</h3>
                  <ul className="space-y-2 text-[#0C4A6E]/70 text-[14px] sm:text-[15px] leading-[1.8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7DD3FC] flex-shrink-0">・</span>
                      <span>情報が多すぎて、何が問題か分からない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7DD3FC] flex-shrink-0">・</span>
                      <span>売る・買う・待つが頭の中で混ざっている</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7DD3FC] flex-shrink-0">・</span>
                      <span>考えているのに、前に進めない</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 矢印 */}
            <div className="flex justify-center py-2">
              <span className="text-[#38BDF8] text-2xl">↓</span>
            </div>

            {/* STEP 2: 状況を整理する */}
            <div className="rounded-[24px] border border-[#38BDF8]/40 bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">🗂️</div>
                <div>
                  <h3 className="font-bold text-[#075985] text-base sm:text-lg mb-3">状況を整理する</h3>
                  <ul className="space-y-2 text-[#075985]/70 text-[14px] sm:text-[15px] leading-[1.8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#38BDF8] flex-shrink-0">・</span>
                      <span>今の状況と選択肢を書き出す</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#38BDF8] flex-shrink-0">・</span>
                      <span>「今考えること」と「後でいいこと」を分ける</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#38BDF8] flex-shrink-0">・</span>
                      <span>判断を急がず、優先順位だけ決める</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 矢印 */}
            <div className="flex justify-center py-2">
              <span className="text-[#0EA5E9] text-2xl">↓</span>
            </div>

            {/* STEP 3: 進む方向が見える */}
            <div className="rounded-[24px] border border-[#0EA5E9]/40 bg-gradient-to-br from-[#BAE6FD] to-[#7DD3FC] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">🧭</div>
                <div>
                  <h3 className="font-bold text-[#0369A1] text-base sm:text-lg mb-3">進む方向が見える</h3>
                  <ul className="space-y-2 text-[#0369A1]/80 text-[14px] sm:text-[15px] leading-[1.8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0EA5E9] flex-shrink-0">・</span>
                      <span>まず何をすべきかが明確になる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0EA5E9] flex-shrink-0">・</span>
                      <span>比較・検討ができる状態になる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0EA5E9] flex-shrink-0">・</span>
                      <span>「動く／動かない」を自分で選べる</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 締めコピー */}
          <div className="text-center space-y-4">
            <p className="text-[#062447]/70 text-sm sm:text-base leading-[1.85]">
              判断できるようになる理由は、「知識」ではなく「整理」です。
            </p>
            <p className="text-[#062447]/80 text-base sm:text-lg font-medium leading-[1.85]">
              迷いが消えたあと、<br />
              「動く」「動かない」を決めれば大丈夫です。
            </p>
          </div>
        </div>
      </section>

      {/* ========== ③ こんな方に向いています ========== */}
      <section className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
          
          {/* 見出し */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062447]">
              困った不動産のお悩み相談室は<br />
              「まだ決めきれない方」のための場所です
            </h2>
          </div>

          {/* 箇条書き */}
          <div className={cardStack}>
            {[
              '不動産のことで悩んでいるものの、\n何が問題なのか・何から考えるべきか整理できていない方',
              '売る・買う・待つなど、\n選択肢が多すぎて判断できずに止まっている方',
              '不動産会社に行くほどではないが、\n一度、頭の中を整理してから考えたい方',
              '結論を急がされるのが不安で、\nまずは落ち着いて状況を整理したい方',
            ].map((item, i) => (
              <div key={i} className={cardItem}>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 text-lg font-bold flex-shrink-0">✓</span>
                  <span className="text-[#062447]/90 leading-[1.85] text-[15px] sm:text-base whitespace-pre-line">{item}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 補足（小さめ） */}
          <p className="text-center text-[#062447]/50 text-xs leading-relaxed">
            ※ すでに方向性が決まっている方の<br />
            「考え方が合っているか確認する場」としてのご相談も可能です
          </p>

          {/* 締め */}
          <p className="text-center text-[#062447]/80 text-base sm:text-lg font-medium leading-[1.85]">
            迷っている状態のまま、来ていただいて大丈夫な場所です。
          </p>
        </div>
      </section>

      {/* ========== ④ 相談すると何をするのか（3ステップ） ========== */}
      <section id="steps" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">3 Steps</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-3">
                相談すると、まずこんな流れで進みます
              </h2>
              <p className="text-[#062447]/70 text-sm leading-[1.85]">
                いきなり結論や方向性を決めることはありません
              </p>
            </div>

            {/* 3ステップ：1項目ずつ独立カード */}
            <div className={cardStack}>
              {[
                { 
                  step: '01', 
                  title: '今の状況を整理します', 
                  desc: '何に困っているのか、何が分からないのかを一緒に言葉にします。\n売る・買うを決める必要はありません。\n話がまとまっていなくても問題ありません。' 
                },
                { 
                  step: '02', 
                  title: '考えられる選択肢を整理します', 
                  desc: '「売る」「貸す」「保有する」「住み替える」など、\n今考えられる選択肢を整理して並べます。\nどれを選ぶかは、この場で決めなくて大丈夫です。' 
                },
                { 
                  step: '03', 
                  title: 'やるべきことの優先順位を整理します', 
                  desc: 'すべてを決める必要はありません。\n「今やるべきこと」と「後で考えていいこと」を切り分けます。' 
                },
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

            {/* 補足文 */}
            <div className="text-center">
              <p className="text-[#062447]/70 text-sm sm:text-base leading-[1.85]">
                ここまで進んでも、売却や購入を決める必要はありません。<br />
                整理だけで終わっても大丈夫です。
              </p>
            </div>

            {/* ⑤ 弱めのCTA（3ステップ後） */}
            <div className="text-center mt-8 sm:mt-10">
              <a
                href="https://line.me/ti/p/AbtvfPG8Wt"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-10 py-4 text-base font-bold text-white bg-[#0A2540] hover:bg-[#143D66] rounded-full shadow-[0_14px_40px_rgba(10,37,64,0.20)] transition"
              >
                今の状況を整理する（無料）
              </a>
              <div className="mt-4 text-[#062447]/50 text-xs space-y-1">
                <p>※ まだ結論が出ていない段階で大丈夫です</p>
                <p>※ 状況整理だけのご相談も歓迎しています</p>
              </div>
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
                className="inline-block px-10 py-4 text-lg text-white bg-[#0A2540] hover:bg-[#143D66] rounded-full font-bold shadow-[0_18px_50px_rgba(10,37,64,0.25)] transition"
              >
                今の状況を整理する（無料）
              </a>
              <p className="mt-3 text-[#062447]/50 text-xs">※ 結論を出す必要はありません</p>
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

            {/* プロフィールカード */}
            <div className={`${largeCard} pb-8 sm:pb-10`}>
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={takaImage}
                  alt="Takaさん（相談員）"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg shadow-blue-500/20 mb-4"
                />
                <p className="font-bold text-[#062447] text-lg">Takaさん</p>
                <p className="text-[#062447]/50 text-sm">不動産お悩み整理担当</p>
              </div>
              
              {/* カード内の区切り線 */}
              <div className="mx-auto my-5 sm:my-7 h-px w-full max-w-full rounded-full bg-[#062447]/[0.18]" />
              
              {/* 本文エリア */}
              <div className="px-[1.8em] py-[1.4em] sm:px-[2em] sm:py-[1.5em]">
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  不動産業界で約10年。<br />
                  売買仲介から複雑な権利調整まで、さまざまな案件に関わってきました。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  この相談室では、<br />
                  いきなり結論を出すことはしません。<br />
                  まずは状況を整理し、「今、何を考えるべきか」を一緒に確認します。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  迷っている状態のまま相談していただいて大丈夫です。<br />
                  考えがまとまっていなくても問題ありません。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-0">
                  決断を迫らず、整理だけを手伝う。<br />
                  そんな「壁打ち相手」として、お話を聞かせてください。
                </p>
              </div>
            </div>

            {/* 相談にあたって大切にしていること */}
            <div className="space-y-3">
              <p className="text-center text-[#062447]/60 text-sm font-medium mb-4">
                相談にあたって大切にしていること
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  '売買を前提にしません',
                  '結論を急ぎません',
                  'やる事だけ整理します',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-center text-[#062447]/80 text-sm font-medium shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* SNSリンク（ロゴアイコン） */}
            {(() => {
              const socials = [
                { name: 'X', href: 'https://x.com/t_fudosan_', icon: xIcon },
                { name: 'YouTube', href: 'https://www.youtube.com/channel/UCXj6VDr0Wur_DloCDewHMUw', icon: youtubeIcon },
                { name: 'Threads', href: 'https://www.threads.com/@t.fudosan?hl=ja', icon: threadsIcon },
                { name: 'Instagram', href: 'https://www.instagram.com/t.fudosan/', icon: instagramIcon },
                { name: 'note', href: 'https://note.com/merry_hornet4114', icon: noteIcon },
              ]
              return (
                <div className="flex justify-center gap-4">
                  {socials.map((sns) => (
                    <a
                      key={sns.name}
                      href={sns.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={sns.name}
                      title={sns.name}
                      className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-white/[0.55] border border-white/[0.30] shadow-sm hover:bg-white/[0.70] hover:shadow-md transition"
                    >
                      <img
                        src={sns.icon}
                        alt=""
                        className="w-8 h-8 object-contain opacity-80"
                        loading="lazy"
                        decoding="async"
                      />
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

      {/* ========== なぜ無料なのか ========== */}
      <section className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
          
          {/* 見出し */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062447]">
              なぜ、無料で相談を受けているのか
            </h2>
          </div>

          {/* 本文 */}
          <div className={cardItem}>
            <div className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.9] space-y-5">
              <p>
                この相談室は、<br />
                「今すぐ売る・買う」を決める場ではありません。
              </p>
              <p>
                不動産の悩みは、<br />
                判断を迫られる前に、<br />
                一度「状況を整理する時間」が必要なことがほとんどです。
              </p>
              <p>
                その整理の段階で、<br />
                お金の心配をせず、<br />
                安心して話せる場所をつくりたいと考え、<br />
                この相談は無料にしています。
              </p>
              <p>
                無理に動く必要はありません。<br />
                まずは、考える順番を整えるための時間として使ってください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 私たちの立ち位置について ========== */}
      <section className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
          
          {/* 見出し */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062447]">
              私たちの立ち位置について
            </h2>
          </div>

          {/* 本文 */}
          <div className={cardItem}>
            <div className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.9] space-y-5">
              <p>
                この相談室では、<br />
                相談したからといって、<br />
                売却や購入を勧めることはありません。
              </p>
              <p>
                状況を整理した結果、<br />
                「今は動かない」という選択になることも、<br />
                大切な判断だと考えています。
              </p>
              <p>
                もしすでに他社で検討中の場合でも、<br />
                セカンドオピニオンとしてのご相談は可能です。
              </p>
              <p>
                結論を出すためではなく、<br />
                「どう考えるべきか」を一緒に整理する。<br />
                それが、私たちの関わり方です。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ========== 最終CTA + フォーム ========== */}
      <section id="form" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* CTA直上テキスト */}
            <div className="text-center">
              <p className="text-white/90 text-base sm:text-lg leading-[1.85] mb-6">
                ここまで読んで、<br />
                少しでも「自分のことかも」と感じたら、<br />
                一度、状況を整理してみてください。
              </p>
              <p className="text-white/70 text-sm leading-[1.85]">
                「動くかどうか」を決める前に、<br />
                「考える順番」だけ整えてみませんか。
              </p>
            </div>

            {/* ✅ 状況整理カード */}
            <div className="mx-auto w-full max-w-[720px] sm:max-w-[60%] bg-white/[0.62] border border-white/[0.38] rounded-2xl shadow-[0_12px_28px_rgba(2,20,60,0.12)] backdrop-blur-xl p-6 sm:p-8">
              <div className="text-center">
                <p className="text-cyan-600 text-xs font-semibold tracking-wide uppercase mb-2">
                  Contact
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-[#062447]">
                  まずは状況を整理してみませんか？
                </h3>
                <p className="mt-2 text-[#062447]/70 text-sm leading-[1.85]">
                  お悩みをお聞かせください。<br />
                  一緒に状況を整理しましょう。
                </p>
              </div>

              {/* メインCTAボタン */}
              <div className="mt-6">
                <a
                  href="https://line.me/ti/p/AbtvfPG8Wt"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-bold text-white bg-[#0A2540] hover:bg-[#143D66] shadow-[0_18px_50px_rgba(10,37,64,0.25)] transition"
                >
                  今の状況を整理する（無料）
                </a>
              </div>

              {/* CTA直下補足 */}
              <div className="mt-4 text-center text-[#062447]/50 text-xs space-y-1">
                <p>※ 結論を出す必要はありません</p>
                <p>※ 状況整理だけで終わっても大丈夫です</p>
              </div>
            </div>

            {/* 電話相談カード */}
            <div className="mx-auto w-full max-w-[720px] sm:max-w-[60%] bg-white/[0.45] border border-white/[0.30] rounded-2xl shadow-[0_8px_20px_rgba(2,20,60,0.08)] backdrop-blur-xl p-5 sm:p-6">
              <div className="text-center">
                <p className="text-[#062447]/60 text-sm leading-[1.85] mb-3">
                  話しながら整理したい方は、<br />
                  お電話でのご相談も可能です。
                </p>
                <a
                  href="tel:0120-316-710"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#062447]/70 bg-white/70 border border-[#062447]/10 rounded-full hover:bg-white/90 transition"
                >
                  📞 お電話でも相談できます
                </a>
              </div>
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
                        className="w-full py-4 text-white font-bold bg-[#0A2540] hover:bg-[#143D66] rounded-full shadow-[0_18px_50px_rgba(10,37,64,0.25)] transition"
                      >
                        今の状況を整理する（無料）
                      </button>
                      <p className="mt-4 text-[#062447]/50 text-xs text-center">
                        ※ 結論を出す必要はありません
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
          className="block w-full py-4 text-center text-white font-bold bg-[#0A2540] hover:bg-[#143D66] rounded-full shadow-lg shadow-[#0A2540]/20"
        >
          今の状況を整理する（無料）
        </a>
        <p className="mt-2 text-[#062447]/50 text-xs text-center">
          ※ 結論を出す必要はありません
        </p>
      </div>

      {/* スマホ用余白 */}
      <div className="h-28 sm:hidden" />
    </div>
  )
}

export default App
