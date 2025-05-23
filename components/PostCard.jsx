'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const PostCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()

  const [copied, setCopied] = useState('')

  const profileImage = post.creator?.image || '/assets/images/avatar.jpg'

  const handleProfileClick = () => {
    if (post.creator?._id === session?.user.id) return router.push('/profile')
    router.push(`/profile/${post.creator?._id}?name=${post.creator?.username}`)
  }

  const handleCopy = () => {
    setCopied(post.title)
    navigator.clipboard.writeText(post.title)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col justify-between h-full"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={profileImage}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">
              {post.creator?.username}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              {post.creator?.email}
            </p>
          </div>
        </div>

        <div className="cursor-pointer" onClick={handleCopy}>
          <Image
            src={
              copied === post.title
                ? '/assets/images/tick.svg'
                : '/assets/images/copy.svg'
            }
            alt="copy_icon"
            width={18}
            height={18}
          />
        </div>
      </div>

      {/* Post Image */}
      <div className="mt-4">
        <Image
          src={post.imagePath}
          alt="post_image"
          width={300}
          height={300}
          className="rounded-md object-cover"
        />
      </div>

      {/* Title */}
      <h4 className="my-3 text-gray-700 dark:text-gray-500 text-sm">{post.title}</h4>
      <p className="my-3 text-gray-700 dark:text-gray-300 text-sm">{post.description}</p>

      {/* Category */}
      <p
        onClick={() => handleTagClick?.(post.category)}
        className="text-sm font-medium text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
      >
        {post.category}
      </p>

      {/* Edit/Delete Actions */}
      {session?.user.id === post.creator?._id && pathName === '/profile' && (
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex gap-4">
          <p
            className="text-sm text-green-600 dark:text-green-400 cursor-pointer hover:underline"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="text-sm text-red-500 dark:text-red-400 cursor-pointer hover:underline"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default PostCard
