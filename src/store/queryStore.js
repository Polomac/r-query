import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usePostsStore = create(persist(set => ({
  posts: [],
  setPosts: (posts) => set(() =>({ posts })),
}), {name: 'postsStore'}))