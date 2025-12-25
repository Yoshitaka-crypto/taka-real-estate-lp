import { useState } from 'react'
import takaImage from './assets/taka.png'
import heroImage from './assets/hero.png'
import empathyImage from './assets/empathy-stopped-realestate.png'
import section03OrganizeBeforeAfter from './assets/section03-organize-before-after.png'
import section04ConsultationCouple from './assets/section04-consultation-couple.png'
import xIcon from './assets/social/x.svg'
import youtubeIcon from './assets/social/youtube.svg'
import threadsIcon from './assets/social/threads.svg'
import instagramIcon from './assets/social/instagram.svg'
import noteIcon from './assets/social/note.svg'
import voiceAvatar40f from './assets/voice-avatar-40f.png'
import voiceAvatar30m from './assets/voice-avatar-30m.png'
import voiceAvatar50m from './assets/voice-avatar-50m.png'
import section03MessageVsCallUp from './assets/section03-message-vs-call-up.png'
import section03MessageVsCallDown from './assets/section03-message-vs-call-down.png'

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
            <div className="font-bold text-lg text-[#062447]">
              困った不動産の<br className="md:hidden" />お悩み相談室
            </div>
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
      <section className="bg-[#E8F6FF]">
        {/* ✅ Hero画像（ヘッダー直下、余白なし・比率維持・max-width 1280px） */}
        <div 
          className="w-full max-w-[1280px] mx-auto"
          style={{ aspectRatio: '1856 / 576' }}
        >
          <img
            src={heroImage}
            alt="不動産相談イメージ"
            className="block w-full h-full object-contain object-center select-none pointer-events-none"
          />
        </div>

        <div className={pageContainer}>
          <div className="text-center">
            
            {/* ✅ H1（メインコピー・先に表示） */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062447] leading-tight mb-8">
              不動産のことで<br />
              <span className="text-[1.1em]">立ち止まっていませんか？</span>
          </h1>

            {/* 感情共感イメージ（見出し直下） */}
            <img
              src={empathyImage}
              alt="不動産のことで立ち止まっている人のイメージ"
              className="block mx-auto mb-8 w-full max-w-md rounded-xl"
            />
            
            {/* FVサブコピー */}
            <p className="text-[#062447]/70 text-base sm:text-lg leading-[1.85] mb-8 max-w-md mx-auto">
              不動産の悩みは、情報が多すぎて<br />
              「整理できない」だけのことがほとんどです。<br />
              多くの方が、判断できずに立ち止まっています。
            </p>

            {/* メインCTA */}
            <div className="max-w-sm mx-auto">
              <a
                href="https://line.me/ti/p/AbtvfPG8Wt"
                target="_blank"
                rel="noreferrer"
                className="block w-full py-4 sm:py-5 text-lg font-bold text-white bg-[#0A2540] hover:bg-[#143D66] rounded-full shadow-[0_18px_50px_rgba(10,37,64,0.25)] transition"
              >
                今の状況を整理する（無料）
              </a>
              <div className="mt-4 text-[#062447]/50 text-xs space-y-1">
                <p>※ まだ結論が決まっていなくても大丈夫です</p>
                <p>※ 特定の提案や売り込みは行いません</p>
              </div>
              <div className="mt-4">
                <a
                  href="tel:0120-316-710"
                  className="inline-flex items-center gap-2 text-xs text-[#062447]/60 hover:text-[#062447]/80 transition"
          >
                  📞 お電話での相談も可能です
          </a>
        </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== メインコンテンツ（space-y でセクション間の外側余白を確保） ========== */}
      <main className="flex flex-col space-y-16 sm:space-y-24">


      {/* ========== ①② 判断できない理由 → 整理で変わること ========== */}
      <section className={sectionPadding}>
        {/* 理屈（判断できない理由） */}
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#062447] mb-6 leading-relaxed">
            判断できないのは「整理」していないから
          </h2>
          <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.9]">
            判断できるようになるには「勉強」ではなく「整理」です。<br />
            迷いが消えたあと、「動く」「動かない」を決めれば大丈夫です。
          </p>
        </div>

        {/* 画像（理屈に密着） */}
        <div className="mt-2 px-4">
          <img
            src={section03OrganizeBeforeAfter}
            alt="整理すると、こんな変化が起こります"
            className="w-full max-w-[560px] mx-auto rounded-2xl shadow-md"
          />
        </div>

        {/* 見出し＋サブコピー */}
        <div className="max-w-[720px] mx-auto px-4 mt-6 sm:mt-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-3">
              整理すると、こんな変化が起こります
            </h2>
            <p className="text-[#062447]/80 text-base sm:text-lg font-medium">
              「何を悩んでいるのか」が、はっきりします
            </p>
          </div>
        </div>

        {/* 3ステップ図解など */}
        <div className="max-w-[720px] mx-auto px-4 mt-8 sm:mt-10 space-y-10 sm:space-y-12">

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
          
          {/* 相談シーンのイラスト（見出し直上） */}
          <div className="mx-auto max-w-[640px]">
            <img
              src={section04ConsultationCouple}
              alt="不動産の相談をしている40〜50代夫婦と相談員のイラスト"
              className="w-full h-auto rounded-xl"
            />
          </div>

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

      {/* ========== ④ 3 STEPS（相談の流れ） ========== */}
      <section id="steps" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
            
            {/* 見出し */}
            <div className="text-center">
              <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">3 Steps</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062447] mb-3">
                相談すると、まずこんな流れで進みます
              </h2>
              <p className="text-[#062447]/70 text-sm leading-[1.85]">
                いきなり結論や行動を推し進めることはありません
              </p>
            </div>

            {/* 3ステップ */}
            <div className={cardStack}>
              {[
                { 
                  step: '01', 
                  title: '今の状況を整理します', 
                  desc: '何に困っているのか、何が分からないのかを一緒に言語化します。売る・買うを決める必要はありません。話がまとまっていなくても問題ありません。'
                },
                { 
                  step: '02', 
                  title: '考えられる選択肢を整理します', 
                  desc: '「売る」「買う」「保持する」「住み替える」など、今考えられる選択肢を整理して、それぞれのメリット・デメリットを整理します。どれを選ぶかは、この場で決めなくて大丈夫です。'
                },
                { 
                  step: '03', 
                  title: 'やるべきことの優先順位を整理します', 
                  desc: 'すべてを決める必要はありません。「今やるべきこと」と「後で考えていいこと」を切り分けます。'
                },
              ].map((item, i) => (
                <div key={i} className={cardItem}>
                  <div className="flex gap-4 items-start">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#062447] mb-2">{item.title}</h3>
                      <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85]">{item.desc}</p>
          </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 補足文 */}
            <div className="text-center">
              <p className="text-[#062447]/70 text-sm sm:text-base leading-[1.85]">
                ここまで進んでも、物件購入を決める必要はありません。<br />
                整理が終わってゆっくり検討すれば大丈夫です。
              </p>
            </div>

            {/* CTA */}
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
                <p>※ まだ結論が決まっていない状態でも大丈夫です</p>
                <p>※ 状況整理だけのご相談も受け付けています</p>
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
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg shadow-blue-500/20 mb-5"
                />
                <h3 className="font-semibold text-[#062447] text-2xl sm:text-3xl leading-snug mb-1">Takaさん</h3>
                <p className="text-[#062447]/50 text-base sm:text-lg">不動産お悩み整理担当</p>
              </div>
              
              {/* カード内の区切り線 */}
              <div className="mx-auto my-5 sm:my-7 h-px w-full max-w-full rounded-full bg-[#062447]/[0.18]" />
              
              {/* 本文エリア（ストーリー性追加） */}
              <div className="px-[1.8em] py-[1.4em] sm:px-[2em] sm:py-[1.5em]">
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  私自身、以前は「相談できる相手がいない」ことで苦しんだ経験があります。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  不動産業界で約10年。売買仲介から複雑な権利調整まで、さまざまな案件に関わる中で、「誰に相談すればいいか分からない」という声を何度も聞いてきました。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  その経験から、「売り込まれる心配なく、安心して話せる場所があれば」という思いでこの相談室を始めました。
                </p>
                <p className="text-[#062447]/70 text-[15px] sm:text-base leading-[1.85] mb-[0.9em]">
                  現在は<strong>X（Twitter）</strong>や<strong>YouTube</strong>、<strong>note</strong>等で、不動産の悩みに寄り添う情報発信も行っています。
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

      {/* ========== お客様の声 ========== */}
      <section id="testimonials" className={sectionPadding}>
        <div className="max-w-[720px] mx-auto px-4 space-y-6 sm:space-y-8">
          
          {/* 見出し */}
          <div className="text-center">
            <p className="text-cyan-600 text-xs font-medium mb-3 tracking-wide uppercase">Voice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062447]">
              ご相談者の声
            </h2>
          </div>

          {/* お客様の声カード：引用形式 */}
          <div className={cardStack}>
            {[
              {
                quote: '「何から手を付ければいいかわからず不安でしたが、丁寧に整理を手伝ってもらい気持ちが軽くなりました。自分に必要な選択がはっきりして、相談して本当によかったです。」',
                attr: '40代・女性',
                avatar: voiceAvatar40f,
                alt: '40代 女性'
              },
              {
                quote: '「相談で頭の中を整理したことで、今やるべきことが明確になりました。モヤモヤが解消され、次に踏むべきステップが見えてきました。」',
                attr: '30代・男性',
                avatar: voiceAvatar30m,
                alt: '30代 男性'
              },
              {
                quote: '「プロの第三者の意見を聞けて安心しました。押し付けがなく寄り添ったサポートのおかげで、焦らずじっくり考える余裕ができました。」',
                attr: '50代・男性',
                avatar: voiceAvatar50m,
                alt: '50代 男性'
              },
            ].map((item, i) => (
              <div key={i} className={`${cardItem} relative pb-6`}>
                <p className="text-[#062447]/80 text-[15px] sm:text-base leading-[1.85] mb-20 sm:mb-[72px]">
                  {item.quote}
                </p>
                {/* アイコン＋年代ラッパー（右下配置） */}
                <div className="absolute right-6 bottom-4 flex flex-col items-center gap-2">
                  <img
                    src={item.avatar}
                    alt={item.alt}
                    className="w-14 h-14 rounded-full border-4 border-white/40 bg-white object-cover shadow-md"
                  />
                  <p className="text-[#062447]/50 text-sm whitespace-nowrap">
                    （{item.attr}）
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                { q: '本当に無料で相談できるのですか？', a: 'はい、無料です。お気軽にご利用ください。' },
                { q: '相談はどのように行いますか？', a: '主にLINEを使ったオンラインでのやりとりになります。ご希望に応じて電話での相談も可能です。' },
                { q: '不動産のことならどんな内容でも相談できますか？', a: '具体的な物件探しから売却の検討まで、不動産に関するお悩みであれば幅広く対応いたします。まずはお気軽にご相談ください。' },
                { q: '匿名でも相談できますか？', a: '初回は匿名でも問題ありません。具体的なアドバイスには状況を詳しく伺う必要がある場合があります。' },
                { q: '税金や法律の判断も聞けますか？', a: '一般的な範囲でお答えすることは可能です。専門的な判断が必要な場合は専門家をご紹介いたします。' },
                { q: '相談したら必ず「売る」方向で進めないといけませんか？', a: 'いいえ。整理の結果、「今は動かない」という選択も大切な判断だと考えています。無理に結論を出す必要はありませんのでご安心ください。' },
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
            
            {/* CTA直上テキスト（画像上・文章・画像下の縦構成） */}
            <div className="flex flex-col items-center">
              {/* ① 画像（上） */}
              <img
                src={section03MessageVsCallUp}
                alt=""
                className="w-full max-w-3xl"
              />
              
              {/* ② 文章ブロック（白背景・非透過・角丸なし） */}
              <div 
                className="w-full max-w-3xl text-center py-8 px-10"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <p className="text-[#062447]/90 text-lg sm:text-xl leading-relaxed mb-4">
                  ここまで読んで、少しでも「自分のことかも」と感じたら、<br className="hidden sm:inline" />
                  一度、状況を整理してみてください。
                </p>
                <p className="text-[#062447]/70 text-base sm:text-lg leading-relaxed">
                  「動くかどうか」を決める前に、<br />
                  「考える順序」だけ整理してみませんか。
                </p>
              </div>
              
              {/* ③ 画像（下）- 隙間なしで連続 */}
              <img
                src={section03MessageVsCallDown}
                alt=""
                className="w-full max-w-3xl"
              />
            </div>

            {/* ✅ 状況整理カード */}
            <div className="mx-auto w-full max-w-[720px] sm:max-w-[60%] bg-white/[0.62] border border-white/[0.38] rounded-2xl shadow-[0_12px_28px_rgba(2,20,60,0.12)] backdrop-blur-xl p-6 sm:p-8">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#062447]">
                  まずは状況を整理してみませんか？
                </h3>
                <p className="mt-2 text-[#062447]/70 text-sm leading-[1.85]">
                  気持ちを整理してください。<br />
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
                <p>※ 無理に結論を出す必要はありません</p>
                <p>※ 状況整理だけのご利用でも問題ありません</p>
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
          ※ まだ結論が決まっていなくてもOK
        </p>
      </div>

      {/* スマホ用余白 */}
      <div className="h-28 sm:hidden" />
    </div>
  )
}

export default App
