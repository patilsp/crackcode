'use client';

import { useEffect } from 'react';
import usePostStore from '@/store/postStore';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PostFeed = () => {
  const { posts, fetchPosts } = usePostStore();
  const [isClient, setIsClient] = useState(false);

 
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  if (!isClient) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-4">
      {posts.map((post) => {
        const user = post.creator || {};    

        return (
          <Card key={post.$id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.creator?.image || '/assets/images/avatar.jpg'} />
                  <AvatarFallback>{(user.name || "U").substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex justify-between w-full items-center">
                    <div>
                    <CardTitle className="text-base">{post.creator?.username || 'Unknown'}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">Posted 2 days ago</CardDescription>
                    </div>
                    <div>
                    <Button variant="outline" size="sm">Follow</Button>
                    </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
             
              {post.imagePath && (
                <img
                  src={post.imagePath}
                  alt="Post content"
                  className="rounded-md w-full h-40 object-cover border"
                />
              )}
               <h3 className="font-medium text-lg">{post.title}</h3>
               <p className="text-sm text-muted-foreground">{post.description}</p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default PostFeed;
