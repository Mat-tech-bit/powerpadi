'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Heart, MessageCircle, Share2, Send, Search } from 'lucide-react'
import Link from 'next/link'

interface FeedPost {
  id: string
  author: string
  avatar: string
  timestamp: string
  content: string
  likes: number
  comments: number
  liked: boolean
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<FeedPost[]>([
    {
      id: '1',
      author: 'Adekunle Adeyemi',
      avatar: 'AA',
      timestamp: '2 hours ago',
      content: 'Just upgraded my solar panel system with PowerSolar! The installation was smooth and the team was very professional. Highly recommend!',
      likes: 24,
      comments: 5,
      liked: false,
    },
    {
      id: '2',
      author: 'Chioma Williams',
      avatar: 'CW',
      timestamp: '4 hours ago',
      content: 'Power is back in Ikoyi! Grid is stable now. Great to see everyone celebrating on the community feed. Let\'s keep up with our grid intelligence reports.',
      likes: 18,
      comments: 3,
      liked: false,
    },
    {
      id: '3',
      author: 'David Okafor',
      avatar: 'DO',
      timestamp: '6 hours ago',
      content: 'Looking for technicians in Victoria Island to install my new inverter. Any recommendations from the community?',
      likes: 12,
      comments: 8,
      liked: false,
    },
  ])

  const [newPost, setNewPost] = useState('')

  const handlePostSubmit = () => {
    if (!newPost.trim()) return

    const post: FeedPost = {
      id: String(posts.length + 1),
      author: 'You',
      avatar: 'YOU',
      timestamp: 'now',
      content: newPost,
      likes: 0,
      comments: 0,
      liked: false,
    }

    setPosts([post, ...posts])
    setNewPost('')
  }

  const toggleLike = (id: string) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Community Feed</h1>
        <p className="text-muted-foreground mt-2">Connect with your neighbors and stay updated on local energy issues</p>
      </div>

      {/* Create Post */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-primary">YOU</span>
          </div>
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your thoughts or ask the community..."
              className="w-full bg-muted border border-border rounded-lg p-3 text-foreground placeholder-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              rows={3}
            />
            <div className="flex justify-end mt-3">
              <Button onClick={handlePostSubmit} disabled={!newPost.trim()}>
                <Send className="w-4 h-4 mr-2" />
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-secondary">{post.avatar}</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">{post.timestamp}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  post.liked
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-muted text-muted-foreground'
                }`}
              >
                <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                <span className="text-sm font-medium">{post.likes}</span>
              </button>

              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{post.comments}</span>
              </button>

              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Community Solar */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Community Solar</h3>
          <p className="text-muted-foreground mb-6">
            Communities with unreliable electricity can join together and express interest in affordable shared solar solutions. Powering the future, together.
          </p>
          <Button className="w-full mb-2">Join Interest List</Button>
          <Button variant="outline" className="w-full">Learn More</Button>
        </div>

        {/* Power Intelligence Report */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Power Intelligence Report</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Based on 90 days of automated reports in your area, the community averages only <span className="font-semibold text-foreground">6.4 hours</span> of grid power daily.
          </p>
          <Button variant="outline" className="w-full">View Full Report</Button>
        </div>
      </div>

      {/* Featured Project */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">TRENDING PROJECT</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mayfair Estate Project</h3>
            <p className="text-muted-foreground mb-6 text-sm">Victoria Island, Phase II</p>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Household Interest</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '56%' }} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">28/50</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Current Grid Availability</p>
                <p className="text-2xl font-bold text-foreground">26%</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Est. Monthly Savings</p>
                <p className="text-2xl font-bold text-primary">32%</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Estimated Solar Reliability</p>
                <p className="text-2xl font-bold text-foreground">99.8%</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button>Join Interest List</Button>
              <Button variant="outline">View Site Map</Button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-32 h-32 bg-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl mb-2">☀️</p>
                <p className="text-sm font-semibold text-secondary">Solar Potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
