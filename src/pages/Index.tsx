
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard, { BlogPost } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for demonstration
const featuredPost: BlogPost = {
  id: "1",
  title: "The Art of Creative Writing: Finding Your Unique Voice",
  excerpt: "Discover how to develop your unique writing style and create content that resonates with your audience.",
  author: "Jane Austen",
  date: "Apr 20, 2025",
  readTime: "5 min read",
  coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  tags: ["Writing", "Creativity", "Self-Improvement"]
};

const recentPosts: BlogPost[] = [
  {
    id: "2",
    title: "10 Essential Tips for Blog Writing Success",
    excerpt: "Learn the fundamental practices that can elevate your blog writing from amateur to professional.",
    author: "Ernest Hemingway",
    date: "Apr 18, 2025",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Blogging", "Tips", "Writing"]
  },
  {
    id: "3",
    title: "Writing for Digital Platforms: What You Need to Know",
    excerpt: "The digital landscape has transformed how we create and consume written content. Here's what writers should focus on.",
    author: "Virginia Woolf",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Digital", "Content Strategy", "SEO"]
  },
  {
    id: "4",
    title: "The Psychology of Storytelling in Modern Media",
    excerpt: "Understanding how narratives work can help you create more engaging and impactful content.",
    author: "George Orwell",
    date: "Apr 12, 2025",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Psychology", "Storytelling", "Writing"]
  },
];

const trendingTopics = [
  "Writing Tips", "Personal Development", "Technology", "Health & Wellness", 
  "Travel", "Food", "Business", "Science", "Arts & Culture", "Environment"
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary py-20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="mb-4">Ideas worth sharing</h1>
              <p className="text-xl mb-8">Discover stories, thinking, and expertise from writers on any topic.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/write">
                  <Button size="lg">Start Writing</Button>
                </Link>
                <Link to="/explore">
                  <Button variant="outline" size="lg">Explore Posts</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post Section */}
        <section className="py-12">
          <div className="container-custom">
            <h2 className="mb-8">Featured Post</h2>
            <BlogCard post={featuredPost} featured={true} />
          </div>
        </section>
        
        {/* Recent Posts Section */}
        <section className="py-12 bg-muted/30">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-8">
              <h2>Recent Posts</h2>
              <Link to="/explore">
                <Button variant="link">View all</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Trending Topics Section */}
        <section className="py-12">
          <div className="container-custom">
            <h2 className="mb-8">Trending Topics</h2>
            <div className="flex flex-wrap gap-3">
              {trendingTopics.map((topic, index) => (
                <Link key={index} to={`/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="outline" className="rounded-full">
                    {topic}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="container-custom text-center">
            <h2 className="mb-4">Ready to share your story?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community of writers and readers. Create, connect, and grow your audience.
            </p>
            <Link to="/write">
              <Button size="lg">Start Writing Today</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
