export default function Static() {
    return (<>
      <div className="text-xl  flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl text-center">
        Welcome back this is Static page.
            </h1>
        <p className="text-justify italic m-10">
        <b className="italic m-2 mb-10 underline text-left">
                Benifits of Server Side Rendering in Next.js
            </b>
            <br />
        SSR (Server-Side Rendering) in Next.js offers several key advantages, including improved SEO, as search engines can easily crawl and index pre-rendered HTML. It provides faster initial load times by delivering fully rendered pages, enhancing perceived performance and user experience. SSR ensures consistent and up-to-date content since data is fetched and rendered on each request. It also reduces client-side processing, making it ideal for lower-powered devices, and improves performance for users on slow networks by sending a ready-to-view page from the server. This results in a faster, more efficient web experience.
        </p>
      </div>
    </>
    );
  }
  