function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-800">不動産お悩み相談室</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problems" className="text-gray-600 hover:text-blue-600">お悩みの方へ</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">サービスの特徴</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">運営者について</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600">よくある質問</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            無料相談
          </a>
        </div>
      </header>
      
      {/* Hero */}
      <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-40 text-center">
          <p className="text-sm tracking-widest text-gray-300 mb-4">
            不動産お悩み相談室
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-shadow-white-md">
            専門家を入れずに、<br />
            寄り添って伴走する不動産相談
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            売る・買う・相続・借地・トラブル。
            いきなり弁護士や業者に行く前に、
            まず状況整理から一緒に進めます。
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            無料で相談する
          </a>
        </div>
      </section>

      {/* Problems */}
      <section id="problems" className="bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">こんなお悩み、ありませんか？</h2>
            <p className="text-gray-600 mt-4">一人で抱え込まず、まずは話してみることから始めましょう。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-3">不動産の売却</h3>
              <p className="text-gray-700">「いくらで売れるんだろう？」「どの会社に頼めばいいの？」「手続きが複雑そうで不安…」といった、売却に関するあらゆる疑問にお答えします。</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-3">相続問題</h3>
              <p className="text-gray-700">「親から相続したけど、どうすれば…」「兄弟で揉めたくない」「税金はどれくらいかかるの？」など、複雑な相続問題を整理します。</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-3">借地・空き家</h3>
              <p className="text-gray-700">「地主さんとの交渉がうまくいかない」「遠方にある空き家の管理が大変」「活用方法がわからない」など、特殊なケースにも対応します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-16 py-20">
          {/* 見出し */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              私たちの3つの特徴
            </h2>
            <p className="mt-4 text-gray-600">
              特定の業者に偏らない、中立な立場からのアドバイスをお約束します。
            </p>
          </div>

          {/* ★ ここが並列の本体 */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* ① */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-900">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    徹底的な状況整理
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    複雑に絡み合った問題も、一つひとつ丁寧にヒアリング。
                    何が問題で、どんな選択肢があるのかを可視化します。
                  </p>
                </div>
              </div>
            </div>

            {/* ② */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-900">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    あなたに寄り添う伴走型
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    専門家や業者に丸投げしません。
                    あなたが納得して意思決定できるよう、最後まで隣で支えます。
                  </p>
                </div>
              </div>
            </div>

            {/* ③ */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-900">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    中立・公平なアドバイス
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    特定の不動産会社には属していません。
                    営業トークなしで、あなたにとっての最善を考えます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">
              運営者について
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              はじめまして、Takaと申します。不動産業界で約10年、売買仲介から複雑な権利調整まで、数多くの「こじれやすい案件」と向き合ってきました。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              業界にいると、どうしても「売るため」「契約するため」の力が働きがちです。しかし、お客様が本当に求めているのは、必ずしもそれだけではない、と常に感じていました。
            </p>
            <p className="text-gray-700 leading-relaxed">
              専門家に丸投げする前に、まずは全体像を整理し、無理のない選択肢を一緒に考える。そんな「壁打ち相手」のような存在が必要ではないかと思い、この相談室を立ち上げました。
            </p>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden order-1 md:order-2">
            <img 
              src="https://placehold.co/600x800/e2e8f0/4a5568?text=Profile+Image" 
              alt="プロフィール画像" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-gray-50">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">ご相談の流れ</h2>
            <p className="text-gray-600 mt-4">たった4つのステップで、あなたの悩みを整理します。</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            <div className="relative mb-12">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-3">Step 1: お申し込み</h3>
                    <p className="text-gray-700">まずは無料相談フォームから、あなたの状況を簡単にお知らせください。2営業日以内にこちらからご連絡いたします。</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
            <div className="relative mb-12">
              <div className="md:flex items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-3">Step 2: 初回ヒアリング (無料)</h3>
                    <p className="text-gray-700">オンラインまたは対面で、約60分間のヒアリングを行います。守秘義務を遵守しますので、安心して何でもお話しください。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-12">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-3">Step 3: 状況整理と方針のご提案</h3>
                    <p className="text-gray-700">ヒアリング内容を元に、問題の全体像や考えられる選択肢をまとめたレポートを作成します。今後の進め方について、いくつかの方針をご提案します。</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
            <div className="relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-3">Step 4: 実行サポート (オプション)</h3>
                    <p className="text-gray-700">必要に応じて、専門家（弁護士、税理士など）の紹介や、不動産業者とのやり取りのサポートも行います。もちろん、ご自身で進めることも可能です。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">よくあるご質問</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Q. 相談は本当に無料ですか？</h3>
              <p className="text-gray-700">A. はい、初回60分のヒアリングと、それに伴う簡単なアドバイスまでは完全に無料です。その後の詳細な調査や実行サポートをご希望の場合は、別途お見積もりを提示し、ご納得いただいた上で費用が発生します。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Q. 地方の不動産でも相談可能ですか？</h3>
              <p className="text-gray-700">A. はい、全国どこでも対応可能です。オンラインでのご相談が中心となりますが、必要に応じて現地への出張も検討します（別途交通費を申し受けます）。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Q. 相談したら、必ずどこかの業者を紹介されますか？</h3>
              <p className="text-gray-700">A. いいえ、そんなことはありません。私たちの目的は、あくまであなたの悩みを整理し、最善の選択肢を見つけるお手伝いをすることです。業者への依頼が必要ないと判断すれば、そのようにお伝えします。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Q. 匿名での相談は可能ですか？</h3>
              <p className="text-gray-700">A. 初回のお問い合わせは匿名でも構いません。しかし、具体的なアドバイスを行うためには、ある程度の個人情報や物件情報が必要になる点はご了承ください。もちろん、個人情報は厳重に管理いたします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-blue-700 text-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">
            さあ、最初の一歩を
            <br />
            踏み出してみませんか？
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            一人で悩む時間はもう終わりです。
            あなたの状況を、私たちに聞かせてください。
            最適な解決策を一緒に見つけましょう。
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition shadow-lg"
          >
            今すぐ無料で相談する
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p>&copy; 2025 不動産お悩み相談室. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App