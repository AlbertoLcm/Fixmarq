import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

// An array with your links
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/lavado-de-tinacos-y-cisternas", changefreq: "daily", priority: 0.7 },
  {
    url: "/instalaciones-de-cualquier-tipo",
    changefreq: "daily",
    priority: 0.7,
  },
  {
    url: "/acabados-de-interiores-y-exteriores",
    changefreq: "daily",
    priority: 0.7,
  },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: "https://www.fixmarq.com.mx" });

// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  data.toString()
);
