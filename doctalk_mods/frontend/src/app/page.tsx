import GeneratedImage from "@/components/UserChat";

export default function Home() {
  return (
    <main className="container flex-height">
      <div className="hero">
        <h1>
          Conquer new heights with Switchback's
          <span style={{ display: "block" }}>RAG-based chat application</span>
        </h1>
      </div>
      <GeneratedImage />
      <div>
        <p className="credit">
          Switchback's RAG chat app is a trailblazing solution crafted with Python + NextJS, capable of exploring, summarizing, and answering queries from various documents. This demo harnesses insights from{" "}
          <a href="https://octo.ai/?utm_source=doctalk" target="_blank">
            OctoAI
          </a>{" "}
          and{" "}
          <a href="https://www.pinecone.io/" target="_blank">
            Pinecone
          </a>{" "}
          documentation.
        </p>
        <p className="disclaimer">
          Embark on this journey wisely; evaluate model responses independently to ensure their readiness for real-world scenarios.
        </p>
      </div>
    </main>
  );
}
