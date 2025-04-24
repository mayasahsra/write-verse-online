
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      toast({
        title: "Missing title",
        description: "Please add a title to your blog post",
        variant: "destructive"
      });
      return;
    }
    
    if (!content.trim()) {
      toast({
        title: "Missing content",
        description: "Please add content to your blog post",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would be sent to an API
    console.log({ title, content, coverImage, tags: tags.split(",").map(tag => tag.trim()) });
    
    toast({
      title: "Blog post saved",
      description: "Your blog post has been saved successfully!"
    });
    
    // Simulate redirect to created post
    setTimeout(() => {
      window.alert("In a real app, you would be redirected to your published post now.");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container-custom max-w-4xl">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
              {isPreview ? "Preview" : "Write a New Blog Post"}
            </h1>
            <Button 
              variant="ghost" 
              onClick={() => setIsPreview(!isPreview)}
            >
              {isPreview ? "Edit" : "Preview"}
            </Button>
          </div>
          
          {isPreview ? (
            <PreviewMode title={title} content={content} coverImage={coverImage} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-lg font-medium mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  placeholder="Enter your blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <div>
                <label htmlFor="coverImage" className="block text-lg font-medium mb-1">
                  Cover Image URL (optional)
                </label>
                <Input
                  id="coverImage"
                  placeholder="https://example.com/image.jpg"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                />
                {coverImage && (
                  <div className="mt-2 h-48 overflow-hidden rounded-md">
                    <img 
                      src={coverImage} 
                      alt="Cover preview" 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Invalid+Image+URL";
                      }}
                    />
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="content" className="block text-lg font-medium mb-1">
                  Content
                </label>
                <Textarea
                  id="content"
                  placeholder="Write your blog post here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[300px] font-sans"
                />
              </div>
              
              <div>
                <label htmlFor="tags" className="block text-lg font-medium mb-1">
                  Tags (comma separated)
                </label>
                <Input
                  id="tags"
                  placeholder="Writing, Technology, Health..."
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button type="submit">
                  Publish Blog Post
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const PreviewMode = ({ title, content, coverImage }: { title: string, content: string, coverImage: string }) => {
  return (
    <Card className="overflow-hidden">
      {coverImage && (
        <div className="w-full h-72">
          <img 
            src={coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Preview+Cover";
            }} 
          />
        </div>
      )}
      <div className="p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          {title || "Your Blog Title Will Appear Here"}
        </h1>
        <div className="blog-content prose lg:prose-xl max-w-none">
          {content ? (
            content.split('\n').map((paragraph, index) => 
              paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
            )
          ) : (
            <p className="text-muted-foreground">Your blog content will appear here...</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default WriteBlog;
