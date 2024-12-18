import Link from "next/link"
import {
  PageBlocksFeaturedPosts,
  PageBlocksFeaturedPostsPosts,
} from "@/tina/__generated__/types"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturedPosts({
  key,
  posts,
}: {
  key: number
  posts: PageBlocksFeaturedPostsPosts[]
}) {
  return (
    <>
      {posts.length > 0 && (
        <section className="container mx-auto grid grid-cols-1 gap-8 p-4 sm:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.label}>
              <CardHeader>
                <CardTitle>{post.featuredPost?.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <div>{post.featuredPost?.description}</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link
                  href={`/blog/${post.featuredPost?._sys.breadcrumbs.join(
                    "/"
                  )}`}
                >
                  <Button>Learn more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>
      )}
    </>
  )
}
