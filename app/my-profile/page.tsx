"use client"

import { useState } from "react"
import { useUserStore } from "@/store/userStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Briefcase, Calendar, Edit, UserPlus, UserMinus, LinkIcon } from "lucide-react"
import PostFeed from "@/components/PostFeed"

export default function ProfilePage() {
    
  // Get user from store (fallback to static data if not available)
  const storeUser = useUserStore((state) => state.user)

  // Static user data (would normally come from API/database)
  const staticUser = {
    id: "1",
    name: "Alex Johnson",
    username: "alexj",
    email: "alex@example.com",
    bio: "Product designer and developer based in San Francisco. Passionate about creating intuitive user experiences and solving complex problems.",
    location: "San Francisco, CA",
    website: "https://alexjohnson.dev",
    occupation: "Senior Product Designer",
    joinedDate: "January 2020",
    followers: 1243,
    following: 567,
    posts: 89,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  }

  const user = storeUser || staticUser

  // State for form data
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio || "",
    location: user.location || "",
    website: user.website || "",
    occupation: user.occupation || "",
  })

  // State for following status
  const [isFollowing, setIsFollowing] = useState(false)

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would update the user data in your store or API
    console.log("Updated user data:", formData)
    setIsEditing(false)
  }

  // Toggle follow status
  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="mt-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatarUrl || "/assets/images/avatar.jpg"} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="text-center">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  {/* <p className="text-muted-foreground">@{user.username}</p> */}

                  <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{user.email}</span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 text-center gap-4">
                {!isEditing && (
                  <Button onClick={toggleFollow} variant={isFollowing ? "outline" : "default"} className="w-full">
                    {isFollowing ? (
                      <>
                        <UserMinus className="mr-2 h-4 w-4" />
                        Unfollow
                      </>
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Follow
                      </>
                    )}
                  </Button>
                )}

                {!isEditing && (
                  <Button variant="outline" className="w-full" onClick={() => setIsEditing(true)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                )}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 text-center">
                <div>
                  <p className="text-xl font-bold">{user.posts}</p>
                  <p className="text-muted-foreground text-sm">Posts</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{user.followers}</p>
                  <p className="text-muted-foreground text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{user.following}</p>
                  <p className="text-muted-foreground text-sm">Following</p>
                </div>
              </div>

              {!isEditing && (
                <div className="mt-6 space-y-3">
                  {user.bio && <p className="text-sm">{user.bio}</p>}

                  {user.location && (
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{user.location}</span>
                    </div>
                  )}

                  {/* {user.email && (
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{user.email}</span>
                    </div>
                  )} */}

                  {user.occupation && (
                    <div className="flex items-center text-sm">
                      <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{user.occupation}</span>
                    </div>
                  )}

                  {user.website && (
                    <div className="flex items-center text-sm">
                      <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a
                        href={user.website}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.website.replace(/(^\w+:|^)\/\//, "")}
                      </a>
                    </div>
                  )}

                  {user.joinedDate && (
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Joined {user.joinedDate}</span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          {isEditing ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>Update your profile information</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={4} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" value={formData.location} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" name="website" value={formData.website} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </CardFooter>
              </form>
            </Card>
          ) : (
            <Tabs defaultValue="posts">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="followers">Followers</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-6">
                <div className="grid grid-cols-1 gap-4">
                 <PostFeed />
                </div>
              </TabsContent>

              <TabsContent value="followers" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5].map((follower) => (
                    <Card key={follower}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=User+${follower}`} />
                            <AvatarFallback>U{follower}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium">User {follower}</h4>
                            <p className="text-sm text-muted-foreground">@user{follower}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="following" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3].map((following) => (
                    <Card key={following}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=User+${following}`} />
                            <AvatarFallback>U{following}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium">User {following}</h4>
                            <p className="text-sm text-muted-foreground">@user{following}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            Unfollow
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  )
}
