
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  coverImage?: string;
  tags?: string[];
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Card className={`overflow-hidden h-full transition-shadow hover:shadow-md ${featured ? 'md:flex' : ''}`}>
      {post.coverImage && (
        <div className={`${featured ? 'md:w-1/2' : 'w-full h-48'}`}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={`${featured ? 'md:w-1/2' : 'w-full'}`}>
        <CardHeader className="p-4 md:p-6">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-muted text-xs px-2 py-1 rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <Link to={`/blog/${post.id}`}>
            <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} hover:text-primary transition-colors`}>
              {post.title}
            </h3>
          </Link>
          <p className="text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
        </CardHeader>
        <CardFooter className="p-4 md:p-6 pt-0 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">{post.author}</div>
          <div className="text-sm text-muted-foreground">{post.readTime} • {post.date}</div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogCard;
