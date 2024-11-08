"use client"

import Image from "next/image"
import { PostAndNavQuery, PostQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export function BlogPageComponent(props: {
  data: PostAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  return (
    <>
      <SiteHeader {...props.data.nav} />
      <div className="bg-muted relative">
        <div className="absolute -inset-24 blur-lg">
          <Image
            fill={true}
            className="object-cover"
            alt=""
            src={data.post?.image || ""}
          />
        </div>
      </div>
      <div className="bg-muted relative py-8 lg:py-24">
        <div className="mx-auto max-w-5xl px-8">
          <div
            data-tina-field={tinaField(data.post, "body")}
            className="prose dark:prose-invert max-w-none"
          >
            <TinaMarkdown content={data.post.body} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
