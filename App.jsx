import { useState } from "react";

const memories = [
  {
    src: "/memories/photo1.jpg",
    alt: "i'm love you",
    caption: "i'm love you",
    className: "memory-card memory-one",
  },
  {
    src: "/memories/photo2.gif",
    alt: "love you",
    caption: "love you",
    className: "memory-card memory-two",
  },
  {
    src: "/memories/photo3.jpg",
    alt: "us, always",
    caption: "us, always",
    className: "memory-card memory-three",
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={isOpen ? "love-page is-open" : "love-page"}>
      <div className="paper-texture" aria-hidden="true" />
      <div className="floating-hearts" aria-hidden="true">
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
      </div>

      <section className="letter-stage" aria-label="Love letter">
        <div className="intro-copy">
          <p>ส่งถึงคนพิเศษ</p>
          <h1>มีจดหมายมาครับ</h1>
          <span>{isOpen ? "เปิดแล้วนะ อ่านช้า ๆ ได้เลย" : "แตะซองเพื่อเปิด"}</span>
        </div>

        <div className="surprise-area">
          {memories.map((memory) => (
            <figure className={memory.className} key={memory.src}>
              <img src={memory.src} alt={memory.alt} />
              <figcaption>{memory.caption}</figcaption>
            </figure>
          ))}

          <button
            className="envelope"
            type="button"
            aria-label="Open the letter"
            aria-pressed={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <span className="envelope-back" />
            <span className="envelope-letter" />
            <span className="envelope-flap" />
            <span className="envelope-front" />
            <span className="envelope-heart">♥</span>
          </button>
        </div>

        <article className="love-note">
          <p>
            ถึงแพรวๆ ขอบคุณนะที่มาเป็นความสุข และมาเป็นสีสันให้กับชีวิตเค้า
          </p>
          <p>
            เราจะอยู่ด้วยกันไปเรื่อย ๆ จนแก่ไปด้วยกันเลยนะ <br />ไม่ว่าเธอจะเจออะไร
            จำไว้ว่ามีเค้าอยู่ตรงนี้เสมอ
          </p>
          <p>หันมาเมื่อไหร่ก็เจอเลย รักเธอครับ ตั้งใจสอบนะครับ สู้ๆ</p>
          <div className="heart-row" aria-label="love hearts">
            🩷 🩷 🩷 🩷 🩷
          </div>
        </article>

        {isOpen && (
          <button className="reset-button" type="button" onClick={() => setIsOpen(false)}>
            ปิดจดหมายอีกครั้ง
          </button>
        )}
      </section>
    </main>
  );
}
