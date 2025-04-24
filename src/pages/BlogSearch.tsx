
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard, { BlogPost } from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

// Mock data for demonstration
const allPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Creative Writing: Finding Your Unique Voice",
    excerpt: "Discover how to develop your unique writing style and create content that resonates with your audience.",
    author: "Jane Austen",
    date: "Apr 20, 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Writing", "Creativity", "Self-Improvement"]
  },
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
  {
    id: "5",
    title: "How to Overcome Writer's Block: Practical Solutions",
    excerpt: "Writer's block can be frustrating, but these strategies can help you get your creativity flowing again.",
    author: "F. Scott Fitzgerald",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Writer's Block", "Creativity", "Productivity"]
  },
  {
    id: "6",
    title: "The Future of Content Creation in a Digital World",
    excerpt: "As technology evolves, so does the way we create and consume content. Here's what to expect.",
    author: "Margaret Atwood",
    date: "Apr 8, 2025",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Future Trends", "Digital Content", "Technology"]
  },
];

const BlogSearch = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Perform search when component mounts if there's an initial query
  React.useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const performSearch = (searchQuery: string) => {
    const results = allPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setSearchResults(results);
    setHasSearched(true);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update the URL with the search query
    navigate(`/search?q=${encodeURIComponent(query)}`);
    performSearch(query);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Search Blog Posts</h1>
          
          <form onSubmit={handleSearch} className="mb-12 max-w-2xl">
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, content, or tag..."
                  className="h-12"
                />
              </div>
              <Button type="submit" className="h-12">
                <SearchIcon className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </form>
          
          {hasSearched && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
                  {query && ` for "${query}"`}
                </h2>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try different keywords or browse our recent posts
                  </p>
                  <Button
                    onClick={() => navigate("/")}
                    variant="outline"
                  >
                    Browse Recent Posts
                  </Button>
                </div>
              )}
            </>
          )}
          
          {!hasSearched && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-2">Start searching</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Search for blog posts by title, content, or tags. Discover interesting articles from our writers.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogSearch;
