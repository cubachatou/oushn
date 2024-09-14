"use client";
import { ReactNode } from "react";
import PortableText from "react-portable-text";

export default function RichTextBlock({ block }: { block: Array<any> }) {
  return (
    <div className="container prose prose-2xl">
      <PortableText
        content={block}
        serializers={
          {
            // h2: ({ children }: { children: ReactNode }) => <h2>{children}</h2>,
            // h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
            //   <h3 {...props} />
            // ),
            // h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
            //   <h4 {...props} />
            // ),
            // h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
            //   <h5 {...props} />
            // ),
            // h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
            //   <h6 {...props} />
            // ),
            // p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
            //   <p {...props} />
            // ),
            // a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
            //   <a {...props} />
            // ),
            // strong: (props: React.HTMLAttributes<HTMLElement>) => (
            //   <strong {...props} />
            // ),
            // em: (props: React.HTMLAttributes<HTMLElement>) => <em {...props} />,
            // underline: (props: React.HTMLAttributes<HTMLElement>) => (
            //   <u {...props} />
            // ),
            // code: (props: React.HTMLAttributes<HTMLElement>) => (
            //   <code {...props} />
            // ),
            // li: ({ children }: { children: ReactNode }) => (
            //   <li className="special-list-item">{children}</li>
            // ),
            // ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
            //   <ul {...props} />
            // ),
            // ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
            //   <ol {...props} />
            // ),
            // li: (props: React.HTMLAttributes<HTMLLIElement>) => <li {...props} />,
          }
        }
      />
    </div>
  );
}
